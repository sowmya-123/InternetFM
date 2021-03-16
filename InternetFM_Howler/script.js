const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    show:false,
    width:'850px',
    height:'700px',
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.loadFile('radio.html')
  win.maximize();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
