class Utils:
    @staticmethod
    def get_path_to_chrome_exe() -> str:
        return f'"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"'

    @staticmethod
    def get_init_chrome_params(profile: str) -> str:
        return f'--disk-cache-dir=C:\\trust\\cache --start-maximized --profile-directory={profile}'