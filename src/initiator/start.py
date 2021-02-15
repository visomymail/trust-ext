from helpers.System import System
from helpers.Utils import Utils

import time

from threading import Thread


def start_ext(account: str, thread: int, settings: dict, settapi, State) -> None:
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