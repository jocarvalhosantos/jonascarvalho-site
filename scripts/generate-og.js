/**
 * Gerador Autônomo de OG Images, Favicons, Ícones PWA e Variantes WebP/AVIF
 * Projeto: Jonas Carvalho — Portfólio & Currículo Executivo (https://jonas.novashift.com.br)
 * Requisito WhatsApp/Social: 1200x630 JPEG < 280 KB | 400x400 JPEG < 150 KB
 */
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const ROOT = path.resolve(__dirname, "..");
const ASSETS_DIR = path.join(ROOT, "assets");
const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const photoBase64 = fs.readFileSync(path.join(ASSETS_DIR, "jonas-photo.jpg")).toString("base64");
const photoDataUri = `data:image/jpeg;base64,${photoBase64}`;

// 1. Gerar icon.svg com suporte a prefers-color-scheme: dark/light
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <style>
    .bg { fill: #07080a; }
    .ring { stroke: #3b82f6; stroke-opacity: 0.45; }
    .txt { fill: #f8fafc; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-weight: 900; }
    .dot { fill: #3b82f6; }
    @media (prefers-color-scheme: light) {
      .bg { fill: #0b0f19; }
      .ring { stroke: #2563eb; stroke-opacity: 0.6; }
    }
  </style>
  <rect class="bg" width="512" height="512" rx="112" />
  <rect class="ring" x="16" y="16" width="480" height="480" rx="98" fill="none" stroke-width="10" />
  <text class="txt" x="234" y="328" font-size="230" text-anchor="middle" letter-spacing="-12">JC</text>
  <circle class="dot" cx="404" cy="306" r="30" />
</svg>
`;
fs.writeFileSync(path.join(ROOT, "icon.svg"), iconSvg, "utf8");

// Empacotador binário ICO (16x16, 32x32, 48x48 PNG frames)
function buildIco(pngBuffersWithSizes) {
  const count = pngBuffersWithSizes.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: 1 = ICO
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  const dataBuffers = [];

  for (const { size, buf } of pngBuffersWithSizes) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    dataBuffers.push(buf);
    offset += buf.length;
  }

  return Buffer.concat([header, ...dirEntries, ...dataBuffers]);
}

function ogTemplate({ badge, titleMain, titleAccent, subtitle, pills, footerUrl }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background:
      radial-gradient(680px 420px at 85% 18%, rgba(59, 130, 246, 0.28), transparent 65%),
      radial-gradient(520px 380px at 12% 88%, rgba(37, 99, 235, 0.18), transparent 60%),
      #07080a;
    color: #f8fafc;
    font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 54px 72px;
    position: relative;
    overflow: hidden;
  }
  .frame {
    width: 100%;
    height: 100%;
    border-radius: 28px;
    border: 1.5px solid rgba(59, 130, 246, 0.38);
    background: linear-gradient(145deg, rgba(16, 21, 33, 0.92) 0%, rgba(9, 12, 18, 0.96) 100%);
    padding: 46px 54px;
    display: grid;
    grid-template-columns: 1.45fr 0.75fr;
    gap: 40px;
    align-items: center;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.65);
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 7px 16px;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.16);
    border: 1px solid rgba(59, 130, 246, 0.45);
    color: #dbeafe;
    font-family: 'Geist Mono', monospace;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #60a5fa;
  }
  h1 {
    font-family: 'Archivo', sans-serif;
    font-size: 50px;
    font-weight: 900;
    line-height: 1.06;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin-bottom: 16px;
  }
  h1 span {
    color: #3b82f6;
  }
  p.sub {
    font-size: 21px;
    line-height: 1.45;
    color: #cbd5e1;
    margin-bottom: 24px;
    max-width: 54ch;
  }
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
  }
  .pill {
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.14);
    border: 1px solid rgba(59, 130, 246, 0.42);
    font-family: 'Geist Mono', monospace;
    font-size: 14px;
    font-weight: 600;
    color: #dbeafe;
  }
  .domain {
    font-family: 'Geist Mono', monospace;
    font-size: 16px;
    color: #60a5fa;
    letter-spacing: 0.04em;
  }
  .card-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 24px;
    text-align: center;
  }
  .avatar {
    width: 220px;
    height: 220px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center top;
    border: 2px solid #3b82f6;
    margin-bottom: 16px;
  }
  .name {
    font-family: 'Archivo', sans-serif;
    font-size: 26px;
    font-weight: 900;
    color: #ffffff;
  }
  .role {
    font-size: 15px;
    color: #94a3b8;
    margin-top: 4px;
  }
</style>
</head>
<body>
  <div class="frame">
    <div>
      <div class="badge"><span class="dot"></span>${badge}</div>
      <h1>${titleMain} <span>${titleAccent}</span></h1>
      <p class="sub">${subtitle}</p>
      <div class="pills">
        ${pills.map((p) => `<span class="pill">${p}</span>`).join("")}
      </div>
      <div class="domain">${footerUrl}</div>
    </div>
    <div class="card-right">
      <img class="avatar" src="${photoDataUri}" alt="Jonas Carvalho" />
      <div class="name">Jonas Carvalho</div>
      <div class="role">Líder Técnico · SP, Brasil</div>
    </div>
  </div>
</body>
</html>`;
}

function ogSquareTemplate() {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle at 50% 25%, rgba(59, 130, 246, 0.28), #07080a 72%);
    color: #ffffff;
    font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 26px;
    text-align: center;
    border: 3px solid rgba(59, 130, 246, 0.45);
  }
  .avatar {
    width: 168px;
    height: 168px;
    border-radius: 26px;
    object-fit: cover;
    object-position: center top;
    border: 2.5px solid #3b82f6;
    margin-bottom: 16px;
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.55);
  }
  h1 {
    font-size: 28px;
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }
  h1 span { color: #3b82f6; }
  p {
    font-family: 'Geist Mono', monospace;
    font-size: 12.5px;
    color: #93c5fd;
    margin-top: 8px;
  }
  .tag {
    margin-top: 12px;
    padding: 5px 12px;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.16);
    border: 1px solid rgba(59, 130, 246, 0.45);
    font-family: 'Geist Mono', monospace;
    font-size: 11px;
    color: #dbeafe;
  }
</style>
</head>
<body>
  <img class="avatar" src="${photoDataUri}" alt="Jonas Carvalho" />
  <h1>JONAS <span>CARVALHO</span></h1>
  <p>Líder Técnico · Cloud, RPA &amp; IA</p>
  <span class="tag">jonas.novashift.com.br</span>
</body>
</html>`;
}

function iconHtmlTemplate(size, maskable = false) {
  const pad = maskable ? Math.round(size * 0.14) : 0;
  const rx = maskable ? 0 : Math.round(size * 0.22);
  return `<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: ${size}px;
    height: ${size}px;
    background: ${maskable ? "#07080a" : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${pad}px;
  }
  .box {
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 75% 20%, rgba(59, 130, 246, 0.28), #07080a 70%);
    border-radius: ${rx}px;
    border: ${Math.max(1, Math.round(size * 0.02))}px solid rgba(59, 130, 246, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size: ${Math.round((size - pad * 2) * 0.46)}px;
    letter-spacing: -0.05em;
    color: #ffffff;
  }
  .box span { color: #3b82f6; }
</style>
</head>
<body>
  <div class="box">JC<span>.</span></div>
</body>
</html>`;
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  // 1. Gerar OG Images 1200x630 (< 280 KB)
  const ogConfigs = [
    {
      file: "og-default.jpg",
      badge: "LÍDER TÉCNICO · SÃO PAULO, BRASIL",
      titleMain: "Arquitetura de Software,",
      titleAccent: "RPA, Cloud & IA.",
      subtitle: "Mais de 8 anos liderando squads multidisciplinares, Torre de RPA, DevSecOps (Jenkins/GitLab), Assessments M&A e modernização de sistemas críticos.",
      pills: ["AWS · OCI · GCP", "Python · UiPath · C#", "Jenkins · GitLab CI", "Node/NestJS · PHP · Java", "IA & RAG"],
      footerUrl: "jonas.novashift.com.br",
    },
    {
      file: "og-certificacoes.jpg",
      badge: "CREDENCIAIS VERIFICADAS · EDUCAÇÃO CONTÍNUA",
      titleMain: "14 Certificações, Diplomas",
      titleAccent: "& Extensões PUCRS.",
      subtitle: "Especializações oficiais em IA Agêntica (Microsoft Foundry & IBM Bob), 5 Badges Google Cloud, Cisco IoT, 4 Extensões PUCRS e Diplomas FATEC/ETEC.",
      pills: ["Microsoft Foundry AI", "IBM Bob AI", "Google Cloud (5×)", "PUCRS (40h)", "Cisco IoT", "FATEC ADS"],
      footerUrl: "jonas.novashift.com.br/certificacoes.html",
    },
    {
      file: "og-curriculo.jpg",
      badge: "CURRÍCULO EXECUTIVO · 2 PÁGINAS A4",
      titleMain: "Currículo Técnico &",
      titleAccent: "Arquiteturas Entregues.",
      subtitle: "Trajetória completa em Liderança Técnica, Torre RPA, DevOps/DevSecOps, Multi-Cloud, sistemas legados e plataformas corporativas de IA.",
      pills: ["Download PDF Oficial", "8+ Anos de Experiência", "14 Certificações", "4 Prêmios & Hackathons"],
      footerUrl: "jonas.novashift.com.br/curriculo.html",
    },
  ];

  const PUBLIC_DIR = path.join(ROOT, "public");
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.copyFileSync(path.join(ROOT, "icon.svg"), path.join(PUBLIC_DIR, "icon.svg"));

  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  for (const cfg of ogConfigs) {
    await page.setContent(ogTemplate(cfg), { waitUntil: "domcontentloaded" });
    const outPath = path.join(ROOT, cfg.file);
    await page.screenshot({ path: outPath, type: "jpeg", quality: 82 });
    fs.copyFileSync(outPath, path.join(PUBLIC_DIR, cfg.file));
    const sizeKB = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`Generated ${cfg.file} (& public/${cfg.file}): ${sizeKB} KB`);
  }

  // 2. Gerar og-square.jpg 400x400 (< 150 KB)
  await page.setViewport({ width: 400, height: 400, deviceScaleFactor: 1 });
  await page.setContent(ogSquareTemplate(), { waitUntil: "domcontentloaded" });
  const sqPath = path.join(ROOT, "og-square.jpg");
  await page.screenshot({ path: sqPath, type: "jpeg", quality: 84 });
  fs.copyFileSync(sqPath, path.join(PUBLIC_DIR, "og-square.jpg"));
  console.log(`Generated og-square.jpg (& public/og-square.jpg): ${(fs.statSync(sqPath).size / 1024).toFixed(1)} KB`);

  // 3. Gerar ícones PNG e favicon.ico
  const iconSpecs = [
    { name: "apple-touch-icon.png", size: 180, maskable: false },
    { name: "icon-192.png", size: 192, maskable: false },
    { name: "icon-512.png", size: 512, maskable: false },
    { name: "icon-maskable-512.png", size: 512, maskable: true },
    { name: "mstile-150x150.png", size: 150, maskable: false },
  ];

  for (const spec of iconSpecs) {
    await page.setViewport({ width: spec.size, height: spec.size, deviceScaleFactor: 1 });
    await page.setContent(iconHtmlTemplate(spec.size, spec.maskable), { waitUntil: "domcontentloaded" });
    const p = path.join(ROOT, spec.name);
    await page.screenshot({ path: p, type: "png", omitBackground: !spec.maskable });
    fs.copyFileSync(p, path.join(PUBLIC_DIR, spec.name));
    console.log(`Generated ${spec.name}: ${(fs.statSync(p).size / 1024).toFixed(1)} KB`);
  }

  const icoFrames = [];
  for (const sz of [16, 32, 48]) {
    await page.setViewport({ width: sz, height: sz, deviceScaleFactor: 1 });
    await page.setContent(iconHtmlTemplate(sz, false), { waitUntil: "domcontentloaded" });
    const buf = await page.screenshot({ type: "png", omitBackground: true });
    icoFrames.push({ size: sz, buf });
  }
  const icoBuf = buildIco(icoFrames);
  fs.writeFileSync(path.join(ROOT, "favicon.ico"), icoBuf);
  fs.writeFileSync(path.join(PUBLIC_DIR, "favicon.ico"), icoBuf);
  console.log(`Generated favicon.ico: ${(icoBuf.length / 1024).toFixed(1)} KB`);

  // 4. Converter imagens de assets/*.jpg para .webp e .avif para suporte real em <picture>
  const jpgAssets = ["jonas-photo.jpg", "case-rpa.jpg", "case-cloud.jpg", "case-legacy.jpg", "case-ai.jpg"];
  for (const file of jpgAssets) {
    const full = path.join(ASSETS_DIR, file);
    const b64 = fs.readFileSync(full).toString("base64");
    const baseName = file.replace(/\.jpg$/, "");
    await page.setContent(`<img id="im" src="data:image/jpeg;base64,${b64}">`, { waitUntil: "load" });
    const converted = await page.evaluate(async () => {
      const img = document.getElementById("im");
      const c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      c.getContext("2d").drawImage(img, 0, 0);
      const webp = c.toDataURL("image/webp", 0.82);
      const avif = c.toDataURL("image/avif", 0.78);
      return {
        webp: webp.startsWith("data:image/webp") ? webp.split(",")[1] : null,
        avif: avif.startsWith("data:image/avif") ? avif.split(",")[1] : null,
      };
    });
    if (converted.webp) {
      fs.writeFileSync(path.join(ASSETS_DIR, `${baseName}.webp`), Buffer.from(converted.webp, "base64"));
      console.log(`Generated assets/${baseName}.webp`);
    }
    if (converted.avif) {
      fs.writeFileSync(path.join(ASSETS_DIR, `${baseName}.avif`), Buffer.from(converted.avif, "base64"));
      console.log(`Generated assets/${baseName}.avif`);
    }
  }

  await browser.close();
})();
