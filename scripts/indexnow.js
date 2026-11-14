/**
 * Script de Notificação Automática IndexNow (Bing, Yandex, Naver, Seznam, Yep)
 * Uso: node scripts/indexnow.js
 */
const https = require("https");

const HOST = "jonas.novashift.com.br";
const KEY = "8f4e2a9c1d7b3e6f5a0c8d2e4b9a1f3c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: [
    `https://${HOST}/`,
    `https://${HOST}/certificacoes.html`,
    `https://${HOST}/curriculo.html`,
    `https://${HOST}/Jonas-Carvalho-CV.pdf`,
    `https://${HOST}/llms.txt`,
    `https://${HOST}/llms-full.txt`,
  ],
});

const options = {
  hostname: "api.indexnow.org",
  port: 443,
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  console.log(`[IndexNow] Status HTTP: ${res.statusCode}`);
  res.on("data", (d) => process.stdout.write(d));
});

req.on("error", (err) => {
  console.error(`[IndexNow] Erro ao notificar:`, err.message);
});

req.write(payload);
req.end();
