import shutil
import requests
import colorama

from datetime import datetime
from colorama import Fore
from random import shuffle, randint, choice
from threading import Thread
from time import sleep
from subprocess import Popen, PIPE
from os import system, path


HEADERS_POST_REQUEST = { 'Content-Type': 'application/x-www-form-urlencoded' }
API_REMOTE_URI = 'http://my-mails.ru/trust/api/'

def get_time(pattern: str) -> str:
    return datetime.today().strftime(pattern)

def close_browser() -> None:
    Popen('taskkill /F /IM chrome.exe /T', stdout=PIPE)

def is_folder_exists(path_folder: str) -> bool:
    return path.isdir(path_folder)

def get_status_script_by_thread(ip: str, thread: int) -> str:
    return requests.get(f'{API_REMOTE_URI}server.php?action=get_status_script&thread={thread}&ip={ip}').text

def set_status_script_by_thread(status: str, ip: str, thread: int) -> None:
    requests.get(f'{API_REMOTE_URI}server.php?action=set_status_script&thread={thread}&ip={ip}&status={status}')

def open_browser(profile: str, data: str, thread: int) -> None:
    Main.active_processes[f'thread{thread}'] = Popen(fr'"C:\Program Files\Google\Chrome\Application\chrome.exe" {data} --disk-cache-dir=C:\Cache --start-maximized --profile-directory={profile}', stdout=PIPE)
    
def delete_folder(folder: str) -> None:
    shutil.rmtree(folder, ignore_errors=True)

def copy_folder(path_from: str, path_to: str) -> None:
    shutil.copytree(path_from, path_to)

def get_bad_mails_by_ip(ip: str) -> list:
    response = requests.get(f'{API_REMOTE_URI}server.php?action=get_bad_mails').json()
    
    for data in response:
        if data['server'] == ip:
            return data['badmails'].split('\n')
        
    return []       

def get_ip_of_current_machine() -> str:
    return requests.get(f'{API_REMOTE_URI}server.php?action=get_ip').text
    
def get_settings_by_ip(ip: str) -> dict:
    return requests.post(f'{API_REMOTE_URI}server.php?action=get_settings', headers=HEADERS_POST_REQUEST, data={ 'ip': ip }).json()
    
def get_proxies_and_agents_and_accounts_by_ip(ip: str) -> dict:
    return requests.post(f'{API_REMOTE_URI}server.php?action=get_mails_and_proxy_and_agents', headers=HEADERS_POST_REQUEST, data={ 'ip': ip }).json()

def get_controls_by_ip(ip: str) -> dict:
    return requests.post(f'{API_REMOTE_URI}server.php?action=get_controls', headers=HEADERS_POST_REQUEST, data={ 'ip': ip }).json()

class Main:
    active_processes: dict = {}
    is_making_copy: bool = False
    current_list_accounts: list = []
    threads: dict = {}
    
    @staticmethod
    def start_in_dedicated_thread(account: str, ip: str, settings: dict, thread: int) -> None:
        try:
            login = account.split(';')[0]
                    
            profile_path = f'C://Users//Administrator//AppData//Local//Google//Chrome//User Data//{login}'
                    
            if not is_folder_exists(profile_path):
                while Main.is_making_copy: sleep(1)
                Main.is_making_copy = True
                copy_folder('C://trust//profile', profile_path)
                sleep(3); Main.is_making_copy = False
                    
            Thread(target=open_browser, args=(login, f'http://localhost:3000/{account};{thread}/', thread)).start()
            set_status_script_by_thread('1', ip, thread); sleep(1)
                    
            counter_emergecy_reboot = int(settings['randomizer']['emergency_reboot'])
                    
            while get_status_script_by_thread(ip, thread) == '1': 
                counter_emergecy_reboot -= 1; sleep(1)
                if counter_emergecy_reboot < 1:
                    break
                        
            # delay between change accounts
            sleep(randint(int(settings['randomizer']['wait_next_login_from']), int(settings['randomizer']['wait_next_login_to'])))
                    
            for data in get_bad_mails_by_ip(ip):
                profile_path = f'C://Users//Administrator//AppData//Local//Google//Chrome//User Data//{data.split(";")[0]}'
                        
                if is_folder_exists(profile_path):
                    delete_folder(profile_path)
            
            # reset account from list
            for index, account_in_list in enumerate(list(Main.current_list_accounts)):
                if account == account_in_list:
                    del Main.current_list_accounts[index]
                    break
        except: pass
        finally:
            Main.threads[f'thread{thread}'] = 'free'

def main() -> None:
    try:
        ip = get_ip_of_current_machine()
        
        while True:        
            settings = get_settings_by_ip(ip) # -> json
            proxies_and_accounts = get_proxies_and_agents_and_accounts_by_ip(ip) # -> json
            controls = get_controls_by_ip(ip)
            
            mails_array = proxies_and_accounts['mails'].split('\n')
            shuffle(mails_array)
            
            for thread in range(int(controls['threads'])):
                thread_status = Main.threads.get(f'thread{thread + 1}', 'free')
                
                if not thread_status == 'free': continue 
                
                while True:
                    account = choice(mails_array)
                    if not account in Main.current_list_accounts:
                        break
                        
                Main.current_list_accounts.append(account)
                Main.threads[f'thread{thread + 1}'] = 'use'
                Thread(target=Main.start_in_dedicated_thread, args=(account, ip, settings, thread + 1)).start()
                print(Fore.GREEN + f'[{get_time("%H:%M:%S")}] запустил бразуер. данные: {account} поток: {thread + 1}');
            
            # wait for free some thread
            while True:
                print(Fore.YELLOW + f'[{get_time("%H:%M:%S")}] жду освобождения потоков: {Main.threads.values()}'); sleep(5)
                if not 'use' in Main.threads.values():
                    break
            
            close_browser(); sleep(5)
            delete_folder(f'C:/Cache/')
            print(Fore.GREEN + f'[{get_time("%H:%M:%S")}] отключил браузеры && отчистил кеш')
    except Exception as msg:
        print(Fore.RED + f'[{get_time("%H:%M:%S")}] {msg}')
        sleep(15); main()
                        
if __name__ == '__main__':
    colorama.init()
    main()
