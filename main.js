/*
* Main Electron Processes
*/

'use strict';

//Get App Module & Browser Module 
const {app, BrowserWindow} = require('electron')

//Define App Window
var mainWindow = null;

//When electron has finished initialisation, execute
app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        "min-width": 800,
        "min-height": 600,
        center: true,
        resizable: true 
    });

    //Load URL
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});