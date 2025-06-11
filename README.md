# H1 Youtube-sock

Приложение позволяет запускать Youtube как дескотп приложение на mac os arm64 через защищеный sock5 канал

# H3 разворачиваем приложение

`$ brew install node

$ brew install npm

$ git clone git@github.com:wikide/youtube-sock.git

$ cd youtube-sock

$ npm init -y

$ npm install electron --save-dev

$ npm install -g electron-packager

$ npm install dotenv

$ npm install electron-installer-dmg -g

$ cp .env.dist .env

$ electron-packager . "YouTube Sock" --platform=darwin --arch=arm64 --icon=icon.icns

$ electron-installer-dmg YouTube\ Sock-darwin-arm64/YouTube\ Sock.app "Youtube-Sock"`

Web сайт приложения - https://killercoder.ru/sozdanie-prilozheniya-pri-pomoshhi-node-js-dlya-mac-os/
Телеграмм разработчика - https://t.me/web3_devi
