FROM nginx:1.27-alpine

RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Paginas Principais, Estilos, Scripts e Curriculo PDF Oficial
COPY index.html /usr/share/nginx/html/index.html
COPY certificacoes.html /usr/share/nginx/html/certificacoes.html
COPY curriculo.html /usr/share/nginx/html/curriculo.html
COPY curriculo-en.html /usr/share/nginx/html/curriculo-en.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js
COPY Jonas-Carvalho-CV.pdf /usr/share/nginx/html/Jonas-Carvalho-CV.pdf
COPY Jonas-Carvalho-Resume-EN.pdf /usr/share/nginx/html/Jonas-Carvalho-Resume-EN.pdf

# Protocolos Raiz de SEO, GEO/LLMs, Sitemaps, RSS, PWA e IndexNow
COPY robots.txt /usr/share/nginx/html/robots.txt
COPY sitemap_index.xml /usr/share/nginx/html/sitemap_index.xml
COPY sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY llms.txt /usr/share/nginx/html/llms.txt
COPY llms-full.txt /usr/share/nginx/html/llms-full.txt
COPY manifest.webmanifest /usr/share/nginx/html/manifest.webmanifest
COPY opensearch.xml /usr/share/nginx/html/opensearch.xml
COPY browserconfig.xml /usr/share/nginx/html/browserconfig.xml
COPY feed.xml /usr/share/nginx/html/feed.xml
COPY 8f4e2a9c1d7b3e6f5a0c8d2e4b9a1f3c.txt /usr/share/nginx/html/8f4e2a9c1d7b3e6f5a0c8d2e4b9a1f3c.txt

# Imagens OG (WhatsApp/Social) & Suite Completa de Favicons e PWA Icons
COPY og-default.jpg /usr/share/nginx/html/og-default.jpg
COPY og-certificacoes.jpg /usr/share/nginx/html/og-certificacoes.jpg
COPY og-curriculo.jpg /usr/share/nginx/html/og-curriculo.jpg
COPY og-square.jpg /usr/share/nginx/html/og-square.jpg
COPY favicon.ico /usr/share/nginx/html/favicon.ico
COPY icon.svg /usr/share/nginx/html/icon.svg
COPY apple-touch-icon.png /usr/share/nginx/html/apple-touch-icon.png
COPY icon-192.png /usr/share/nginx/html/icon-192.png
COPY icon-512.png /usr/share/nginx/html/icon-512.png
COPY icon-maskable-512.png /usr/share/nginx/html/icon-maskable-512.png
COPY mstile-150x150.png /usr/share/nginx/html/mstile-150x150.png

# Diretorios de Assets, Public e Endpoints Estaticos de Metadados (/api/oembed.json, /api/og/index.json)
COPY assets/ /usr/share/nginx/html/assets/
COPY public/ /usr/share/nginx/html/public/
COPY api/ /usr/share/nginx/html/api/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:80/healthz || exit 1
