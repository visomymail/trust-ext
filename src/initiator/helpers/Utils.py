import os

from helpers.constants import FOLDER_CACHE_PATH

class Utils:
    @staticmethod
    def get_path_to_chrome_exe() -> str:
        return f'"C:\\{Utils.get_program_files()}\\Google\\Chrome\\Application\\chrome.exe"'

    @staticmethod
    def get_path_to_profile(login: str) -> str:
        return f'C:\\Users\\{os.getlogin()}\\AppData\\Local\\Google\\Chrome\\User Data\\{login}'

    @staticmethod
    def get_init_chrome_params(profile: str) -> str:
        return f'--disk-cache-dir=${FOLDER_CACHE_PATH} --start-maximized --profile-directory={profile}'

    @staticmethod
    def get_program_files() -> str:
        return 'Program Files (x86)' if os.path.exists('C:\\Program Files (x86)') else 'Program Files'

    @staticmethod
    def get_path_to_copy_profile_folder() -> str:
        return 'C:\\trust\\files\\profile'

    @staticmethod
    def hande_server(port: int) -> None:
        from http.server import HTTPServer, SimpleHTTPRequestHandler

        class Handler(SimpleHTTPRequestHandler):
            def log_message(self, format, *args):
                pass

        httpd = HTTPServer(('localhost', 3000), Handler)
        httpd.serve_forever()