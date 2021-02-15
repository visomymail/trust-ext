from helpers.System import System
from helpers.API import API
from helpers.Utils import Utils
from helpers.constants import FOLDER_CACHE_PATH
from start import start_ext

import colorama
import time

from colorama import Fore
from threading import Thread
from random import choice, shuffle


class State:
    threads: dict = {}
    active_processes: dict = {}
    current_list_accounts: list = []
    is_making_copy: bool = False

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
                Thread(target=start_ext, args=(account, thread + 1, settings, api, State)).start()
                print(Fore.GREEN + f'[{System.get_time("%H:%M:%S")}] запустил бразуер. данные: {account} поток: {thread + 1}')
            
            # wait for free some thread
            while True:
                print(Fore.YELLOW + f'[{System.get_time("%H:%M:%S")}] жду освобождения потоков: {State.threads.values()}')
                time.sleep(5)
                if not 'use' in State.threads.values():
                    break
            
            System.close_browser(); time.sleep(5)
            System.delete_folder(FOLDER_CACHE_PATH)
            print(Fore.GREEN + f'[{System.get_time("%H:%M:%S")}] отключил браузеры && отчистил кеш')
    except Exception as msg:
        print(Fore.RED + f'[{System.get_time("%H:%M:%S")}] {msg}')
        time.sleep(15)
        main()

if __name__ == "__main__":
    Thread(target=Utils.hande_server, args=(3000,)).start()
    colorama.init()
    main()

