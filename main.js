const {app, BrowserWindow} = require('electron');
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600
    })
    win.loadFile(path.join(__dirname, 'ui/index.html'))
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})