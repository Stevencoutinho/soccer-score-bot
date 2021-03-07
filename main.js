const express = require("express");
// Messaging APIのSDKをimport
const line = require("@line/bot-sdk");
// expressのインスタンスを作成
const app = express();
// lineパラメータ設定
const lineConfig = {
  // 環境変数からアクセストークンをセットしています
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
   // 環境変数からChannel Secretをセットしています
  channelSecret: process.env.LINE_CHANNEL_SECRET
};
// Webサーバー設定
app.listen(process.env.PORT || 3000);
// ルーター設定
app.post("/bot/webhook", line.middleware(lineConfig), (req, res, next) => {
  res.sendStatus(200);
  console.log(req.body);
})