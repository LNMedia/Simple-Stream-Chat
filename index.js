const express = require('express');
const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

// is Electron running?
const isElectron = !!process.versions.electron;

// 🔧 Init Express-Server
const expressApp = express();

// Loading page
expressApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'interface.html'));
});

// Start Express-Server
const server = expressApp.listen(0, () => {
    const address = server.address();
    const port = address.port;
    console.log(`Express läuft auf http://localhost:${port}`);

    if (isElectron) {
        app.whenReady().then(() => {
            createWindow(port);
        });
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

let mainWindow;

function createWindow(port) {
    mainWindow = new BrowserWindow({
        width: 1300,
        height: 900,
        icon: path.join(__dirname, 'resources', 'images', 'icon.ico'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            backgroundThrottling: false
        }
    });

    Menu.setApplicationMenu(null);
    mainWindow.loadURL(`http://localhost:${port}`);
}
