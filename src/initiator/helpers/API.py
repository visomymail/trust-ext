from constants import HEADERS_POST_REQUEST, API_REMOTE_URI

import requests


class API:
    '''
    @X-Auth-Bearer - is a requiered param (IP);
    ResponseSchema: {status: *code*, {*data*}}
    '''

    @staticmethod
    def get_ip_of_current_machine() -> str:
        return requests.get(f'{API_REMOTE_URI}?action=get_ip').text

    def __init__(self, bearer: str):
        self.session = requests.Session()
        self.session.headers.update({
            'X-Auth-Bearer': bearer
        })
    
    # GET

    def get_settings(self) -> dict:
        return self.session.get(f'{API_REMOTE_URI}?action=get_settings').json()

    def get_proxies(self) -> dict:
        return self.session.get(f'{API_REMOTE_URI}?action=get_proxies').json()['proxies']

    def get_agents(self) -> dict:
        return self.session.get(f'{API_REMOTE_URI}?action=get_agents').json()['agents']
        
    def get_adresses(self) -> dict:
        return self.session.get(f'{API_REMOTE_URI}?action=get_adresses').json()

    def get_controls(self) -> dict:
        return self.session.get(f'{API_REMOTE_URI}?action=get_controlls').json()

    def get_status_script(self, thread: int) -> dict:
        return self.session.get(f'{API_REMOTE_URI}?action=get_status_script&thread={thread}').json()

    def get_bad_mails(self) -> list:
        return self.session.get(f'{API_REMOTE_URI}?action=get_bad_mails').json()

    # POST

    def set_status_script(self, data: dict) -> dict:
        return self.session.post(f'{API_REMOTE_URI}?action=set_status_script', headers=HEADERS_POST_REQUEST, data=data).json()