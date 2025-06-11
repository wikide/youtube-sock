require('dotenv').config(); // Загружаем .env
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Получаем прокси из .env или используем значение по умолчанию
const proxyUrl = process.env.PROXY_URL || 'socks5://127.0.0.1:1080';

// Применяем настройки прокси
app.commandLine.appendSwitch('proxy-server', proxyUrl);

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'icon.icns'),
    webPreferences: {
      devTools: false
    }
  });

  win.loadURL('https://youtube.com');

  win.webContents.on('will-navigate', (event, url) => {
    if (!url.includes('youtube.com')) {
      event.preventDefault();
      win.loadURL('https://youtube.com');
    }
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.includes('youtube.com')) {
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);
