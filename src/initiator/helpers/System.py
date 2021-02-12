import shutil

from os import path
from datetime import datetime
from subprocess import Popen, PIPE

class System:
    @staticmethod
    def is_folder_exists(path_folder: str) -> bool:
        return path.isdir(path_folder)

    @staticmethod
    def get_time(pattern: str) -> str:
        return datetime.today().strftime(pattern)

    @staticmethod
    def close_browser() -> None:
        Popen('taskkill /F /IM chrome.exe /T', stdout=PIPE)

    @staticmethod
    def copy_folder(path_from: str, path_to: str) -> None:
        shutil.copytree(path_from, path_to)

    @staticmethod
    def delete_folder(folder: str) -> None:
        shutil.rmtree(folder, ignore_errors=True)

    @staticmethod
    def open_browser(profile: str, data: str, thread: int, active_processes: dict) -> None:
        active_processes[f'thread{thread}'] = Popen(fr'"C:\Program Files\Google\Chrome\Application\chrome.exe" {data} --disk-cache-dir=C:\Cache --start-maximized --profile-directory={profile}', stdout=PIPE)