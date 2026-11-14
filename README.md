# Portfólio & Currículo — Jonas Carvalho

Site estático containerizado (Nginx Alpine) com portfólio técnico, página dedicada de certificações e currículo A4 pronto para visualização online e download em PDF.

## Estrutura do Projeto

- `index.html`, `styles.css`, `script.js` — Portfólio principal (Stack, Atuação, Projetos & Legado, Chamada de Certificações, Percurso e Contato).
- `certificacoes.html` — Página dedicada de Certificações, Diplomas, Extensões Universitárias (PUCRS) e Prêmios, com filtros por categoria.
- `curriculo.html` e `Jonas-Carvalho-CV.pdf` — Currículo interativo em 2 páginas A4 e arquivo PDF para download direto.
- `assets/` — Foto, ilustrações arquiteturais, logos SVG oficiais e badge Cisco.
- `Dockerfile`, `nginx.conf`, `docker-compose.yml` — Empacotamento leve em `nginx:1.27-alpine` com compressão gzip, cache de assets e healthcheck em `/healthz`.

## Execução Local com Docker

```bash
docker build -t jonascarvalho-site .
docker run -d -p 8080:80 --name jonascarvalho-site jonascarvalho-site
```

Acesse `http://localhost:8080`.

## Deploy no Coolify (`jonas.novashift.com.br`)

1. Crie um novo recurso **Public Repository** (ou via sua integração GitHub) apontando para este repositório na branch `main`.
2. Funciona tanto com **Build Pack: `Dockerfile`** (porta `80`) quanto com **`Docker Compose`** (`docker-compose.yml` usa apenas `expose: ["80"]`, sem conflito de porta no host).
3. Em **Domains**, aponte `https://jonas.novashift.com.br` (ou `https://jonas.novashift.com.br:80` se configurar a porta no serviço `web`).
5. Em **Health Check** (opcional), utilize:
   - Path: `/healthz`
   - Port: `80`
6. Clique em **Deploy**.
