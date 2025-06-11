# YouTube-sock

Приложение позволяет запускать **YouTube** как десктоп-приложение на **macOS arm64** через защищённый `sock5` канал.

---

### 🚀 Разворачиваем приложение

```sh
brew install node
brew install npm
git clone git@github.com:wikide/youtube-sock.git
cd youtube-sock
npm init -y
npm install electron --save-dev
npm install -g electron-packager
npm install dotenv
npm install electron-installer-dmg -g
cp .env.dist .env
electron-packager . "YouTube Sock" --platform=darwin --arch=arm64 --icon=icon.icns
electron-installer-dmg YouTube\ Sock-darwin-arm64/YouTube\ Sock.app "Youtube-Sock"
```

---

- **Web-сайт приложения:** [killercoder.ru — создание приложения на Node.js для macOS](https://killercoder.ru/sozdanie-prilozheniya-pri-pomoshhi-node-js-dlya-mac-os/)
- **Telegram разработчика:** [@web3_devi](https://t.me/web3_devi)
