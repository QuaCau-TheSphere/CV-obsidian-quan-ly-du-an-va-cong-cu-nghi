---
share: True
---
# PowerShell

## Permit PowerShell to run local scripts

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

"C:\Program Files\PowerShell\7\pwsh.exe" D:\Dropbox\Config\Startup.ps1

## Make sure a script runs with full admin privileges
```
param([switch]$Elevated)
function Test-Admin {
    $currentUser = New-Object Security.Principal.WindowsPrincipal $([Security.Principal.WindowsIdentity]::GetCurrent())
    $currentUser.IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)

}

if ((Test-Admin) -eq $false)  {
    if ($elevated) {
        # tried to elevate, did not work, aborting
    } else {
        Start-Process powershell.exe -Verb RunAs -ArgumentList ('-noprofile -noexit -file "{0}" -elevated' -f ($myinvocation.MyCommand.Definition))

    }
    exit
}
## Running with full privileges
```

# Run

control userpasswords2

# Turn off Defender

- Search for gpedit.msc and click the top result to open the Local Group Policy Editor.
- Browse the following path:  
    Computer Configuration > Administrative Templates > Windows Components > Microsoft Defender Antivirus

# Fix boot problem
```
bootsect/nt60 sys
bootrec /fixmbr
bootrec /fixboot
```

![How To Fix Bootrec /fixboot Access is Denied During Fix Boot Configuration (2 Fixes )](https://www.youtube.com/watch?reload=9&v=lRCyb7FzWFY)
