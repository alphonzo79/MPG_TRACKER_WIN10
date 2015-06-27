# MPG Tracker
This project is a port of http://github.com/alphonzo79/MPT_Tracker from Android to Win10 UWP. The foundation for the Windows 10 app was forked from https://github.com/DeepElement/Win10Rocks-JS-Starter (Gotta give Todd the credit he deserves for putting together this bootstrap).
MPG Tracker is a simple little app that allows the user to set up their vehicle(s) based on vehicle data provided by Edmunds. Then they can log their fill ups and track their vehicle's gas mileage over time. Given enough community data, they can compare their vehicle's performance to that of others in the community.

##What follows below is the README.md directly from the bootstrap project mentioned above. I'm preserving it here because there's a lot of setup information included

# Win10.Rocks HTML5/JS Starter
Windows 10 starting architecture for HTML5/JS developers

[![Build Status](https://travis-ci.org/DeepElement/Win10Rocks-JS-Starter.svg?branch=master)](https://travis-ci.org/DeepElement/Win10Rocks-JS-Starter)

Features:

- CommonJS Business Layer (NodeJS friendly!)
- Visual Studio 2015 Test Runner Mocha integration
- Svelte Application Architecture (Service, Provider, Helper, Messages)
- MVVM Support (ViewBase, ViewModelBase, Commands, Events)
- Indexed Memory Storage with [LokiJS]( (supports momento with Storage Provider)
- Message-based Navigation Architecture (Data Posting, View/ViewModel Life-Cycle, BackStack)
- Bring-Your-Own-UI (WinJS 4.0 included by default)

![Architecture](docs/architecture.png)

#Setup
- Install Visual Studio 2015 RC
- Install Python 2.7.9 at https://www.python.org/downloads/release/python-279/
	- set the PYTHON env variable to local python.exe
- Install NodeJS tools at https://github.com/Microsoft/nodejstools/releases 
- (Temporary) Install Visual Studio 2010 C++ Expression (https://goo.gl/SsCI2D)
	- package `node-pgy` requires this but will be updated Q4 to reference new VS2015 deps 
- run `npm install` in the repo root
- run `npm install` in the test folder 

#Building

##Enviromental Variables
Prefix Gulp command with variable (e.g. `Version_Major=1 gulp build-win10`)

- `Version_Major`
- `Version_Minor`
- `Version_Revision`
- `Version_Build`

##Targets

- `gulp clean` 
	- deletes ./publish
- `gulp win10-build`
	- Test package deployed at ./publish/win10/*_Test
	- OneStore package at ./publish/win10/*.appxupload
- `gulp win8.1-build`
	- Test package deployed at ./publish/win8.1/*_Test
	- OneStore package at ./publish/win8.1/*.appxupload
- `gulp web-build`
	- Web root distributed to ./publish/web
	- Run local development host with `gulp web-host`

#Known Issues

- Mocha Debugger Broken for some environments - https://github.com/Microsoft/nodejstools/issues/79
- 
