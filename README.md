# README #

### Installing ###

* Install .NET core 3.1

Windows 
```
PowerShell
dotnet-install.ps1 -Channel 3.1 -Runtime aspnetcore
```
macOS 
```
bash
./dotnet-install.sh --channel 3.1 --runtime aspnetcore
```
Linux 
```
bash
mkdir -p $HOME/dotnet && tar zxf aspnetcore-runtime-3.1.0-linux-x64.tar.gz -C $HOME/dotnet
export DOTNET_ROOT=$HOME/dotnet
export PATH=$PATH:$HOME/dotnet
```

### Running ###

```
dotnet run
```

### Step migrate ###

After running project, Api doccument at link:

```
http://localhost:5055/swagger/index.html
```

* Step 1: Config Zendesk
```
Call apis:
PUT /api​/angia​/ZendeskSetting
POST /api​/angia​/ZendeskSetting
```
