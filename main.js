const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
process.env.NODE_ENV = 'development';

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function() {
    // Create new window
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        title: "Internet Bowser's Pomodoro Timer"
    });
    // Load html in window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Quit app when closed
    mainWindow.on('closed', function() {
        app.quit();
    });

});