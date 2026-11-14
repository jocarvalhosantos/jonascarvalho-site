const CASE_BLUEPRINTS = {
  "identidade-sso": {
    kicker: "Telecom · Identidade Digital & SSO",
    title: "Plataforma Corporativa de Identidade Digital",
    client: "Operação Telecom (Claro / Embratel)",
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
    stack: ["React", "TypeScript", "NestJS", "Node.js", "AWS ECS / Lambda", "Mensageria & Cache", "OAuth 2.0", "CI/CD"]
  },
  "rpa-oci": {
    kicker: "Indústria · RPA Distribuído & Observabilidade",
    title: "Orquestração RPA em Cloud com Jenkins & Grafana",
    client: "Operação Corporativa Multi-Ambiente",
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
    stack: ["Python", "FastAPI", "PostgreSQL", "Keycloak (OIDC)", "Jenkins + Workers", "Docker", "Nginx", "OCI", "Grafana / Prometheus / Loki"]
  },
  "legado-containers": {
    kicker: "Modernização de Legado & Containers · Telecom",
    title: "Desacoplamento de Parque RPA Legado & Sistemas PHP",
    client: "Operação Telecom · Engenharia de Sustentação",
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
    stack: ["Java", "PHP (Laravel / Yii2)", "Docker Compose", "GitLab CI", "Filas de Despacho", "Linux"]
  },
  "assessment-ma": {
    kicker: "Estratégia & Arquitetura · Carve-out M&A",
    title: "Assessment Técnico de Cisão Corporativa",
    client: "Operação de Infraestrutura & Mobilidade",
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
    stack: ["LeanIX", "SAP ERP", "Azure Service Bus", "Microsoft 365", "Governança IAM / NIST", "Arquitetura de Transição"]
  },
  "ia-corporativa": {
    kicker: "IA Generativa & AIOps · Plataforma Interna",
    title: "Portal Corporativo de IA, Gateway Multi-LLM & Triagem",
    client: "Global Hitss · Produto Corporativo",
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
    stack: ["PHP Laravel", "MySQL", "Docker", "Nginx", "RAG", "Multi-LLM Gateway", "OpenTelemetry", "APIs"]
  },
  "macro-manager": {
    kicker: "RPA Híbrido Desktop/Web & Segurança",
    title: "Framework RPA Macro Manager & Gestão de Credenciais",
    client: "Operações BPO & Concessionárias",
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
    stack: ["Macro Manager", "C#", "Python", "FastAPI", "Selenium", "UIA Desktop", "Gestão Segura de Secrets"]
  },
  "workers-docling": {
    kicker: "Workers Assíncronos & IA Documental",
    title: "Orquestração por Filas RabbitMQ & RPA Financeiro com IA",
    client: "Backoffice Corporativo & Financeiro",
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
    stack: ["Python", "RabbitMQ", "Oracle", "React", "Power Automate", "SAP ERP", "Docling IA", "UiPath", "Automation 360"]
  },
  "devsecops-openshift": {
    kicker: "Cloud Native, CI/CD & Segurança",
    title: "Esteiras DevSecOps & Arquitetura Red Hat OpenShift",
    client: "Setor de Energia & Plataformas Cloud",
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
    stack: ["Jenkins", "GitLab CI", "Red Hat OpenShift", "Kubernetes", "GitOps", "SAST / DAST"]
  },
  "produtos-mobile": {
    kicker: "Produtos Corporativos & Integração ERP",
    title: "Gestão Financeira com IA & App Multiplataforma ERP",
    client: "Global Hitss & Indústria",
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
    stack: ["PHP Laravel", "Flutter", "IA Documental", "Keycloak", "APIs REST", "PostgreSQL / MySQL"]
  }
};

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

  // Modal Blueprint Inspector
  const modal = document.getElementById("caseModal");
  const modalClose = document.getElementById("modalClose");
  const modalKicker = document.getElementById("modalKicker");
  const modalTitle = document.getElementById("modalTitle");
  const modalClient = document.getElementById("modalClient");
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
      const data = CASE_BLUEPRINTS[btn.dataset.case];
      if (!data || !modal) return;
      modalKicker.textContent = data.kicker;
      modalTitle.textContent = data.title;
      modalClient.textContent = data.client;
      modalContext.textContent = data.context;
      modalArch.innerHTML = data.architecture.map((item) => `<li>${item}</li>`).join("");
      modalImpact.innerHTML = data.impact.map((item) => `<li>${item}</li>`).join("");
      modalStack.innerHTML = data.stack.map((tech) => `<span class="tag">${tech}</span>`).join("");
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
        copyEmailBtn.textContent = "Copiado ✓";
        setTimeout(() => { copyEmailBtn.textContent = original; }, 2000);
      } catch {
        copyEmailBtn.textContent = "jocarvalhosantos@gmail.com";
      }
    });
  }
});
