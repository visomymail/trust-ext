#define OutputDirPath "C:\Users\username\Desktop\work\code\trust-ext\bin"
#define MyAppName "Trust Extension"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "My-Mails, Inc."
#define MyAppURL "https://my-mails.ru/"

[Setup]
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
DefaultDirName=C:\trust
OutputDir={#OutputDirPath}
OutputBaseFilename=TrustInstaller
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"
Name: "russian"; MessagesFile: "compiler:Languages\Russian.isl"

[Files]
Source: "C:\Users\username\Desktop\work\code\trust-ext\setup\files\*"; DestDir: "C:\trust\files"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{commondesktop}\trust"; Filename: "{app}\files\trust.exe"

[Run]
Filename: "{app}\files\ChromeSetup.exe"; Description: "Install Chrome"; Flags: nowait postinstall skipifsilent