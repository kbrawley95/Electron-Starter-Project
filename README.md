# Electron: The Basics

## Overview

This repo is tailored to those who have an interest in learning Electron; the open-source framework for creating cross-platform, desktop applications using web tools such as **HTML**, **CSS** & **JS**.

## Setting Up Electron

Before development with Electron can commence, a some setup is required:

1. Acquire a text editor (e.g. Atom, Visual Studio Code)

2. Install Node.js/Package Manager for JavaScript(npm):
    - Latest Versions can be download from official sites, respectively: 
        1. **Node.js**: https://nodejs.org/en
        2. **NPM**: https://www.npmjs.com/
    - __*N.B*__ Node.js installs npm by default. So probably wise to install that first.
    - Successful installation can be verified by typing **npm** into your given cli/terminal.
    
3. Provided the aboved are installed correctly, you can now install electron:
    - This can be done using the following command: **npm install -g electron --dev-save**. This installs electron as globally, adding it to your system path.
    - Optional: In order to deploy the your applications to your choosen platform, a extension is required. 
      One example is electron-packager. This can be install using the following command: **npm install -g electron-packager --dev-    save**.
    - Documentation on configuring the packager for Linux, Mac, & Windows executables can be found [here] (https://github.com/electron-userland/electron-packager/blob/master/docs/api.md)
