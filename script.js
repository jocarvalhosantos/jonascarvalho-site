const CASE_BLUEPRINTS = {
  "identidade-sso": {
    kicker: "Telecom · Identidade Digital & SSO",
    title: "Plataforma Corporativa de Identidade Digital",
    client: "Operação Telecom (Claro / Embratel)",
    diagram: [
      { step: "01", title: "Portais & Apps", sub: "React · TypeScript" },
      { step: "02", title: "Camada BFF", sub: "OAuth 2.0 · Sessão" },
      { step: "03", title: "Microsserviços", sub: "NestJS · Node.js" },
      { step: "04", title: "Cache & Filas", sub: "Redis · AWS SQS/SNS" },
      { step: "05", title: "Persistência Cloud", sub: "DynamoDB · AWS ECS" }
    ],
    context:
      "Ecossistema distribuído e de missão crítica voltado à jornada nacional de autenticação, cadastro, gerenciamento de credenciais e área do cliente.",
    architecture: [
      "Liderança técnica sobre arquitetura multi-repositório combinando frontends em React/TypeScript, BFF e microsserviços independentes em Node.js e NestJS.",
      "Camada de dados e eventos escaláveis na AWS integrando computação em containers/serverless, filas assíncronas e armazenamento NoSQL e em cache.",
      "Padronização de qualidade contínua com suítes automatizadas de testes unitários, integração e ponta a ponta."
    ],
    impact: [
      "Evolução segura de plataforma legada garantindo conformidade contínua com auditorias corporativas de AppSec.",
      "Alta disponibilidade operacional para fluxos críticos de autenticação corporativa e experiência do cliente."
    ],
    stack: ["React", "TypeScript", "NestJS", "Node.js", "AWS ECS / Lambda", "Mensageria & Cache", "OAuth 2.0", "CI/CD"],
    en: {
      kicker: "Telecom · Digital Identity & Federated SSO",
      title: "Enterprise Digital Identity & SSO Platform",
      client: "Telecom Operations (Claro / Embratel)",
      diagram: [
        { step: "01", title: "Web & Portals", sub: "React · TypeScript" },
        { step: "02", title: "BFF Gateway", sub: "OAuth 2.0 · Session" },
        { step: "03", title: "Microservices", sub: "NestJS · Node.js" },
        { step: "04", title: "Cache & Events", sub: "Redis · AWS SQS/SNS" },
        { step: "05", title: "Cloud Storage", sub: "DynamoDB · AWS ECS" }
      ],
      context:
        "Mission-critical distributed ecosystem powering nationwide customer authentication, registration, credential lifecycle, and self-service portals.",
      architecture: [
        "Technical leadership across a multi-repository architecture combining React/TypeScript frontends, BFFs, and independent Node.js/NestJS microservices.",
        "Scalable AWS data and event layer integrating containerized/serverless compute, async queues, NoSQL stores, and distributed Redis caching.",
        "Continuous quality standardization with automated unit, integration, and end-to-end test suites."
      ],
      impact: [
        "Secure evolution of legacy authentication components ensuring full compliance with enterprise AppSec audits.",
        "High operational availability for mission-critical enterprise login and customer identity flows."
      ]
    }
  },
  "rpa-oci": {
    kicker: "Indústria · RPA Distribuído & Observabilidade",
    title: "Orquestração RPA em Cloud com Jenkins & Grafana",
    client: "Operação Corporativa Multi-Ambiente",
    diagram: [
      { step: "01", title: "Chamado ITSM", sub: "Webhook / Evento" },
      { step: "02", title: "Auth & Gateway", sub: "Keycloak OIDC · FastAPI" },
      { step: "03", title: "Orquestrador", sub: "Jenkins Controller" },
      { step: "04", title: "Execução Isolada", sub: "Workers Docker · OCI" },
      { step: "05", title: "Observabilidade", sub: "Grafana · Loki · Prom" }
    ],
    context:
      "Integração automatizada ponta a ponta entre plataforma corporativa de chamados (ITSM) e execução em nuvem distribuída, desenhada para rastreabilidade completa.",
    architecture: [
      "Camada de autenticação federada via OAuth 2.0 / OIDC protegendo API backend em FastAPI e banco relacional PostgreSQL.",
      "Orquestração por controlador Jenkins com pool de agentes em containers Docker executando automações web headless.",
      "Empacotamento modular sob proxy reverso Nginx permitindo operação unificada dos serviços em múltiplos ambientes na Oracle Cloud (OCI)."
    ],
    impact: [
      "Observabilidade nativa integrada com dashboards operacionais em Grafana, métricas Prometheus e logs centralizados no Loki.",
      "Rastreabilidade fim a fim das execuções sem exposição de dados sensíveis."
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Keycloak (OIDC)", "Jenkins + Workers", "Docker", "Nginx", "OCI", "Grafana / Prometheus / Loki"],
    en: {
      kicker: "Manufacturing · Distributed RPA & Observability",
      title: "Cloud RPA Orchestration with Jenkins & Grafana",
      client: "Multi-Environment Enterprise Operations",
      diagram: [
        { step: "01", title: "ITSM Ticket", sub: "Webhook / Trigger" },
        { step: "02", title: "Auth & Gateway", sub: "Keycloak OIDC · FastAPI" },
        { step: "03", title: "Orchestrator", sub: "Jenkins Controller" },
        { step: "04", title: "Isolated Runtime", sub: "Docker Workers · OCI" },
        { step: "05", title: "Observability", sub: "Grafana · Loki · Prom" }
      ],
      context:
        "End-to-end automated integration between enterprise ITSM ticketing and distributed cloud bot execution, engineered for full auditability.",
      architecture: [
        "Federated OAuth 2.0 / OIDC authentication layer protecting a FastAPI backend and PostgreSQL relational store.",
        "Orchestrated via a Jenkins controller with a pool of Docker container worker agents running headless web automations.",
        "Modular packaging behind an Nginx reverse proxy enabling unified multi-environment operations on Oracle Cloud (OCI)."
      ],
      impact: [
        "Native observability with real-time Grafana operational dashboards, Prometheus metrics, and centralized Loki logs.",
        "End-to-end execution traceability with zero exposure of sensitive credentials."
      ]
    }
  },
  "legado-containers": {
    kicker: "Modernização de Legado & Containers · Telecom",
    title: "Desacoplamento de Parque RPA Legado & Sistemas PHP",
    client: "Operação Telecom · Engenharia de Sustentação",
    diagram: [
      { step: "01", title: "Monólito Legado", sub: "Java / PHP (Yii2/Laravel)" },
      { step: "02", title: "Desacoplamento", sub: "Filas por Domínio" },
      { step: "03", title: "Containers", sub: "Docker Compose Isolado" },
      { step: "04", title: "Esteira CI/CD", sub: "GitLab CI · SonarQube" },
      { step: "05", title: "Bancos Críticos", sub: "SQL Server · MySQL" }
    ],
    context:
      "Evolução de aplicações RPA monolíticas herdadas em Java e sustentação de sistemas operacionais corporativos em PHP.",
    architecture: [
      "Separação de aplicação monolítica acoplada em serviços conteinerizados independentes via Docker Compose.",
      "Segregação de filas de processamento e dispatchers dedicados para evitar que falhas pontuais afetassem todo o parque.",
      "Versionamento estruturado e fluxos padronizados de entrega contínua com GitLab CI."
    ],
    impact: [
      "Isolamento individual de logs, recursos de memória e ciclos de deploy por automação.",
      "Maior previsibilidade operacional e aceleração na manutenção de sistemas legados em PHP e Java."
    ],
    stack: ["Java", "PHP (Laravel / Yii2)", "Docker Compose", "GitLab CI", "Filas de Despacho", "Linux"],
    en: {
      kicker: "Legacy Modernization & Containers · Telecom",
      title: "Decoupling Legacy Java RPA Fleet & PHP Systems",
      client: "Telecom Operations · Sustaining Engineering",
      diagram: [
        { step: "01", title: "Legacy Monolith", sub: "Java / PHP (Yii2/Laravel)" },
        { step: "02", title: "Decoupling", sub: "Domain Dispatch Queues" },
        { step: "03", title: "Containers", sub: "Isolated Docker Compose" },
        { step: "04", title: "CI/CD Pipeline", sub: "GitLab CI · SonarQube" },
        { step: "05", title: "Core Databases", sub: "SQL Server · MySQL" }
      ],
      context:
        "Modernizing inherited monolithic Java RPA applications and sustaining mission-critical enterprise PHP operational portals.",
      architecture: [
        "Split tightly coupled monolithic applications into independent containerized services via Docker Compose.",
        "Segregated processing queues and dedicated dispatchers so single-bot failures never cascade across the fleet.",
        "Structured Git versioning and standardized continuous delivery workflows with GitLab CI."
      ],
      impact: [
        "Per-automation isolation of logs, memory limits, and independent deployment lifecycles.",
        "Higher operational predictability and faster turnaround on PHP and Java legacy maintenance."
      ]
    }
  },
  "assessment-ma": {
    kicker: "Estratégia & Arquitetura · Carve-out M&A",
    title: "Assessment Técnico de Cisão Corporativa",
    client: "Operação de Infraestrutura & Mobilidade",
    diagram: [
      { step: "01", title: "Inventário E2E", sub: "LeanIX · Apps & RPAs" },
      { step: "02", title: "Mapeamento ERP", sub: "SAP · Azure Service Bus" },
      { step: "03", title: "Redes & OT", sub: "Sistemas de Missão Crítica" },
      { step: "04", title: "Segurança IAM", sub: "Matriz de Risco NIST" },
      { step: "05", title: "Plano Diretor", sub: "Ondas de Transição" }
    ],
    context:
      "Diagnóstico arquitetural amplo para viabilizar separação tecnológica segura de unidades de negócio, sistemas de gestão e operações.",
    architecture: [
      "Levantamento estruturado de centenas de aplicações corporativas, parque de automações RPA, produtos de dados e matriz completa de integrações.",
      "Mapeamento de dependências entre ERPs corporativos (SAP), mensageria em nuvem (Azure), suites de produtividade e ambientes operacionais.",
      "Definição de arquitetura alvo de identidades (IAM) e diretrizes de cibersegurança aderentes a padrões de mercado (NIST)."
    ],
    impact: [
      "Blueprints de transição e roadmap em ondas reduzindo riscos operacionais durante a separação societária.",
      "Visibilidade executiva clara sobre criticidade, custos e dependências técnicas."
    ],
    stack: ["LeanIX", "SAP ERP", "Azure Service Bus", "Microsoft 365", "Governança IAM / NIST", "Arquitetura de Transição"],
    en: {
      kicker: "Strategy & Architecture · M&A Carve-Out",
      title: "Corporate Spin-Off Technical Due Diligence",
      client: "Infrastructure & Mobility Operations",
      diagram: [
        { step: "01", title: "E2E Inventory", sub: "LeanIX · Apps & RPAs" },
        { step: "02", title: "ERP Mapping", sub: "SAP · Azure Service Bus" },
        { step: "03", title: "IT/OT Networks", sub: "Mission-Critical Systems" },
        { step: "04", title: "IAM Security", sub: "NIST Risk Matrix" },
        { step: "05", title: "Master Plan", sub: "Transition Wave Blueprints" }
      ],
      context:
        "Comprehensive architectural due diligence enabling the safe technological separation of business units, ERPs, and industrial operations.",
      architecture: [
        "Structured inventory of hundreds of enterprise applications, RPA bots, data products, and full integration matrices.",
        "Dependency mapping across SAP ERPs, Azure cloud messaging, productivity suites, and operational environments.",
        "Target Identity & Access Management (IAM) architecture and cybersecurity guidelines aligned with NIST standards."
      ],
      impact: [
        "Multi-wave transition blueprints minimizing operational risk during corporate carve-out execution.",
        "Clear executive visibility into system criticality, licensing costs, and technical dependencies."
      ]
    }
  },
  "ia-corporativa": {
    kicker: "IA Generativa & AIOps · Plataforma Interna",
    title: "Portal Corporativo de IA, Gateway Multi-LLM & Triagem",
    client: "Global Hitss · Produto Corporativo",
    diagram: [
      { step: "01", title: "Portal & SSO", sub: "Laravel · Auth Federada" },
      { step: "02", title: "Gateway IA", sub: "Roteador Multi-LLM" },
      { step: "03", title: "Motor RAG", sub: "Bases de Conhecimento" },
      { step: "04", title: "AIOps & Logs", sub: "OpenTelemetry · Triagem" },
      { step: "05", title: "Governança", sub: "Quotas · Auditoria MySQL" }
    ],
    context:
      "Construção de ecossistema interno para democratizar o uso seguro de IA generativa na engenharia e acelerar resposta a incidentes.",
    architecture: [
      "Portal corporativo desenvolvido em PHP Laravel, MySQL e Docker com login federado (SSO) e distribuição web/desktop.",
      "Camada de gateway multi-modelo integrando diferentes provedores LLM com governança de quotas, auditoria de consumo e exposição por APIs.",
      "Pipelines RAG sobre documentação técnica e bases de código, somados a arquitetura orientada a telemetria (OpenTelemetry) para apoio a incidentes."
    ],
    impact: [
      "Uso corporativo controlado de modelos generativos com governança centralizada de custos e acessos.",
      "Redução no tempo de diagnóstico técnico ao correlacionar logs, métricas e histórico de incidentes."
    ],
    stack: ["PHP Laravel", "MySQL", "Docker", "Nginx", "RAG", "Multi-LLM Gateway", "OpenTelemetry", "APIs"],
    en: {
      kicker: "Generative AI & AIOps · Internal Platform",
      title: "Enterprise AI Portal, Multi-LLM Gateway & Incident Triage",
      client: "Global Hitss · Enterprise Product",
      diagram: [
        { step: "01", title: "Portal & SSO", sub: "Laravel · Federated Auth" },
        { step: "02", title: "AI Gateway", sub: "Multi-LLM Router" },
        { step: "03", title: "RAG Engine", sub: "Vector Knowledge Base" },
        { step: "04", title: "AIOps & Logs", sub: "OpenTelemetry · Triage" },
        { step: "05", title: "Governance", sub: "Quotas · MySQL Audit" }
      ],
      context:
        "Internal enterprise ecosystem built to democratize safe Generative AI adoption across engineering teams and accelerate incident triage.",
      architecture: [
        "Enterprise portal built with PHP Laravel, MySQL, and Docker featuring federated SSO and web/desktop distribution.",
        "Multi-model gateway layer integrating multiple LLM providers with token quota governance, usage auditing, and REST APIs.",
        "RAG pipelines over technical docs and repositories, paired with OpenTelemetry log correlation for automated incident triage."
      ],
      impact: [
        "Controlled enterprise adoption of generative models with centralized cost and RBAC governance.",
        "Faster root-cause diagnosis by correlating logs, metrics, and historical incident runbooks."
      ]
    }
  },
  "macro-manager": {
    kicker: "RPA Híbrido Desktop/Web & Segurança",
    title: "Framework RPA Macro Manager & Gestão de Credenciais",
    client: "Operações BPO & Concessionárias",
    diagram: [
      { step: "01", title: "Gatilho / Fila", sub: "Agendador · API REST" },
      { step: "02", title: "Cofre Seguro", sub: "Secrets Criptografados" },
      { step: "03", title: "Core Híbrido", sub: "Macro Manager (C#/.NET)" },
      { step: "04", title: "Serviços Web", sub: "Python · FastAPI · Selenium" },
      { step: "05", title: "Sistemas Alvo", sub: "ERPs Desktop UIA & Web" }
    ],
    context:
      "Padronização de automações envolvendo interfaces desktop e web legadas com foco em reaproveitamento e segurança corporativa.",
    architecture: [
      "Arquitetura híbrida unindo execução isolada em C# (.NET) com serviços FastAPI em Python, Selenium e automação UIA/desktop.",
      "Adequação estrutural para operação homologada em estações corporativas com políticas restritas de execução.",
      "Padronização e migração segura do fluxo de credenciais criptografadas entre dezenas de automações existentes."
    ],
    impact: [
      "Alto reaproveitamento arquitetural de componentes entre diferentes operações e clientes BPO.",
      "Eliminação de credenciais expostas e padronização do ciclo de manutenção."
    ],
    stack: ["Macro Manager", "C#", "Python", "FastAPI", "Selenium", "UIA Desktop", "Gestão Segura de Secrets"],
    en: {
      kicker: "Hybrid Desktop/Web RPA & Security",
      title: "Macro Manager RPA Framework & Credential Vaulting",
      client: "BPO & Utility Operations",
      diagram: [
        { step: "01", title: "Trigger / Queue", sub: "Scheduler · REST API" },
        { step: "02", title: "Secure Vault", sub: "Encrypted Secrets" },
        { step: "03", title: "Hybrid Core", sub: "Macro Manager (C#/.NET)" },
        { step: "04", title: "Web Services", sub: "Python · FastAPI · Selenium" },
        { step: "05", title: "Target Systems", sub: "UIA Desktop & Web ERPs" }
      ],
      context:
        "Standardizing automations across legacy desktop and web interfaces with a focus on cross-client component reuse and enterprise security.",
      architecture: [
        "Hybrid architecture combining isolated C# (.NET) execution with Python FastAPI services, Selenium, and UIA desktop automation.",
        "Hardened runtime compliance for corporate workstations operating under strict group policy restrictions.",
        "Standardized and migrated encrypted credential retrieval across dozens of production bots."
      ],
      impact: [
        "High architectural reuse of core modules across multiple BPO operations and enterprise clients.",
        "Eliminated plaintext credentials and standardized the bot maintenance lifecycle."
      ]
    }
  },
  "workers-docling": {
    kicker: "Workers Assíncronos & IA Documental",
    title: "Orquestração por Filas RabbitMQ & RPA Financeiro com IA",
    client: "Backoffice Corporativo & Financeiro",
    diagram: [
      { step: "01", title: "Documentos / NF", sub: "PDFs · Fluxo Financeiro" },
      { step: "02", title: "Broker de Filas", sub: "RabbitMQ Assíncrono" },
      { step: "03", title: "Workers Python", sub: "Docling IA + Fallback" },
      { step: "04", title: "Integração ERP", sub: "SAP · Oracle · Power Auto" },
      { step: "05", title: "Painel Controle", sub: "React · Conciliação" }
    ],
    context:
      "Escala de automações de alto volume por mensageria, conciliação fiscal integrada a ERP e avaliação de transição entre plataformas RPA.",
    architecture: [
      "Arquitetura em monorepo containerizado com API REST, workers especializados em Python consumindo filas RabbitMQ e painel de acompanhamento em React.",
      "Fluxo de reconciliação financeira integrado a SAP e Power Automate combinado a extração estruturada de PDFs com IA documental (Docling) e fallback determinístico.",
      "Estudos técnicos e HLEs para migração estratégica entre ferramentas proprietárias (Automation 360, IBM RPA, UiPath) e orquestração em Python."
    ],
    impact: [
      "Processamento paralelo resiliente com tratamento rastreável de exceções de negócio.",
      "Otimização expressiva de TCO em licenciamento mantendo observabilidade unificada."
    ],
    stack: ["Python", "RabbitMQ", "Oracle", "React", "Power Automate", "SAP ERP", "Docling IA", "UiPath", "Automation 360"],
    en: {
      kicker: "Async Workers & Document AI",
      title: "RabbitMQ Queue Orchestration & Financial Document AI",
      client: "Enterprise Backoffice & Finance",
      diagram: [
        { step: "01", title: "Invoices / PDFs", sub: "Financial Intake" },
        { step: "02", title: "Message Broker", sub: "Async RabbitMQ" },
        { step: "03", title: "Python Workers", sub: "Docling AI + Fallback" },
        { step: "04", title: "ERP Integration", sub: "SAP · Oracle · Power Auto" },
        { step: "05", title: "Control Panel", sub: "React · Reconciliation" }
      ],
      context:
        "Scaling high-volume automations via message queues, ERP tax/financial reconciliation, and strategic migration across RPA suites.",
      architecture: [
        "Containerized monorepo architecture with a REST API, specialized Python workers consuming RabbitMQ queues, and a React monitoring dashboard.",
        "Financial reconciliation workflow integrated with SAP and Power Automate paired with structured AI PDF extraction (Docling) and deterministic fallback.",
        "Technical HLE studies for strategic migration across proprietary suites (Automation 360, IBM RPA, UiPath) and Python orchestration."
      ],
      impact: [
        "Resilient parallel processing with traceable business exception handling.",
        "Significant licensing TCO optimization while maintaining unified observability."
      ]
    }
  },
  "devsecops-openshift": {
    kicker: "Cloud Native, CI/CD & Segurança",
    title: "Esteiras DevSecOps & Arquitetura Red Hat OpenShift",
    client: "Setor de Energia & Plataformas Cloud",
    diagram: [
      { step: "01", title: "Repositório Git", sub: "GitLab · Merge Request" },
      { step: "02", title: "Gates AppSec", sub: "SAST · DAST · SonarQube" },
      { step: "03", title: "Build Imutável", sub: "Jenkins / GitLab Runners" },
      { step: "04", title: "Entrega GitOps", sub: " Versionamento Declarativo" },
      { step: "05", title: "Cluster Cloud", sub: "Red Hat OpenShift · K8s" }
    ],
    context:
      "Padronização de entrega contínua segura e desenho de referência para cargas modernas em containers.",
    architecture: [
      "Modelagem de pipelines em Jenkins e GitLab CI incorporando validações automatizadas de qualidade e segurança (SAST, DAST e varredura de dependências).",
      "Referência arquitetural em Red Hat OpenShift combinando malha de serviços, workloads serverless (Knative) e fluxos GitOps."
    ],
    impact: [
      "Detecção antecipada de vulnerabilidades ao longo do ciclo de desenvolvimento.",
      "Maior velocidade de deploy com rastreabilidade completa de artefatos."
    ],
    stack: ["Jenkins", "GitLab CI", "Red Hat OpenShift", "Kubernetes", "GitOps", "SAST / DAST"],
    en: {
      kicker: "Cloud Native, CI/CD & Security",
      title: "DevSecOps Pipelines & Red Hat OpenShift Architecture",
      client: "Energy Sector & Cloud Platforms",
      diagram: [
        { step: "01", title: "Git Repository", sub: "GitLab · Merge Request" },
        { step: "02", title: "AppSec Gates", sub: "SAST · DAST · SonarQube" },
        { step: "03", title: "Immutable Build", sub: "Jenkins / GitLab Runners" },
        { step: "04", title: "GitOps Delivery", sub: "Declarative Sync" },
        { step: "05", title: "Cloud Cluster", sub: "Red Hat OpenShift · K8s" }
      ],
      context:
        "Standardizing secure continuous delivery pipelines and cloud-native reference architectures for containerized workloads.",
      architecture: [
        "Engineered Jenkins and GitLab CI pipelines incorporating automated quality and security gates (SAST, DAST, and dependency scanning).",
        "Reference architecture on Red Hat OpenShift combining service mesh, serverless workloads (Knative), and GitOps delivery."
      ],
      impact: [
        "Shift-left vulnerability detection early in the software development lifecycle.",
        "Faster deployment velocity with full artifact traceability."
      ]
    }
  },
  "produtos-mobile": {
    kicker: "Produtos Corporativos & Integração ERP",
    title: "Gestão Financeira com IA & App Multiplataforma ERP",
    client: "Global Hitss & Indústria",
    diagram: [
      { step: "01", title: "App & Portais", sub: "Flutter (iOS/Android/Web)" },
      { step: "02", title: "Identidade SSO", sub: "Keycloak OAuth2 / OIDC" },
      { step: "03", title: "Backend & IA", sub: "Laravel · IA Documental" },
      { step: "04", title: "API Plugável", sub: "Camada de Desacoplamento" },
      { step: "05", title: "Core Corporativo", sub: "ERPs · PostgreSQL / MySQL" }
    ],
    context:
      "Desenvolvimento de plataformas web para governança financeira e aplicativo único multiplataforma conectado a ERPs corporativos.",
    architecture: [
      "Portais web para controle de demandas técnicas e conciliação financeira corporativa com leitura assistida de documentos por IA e trilha de auditoria.",
      "Aplicação única em Flutter (Android, iOS e Web) integrada via camada plugável de APIs a ERPs de mercado protegida por Keycloak."
    ],
    impact: [
      "Unificação de experiência mobile e web com menor custo de manutenção de código.",
      "Integração segura preservando a estabilidade de sistemas ERP consolidados."
    ],
    stack: ["PHP Laravel", "Flutter", "IA Documental", "Keycloak", "APIs REST", "PostgreSQL / MySQL"],
    en: {
      kicker: "Enterprise Products & ERP Integration",
      title: "AI Financial Governance & Cross-Platform ERP App",
      client: "Global Hitss & Manufacturing",
      diagram: [
        { step: "01", title: "App & Portals", sub: "Flutter (iOS/Android/Web)" },
        { step: "02", title: "SSO Identity", sub: "Keycloak OAuth2 / OIDC" },
        { step: "03", title: "Backend & AI", sub: "Laravel · Document AI" },
        { step: "04", title: "Pluggable API", sub: "Decoupling Adapter Layer" },
        { step: "05", title: "Enterprise Core", sub: "ERPs · PostgreSQL / MySQL" }
      ],
      context:
        "Building web platforms for financial governance alongside a single-codebase cross-platform mobile/web app connected to enterprise ERPs.",
      architecture: [
        "Web portals for technical demand tracking and corporate financial reconciliation featuring AI-assisted document parsing and audit trails.",
        "Single Flutter codebase (Android, iOS, and Web) integrated via a pluggable API adapter layer to enterprise ERPs protected by Keycloak."
      ],
      impact: [
        "Unified mobile and web experience with significantly lower code maintenance overhead.",
        "Secure external access preserving the stability of core legacy ERP systems."
      ]
    }
  }
};

let currentLang = localStorage.getItem("jc_lang") || "pt";

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Tech Logo Wall Category Filter
  const tabBtns = document.querySelectorAll(".tab-btn");
  const logoTiles = document.querySelectorAll(".logo-tile");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.tab;
      tabBtns.forEach((b) => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", String(b === btn));
      });
      logoTiles.forEach((tile) => {
        const cats = (tile.dataset.cats || "").split(/\s+/);
        tile.hidden = cat !== "all" && !cats.includes(cat);
      });
    });
  });

  // Case Category Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const caseCards = document.querySelectorAll(".case-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
      caseCards.forEach((card) => {
        const cats = (card.dataset.cats || "").split(/\s+/);
        card.hidden = cat !== "all" && !cats.includes(cat);
      });
    });
  });

  // Compact GEO Tabs (Matriz / FAQ / Pilares)
  const geoTabBtns = document.querySelectorAll(".geo-tab-btn");
  const geoPanels = document.querySelectorAll(".geo-tab-panel");
  geoTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.geotab;
      geoTabBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", String(active));
      });
      geoPanels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.geopanel === target);
      });
    });
  });

  // Modal Blueprint Inspector with Visual Architecture Diagram
  const modal = document.getElementById("caseModal");
  const modalClose = document.getElementById("modalClose");
  const modalKicker = document.getElementById("modalKicker");
  const modalTitle = document.getElementById("modalTitle");
  const modalClient = document.getElementById("modalClient");
  const modalDiagram = document.getElementById("modalDiagram");
  const modalContext = document.getElementById("modalContext");
  const modalArch = document.getElementById("modalArch");
  const modalImpact = document.getElementById("modalImpact");
  const modalStack = document.getElementById("modalStack");

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".btn-inspect").forEach((btn) => {
    btn.addEventListener("click", () => {
      const raw = CASE_BLUEPRINTS[btn.dataset.case];
      if (!raw || !modal) return;
      const data = currentLang === "en" && raw.en ? { ...raw, ...raw.en } : raw;

      modalKicker.textContent = data.kicker;
      modalTitle.textContent = data.title;
      modalClient.textContent = data.client;

      if (modalDiagram && Array.isArray(data.diagram)) {
        modalDiagram.innerHTML = `<div class="arch-flow">${data.diagram
          .map(
            (n, idx) => `
          <div class="arch-node">
            <div class="arch-node-head">
              <span class="arch-node-step">${n.step}</span>
              ${idx < data.diagram.length - 1 ? '<span class="arch-node-arrow">➔</span>' : '<span class="arch-node-arrow">✓</span>'}
            </div>
            <div class="arch-node-title">${n.title}</div>
            <div class="arch-node-sub">${n.sub}</div>
          </div>`
          )
          .join("")}</div>`;
      }

      modalContext.textContent = data.context;
      modalArch.innerHTML = data.architecture.map((item) => `<li>${item}</li>`).join("");
      modalImpact.innerHTML = data.impact.map((item) => `<li>${item}</li>`).join("");
      modalStack.innerHTML = raw.stack.map((tech) => `<span class="tag">${tech}</span>`).join("");
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Language Switcher (PT | EN)
  const applyLanguage = (lang) => {
    currentLang = lang === "en" ? "en" : "pt";
    localStorage.setItem("jc_lang", currentLang);
    document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === currentLang);
    });

    const isEn = currentLang === "en";
    const setHtml = (sel, pt, en) => {
      const el = document.querySelector(sel);
      if (el) el.innerHTML = isEn ? en : pt;
    };
    const setText = (sel, pt, en) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = isEn ? en : pt;
    };

    // Update CV & PDF links across the page
    const cvHref = isEn ? "curriculo-en.html" : "curriculo.html";
    const pdfHref = isEn ? "Jonas-Carvalho-Resume-EN.pdf" : "Jonas-Carvalho-CV.pdf";

    const navViewCv = document.getElementById("navViewCvBtn");
    if (navViewCv) {
      navViewCv.href = cvHref;
      navViewCv.textContent = isEn ? "View Resume" : "Ver Currículo";
    }
    const navDlPdf = document.getElementById("navDownloadPdfBtn");
    if (navDlPdf) {
      navDlPdf.href = pdfHref;
      navDlPdf.setAttribute("download", pdfHref);
      navDlPdf.textContent = isEn ? "Download PDF (EN) ↓" : "Baixar PDF ↓";
    }

    document.querySelectorAll('a[href="Jonas-Carvalho-CV.pdf"], a[href="Jonas-Carvalho-Resume-EN.pdf"]').forEach((a) => {
      a.href = pdfHref;
      if (a.hasAttribute("download")) a.setAttribute("download", pdfHref);
    });
    document.querySelectorAll('a[href="curriculo.html"], a[href="curriculo-en.html"]').forEach((a) => {
      a.href = cvHref;
    });

    // Hero
    setHtml(
      ".status-badge",
      '<i class="status-dot"></i>Líder Técnico · Global Hitss Brasil',
      '<i class="status-dot"></i>Technical Lead · Global Hitss Brazil'
    );
    setText(
      "#photoBadgeRole",
      "Líder Técnico · Global Hitss Brasil",
      "Technical Lead · Global Hitss Brazil"
    );
    setText(
      "#photoBadgeSub",
      "Arquitetura Cloud, RPA, DevOps & IA",
      "Cloud, RPA, DevOps & AI Architecture"
    );
    setHtml(
      "#hero-heading",
      'Do sistema <span class="accent">legado</span> à arquitetura em <span class="accent">RPA, Cloud &amp; IA</span>.',
      'From <span class="accent">legacy</span> systems to <span class="accent">RPA, Cloud &amp; AI</span> architecture.'
    );
    setHtml(
      ".hero-lede",
      'Mais de 8 anos liderando squads multidisciplinares, Torre de RPA, esteiras <span translate="no">Jenkins/GitLab</span>, Assessments corporativos (M&amp;A) e modernização de sistemas críticos em <span translate="no">AWS, OCI e GCP</span>.',
      '8+ years leading multidisciplinary engineering squads, an enterprise RPA Tower, <span translate="no">Jenkins/GitLab</span> pipelines, M&amp;A Technical Assessments, and mission-critical systems on <span translate="no">AWS, OCI, and GCP</span>.'
    );

    const heroCtas = document.querySelectorAll(".hero-ctas a");
    if (heroCtas.length >= 3) {
      heroCtas[0].textContent = isEn ? "Explore Projects & Architectures ↓" : "Ver Projetos & Arquiteturas ↓";
      heroCtas[1].textContent = isEn ? "Certifications & Degrees (14) ↗" : "Certificações & Diplomas (14) ↗";
      heroCtas[2].textContent = isEn ? "Download Official PDF (EN) ↓" : "Baixar PDF Oficial ↓";
    }

    // Section headers
    setText("#stack .section-title", "Ferramentas de produção", "Production Technology Stack");
    setText("#especialidades .section-title", "Onde gero impacto direto", "Where I Deliver Direct Impact");
    setText("#casos .section-title", "Arquiteturas e entregas", "Delivered Architectures & Case Studies");
    setText("#geo-heading", "Raio-X técnico, comparativo e perguntas frequentes", "Technical Blueprint, Comparison Matrix & FAQ");
    setText("#geoTabMatrix", "Matriz Legado vs. Moderno", "Legacy vs. Modern Matrix");
    setText("#geoTabFaq", "Perguntas Frequentes (FAQ)", "Frequently Asked Questions (FAQ)");
    setText("#geoTabPillars", "Pilares & Especificações", "Core Pillars & Specs");
    setText("#percurso .section-title", "Experiência e formação", "Career Trajectory & Education");
    setText("#contato .section-title", "Vamos conversar", "Let’s Connect");

    // Modal headings
    setText("#modalDiagramHeading", "Fluxo Visual da Arquitetura", "Visual Architecture Pipeline");
    setText("#modalContextHeading", "Contexto", "Context");

    // Inspect buttons
    document.querySelectorAll(".btn-inspect").forEach((btn) => {
      btn.textContent = isEn ? "Inspect Architecture ↗" : "Ver Arquitetura ↗";
    });
  };

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
  if (currentLang === "en") applyLanguage("en");

  // WhatsApp Message Builder
  const waInput = document.getElementById("waInput");
  const waSend = document.getElementById("waSend");
  const topicButtons = document.querySelectorAll(".wa-topic");
  const phone = "5511915336691";

  const updateWaLink = () => {
    if (!waInput || !waSend) return;
    const text = waInput.value.trim() || "Olá Jonas! Vi seu portfólio e gostaria de conversar.";
    waSend.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  topicButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      topicButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (waInput) {
        waInput.value = btn.dataset.template || "";
        updateWaLink();
      }
    });
  });

  if (waInput) {
    waInput.addEventListener("input", updateWaLink);
    updateWaLink();
  }

  // Copy Email
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("jocarvalhosantos@gmail.com");
        const original = copyEmailBtn.textContent;
        copyEmailBtn.textContent = currentLang === "en" ? "Copied ✓" : "Copiado ✓";
        setTimeout(() => {
          copyEmailBtn.textContent = original;
        }, 2000);
      } catch {
        copyEmailBtn.textContent = "jocarvalhosantos@gmail.com";
      }
    });
  }
});
