from helpers.System import System
from helpers.API import API
from helpers.Utils import Utils
from helpers.constants import FOLDER_CACHE_PATH

import colorama
import time

from colorama import Fore
from threading import Thread


class State:
    threads: dict = {}
    active_processes: dict = {}
    current_list_accounts: list = []
    is_making_copy: bool = False

def start_ext(account: str, thread: int, settings: dict, settapi) -> None:
    try:
        login = account.split(';')[0]
                        
        profile_path = Utils.get_path_to_profile(login)

        if not is_folder_exists(profile_path):
            while State.is_making_copy: 
                time.sleep(1)

            State.is_making_copy = True
            copy_folder(Utils.get_path_to_copy_profile_folder(), profile_path)
            time.sleep(3)
            State.is_making_copy = False
        
        Thread(target=System.open_browser, args=(login, f'http://localhost:3000/{account};{thread}/', thread, State.active_processes)).start()
        api.set_status_script({
            'status': '1',
            'thread': thread
        })
        time.sleep(1)
                    
        counter_emergecy_reboot = int(settings['randomizer']['emergency_reboot'])
                    
        while api.get_status_script(thread) == '1': 
            counter_emergecy_reboot -= 1
            time.sleep(1)
            if counter_emergecy_reboot < 1:
                break
                        
        # delay between change accounts
        time.sleep(randint(int(settings['randomizer']['wait_next_login_from']), int(settings['randomizer']['wait_next_login_to'])))
                    
        for data in api.get_bad_mails():
            profile_path = Utils.get_path_to_profile(data.split(";")[0])
                        
            if is_folder_exists(profile_path):
                delete_folder(profile_path)
            
        # reset account from list
        for index, account_in_list in enumerate(list(State.current_list_accounts)):
            if account == account_in_list:
                del State.current_list_accounts[index]
                break
        except: pass
        finally:
            State.threads[f'thread{thread}'] = 'free'

def main() -> None:
    try:
        api = API(API.get_ip_of_current_machine())

        while True:
            settings = api.get_settings()
            controls = api.get_controls()

            adresses = api.get_adresses().split('\n')
            shuffle(adresses)

            for thread in range(int(controls['threads'])):
                thread_status = State.threads.get(f'thread{thread + 1}', 'free')
                
                if not thread_status == 'free': continue 
                
                while True:
                    account = choice(adresses)
                    if not account in State.current_list_accounts:
                        break
                        
                State.current_list_accounts.append(account)
                State.threads[f'thread{thread + 1}'] = 'use'
                Thread(target=start_ext, args=(account, thread + 1, settings, api)).start()
                print(Fore.GREEN + f'[{get_time("%H:%M:%S")}] запустил бразуер. данные: {account} поток: {thread + 1}');
            
            # wait for free some thread
            while True:
                print(Fore.YELLOW + f'[{get_time("%H:%M:%S")}] жду освобождения потоков: {Main.threads.values()}'); sleep(5)
                if not 'use' in State.threads.values():
                    break
            
            System.close_browser(); sleep(5)
            System.delete_folder(FOLDER_CACHE_PATH)
            print(Fore.GREEN + f'[{get_time("%H:%M:%S")}] отключил браузеры && отчистил кеш')
    except Exception as msg:
        print(Fore.RED + f'[{get_time("%H:%M:%S")}] {msg}')
        time.sleep(15)
        main()

if __name__ == "__main__":
    Thread(target=Utils.hande_server, args=(,)).start()
    colorama.init()
    main()

