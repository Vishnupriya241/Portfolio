const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const personalInfo = {
  name: "Vishnupriya S",
  fullName: "Vishnupriya S",
  title: "Senior Software Engineer",
  tagline: "Building resilient, cloud-native systems from database to deployment.",
  summary:
    "I am a Senior Software Engineer with 4+ years of experience designing, developing, and supporting scalable enterprise applications across backend engineering, frontend development, AWS cloud services, infrastructure automation, and Generative AI solutions.",
  practices: [
    "Agile/Scrum",
    "Sprint Planning",
    "Backlog Grooming",
    "Code Reviews",
    "Technical Design Reviews",
    "CI/CD",
    "Production Support",
    "Root Cause Analysis"
  ],
  location: "Bengaluru, India",
  email: "srivishnu2406@gmail.com",
  phone: "+91 9597075610",
  linkedin: "https://linkedin.com/in/vishnupriya-s-b8370a1aa",
  instagram: "https://instagram.com/vpverse_/",
  // github: "https://github.com/Vishnupriya241",
  resumeUrl: "https://drive.google.com/drive/u/0/folders/1bCo_G1yb63JT9hwHslRltO6byW3b2iTo",
};

export const stats = [
  { label: "Years of Experience", value: "4+", icon: "BriefcaseBusiness" },
  { label: "Projects Delivered", value: "7+", icon: "FolderGit2" },
  { label: "Technologies", value: "20+", icon: "Layers" },
  { label: "Promotions", value: "4", icon: "TrendingUp" },
];


export const skillCategories = [
  {
    category: "Languages & Frameworks",
    icon: "Code2",
    color: "primary",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React.js",
      "Node.js",
      "NestJS",
      "HTML5",
      "CSS3"
    ],
  },
  {
    category: "Backend & Databases",
    icon: "Database",
    color: "secondary",
    skills: [
      "REST APIs",
      "Microservices",
      "TypeORM",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "MySQL",
      "DynamoDB",
      "SQL"
    ],
  },
  {
    category: "Cloud, DevOps & Infrastructure",
    icon: "Cloud",
    color: "accent",
    skills: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
      "GitHub Actions",
      "Linux",
      "NGINX",
      "PM2",
      "Tomcat"
    ],
  },
  {
    category: "Security & Authentication",
    icon: "ShieldCheck",
    color: "primary",
    skills: [
      "JWT",
      "RBAC",
      "SSO",
      "MSAL",
      "PingID",
      "Secure Coding"
    ],
  },
  {
    category: "AI, GenAI & Observability",
    icon: "Sparkles",
    color: "accent",
    skills: [
      "Generative AI",
      "RAG",
      "Amazon Bedrock",
      "OpenTelemetry",
      "Arize Phoenix",
      "AI Model Monitoring",
      "Prometheus",
      "Grafana"
    ],
  },
  {
    category: "Tools & Engineering Practices",
    icon: "Wrench",
    color: "secondary",
    skills: [
      "Git",
      "Postman",
      "JIRA",
      "Confluence",
      "Agile/Scrum",
      "SDLC",
      "Code Reviews",
      "Technical Documentation",
      "Debugging",
      "Root Cause Analysis"
    ],
  },
];


export const experience = [
  {
    company: "Mu Sigma Business Solutions",
    role: "Senior Software Engineer (TDS4)",
    duration: "2022 — Present",
    location: "Bengaluru, India",
    description:
      "Own end-to-end architecture and delivery for business-critical applications while leading a team of 8 engineers.",
    highlights: [
      "Delivered end-to-end features across multiple business-critical enterprise applications, from requirements gathering and design to deployment and production support.",
      "Directed and mentored an 8-member engineering team, driving technical delivery, architectural decisions, and platform reliability across multiple applications.",
      "Partnered with cross-functional teams and business stakeholders to translate requirements into scalable, maintainable, and testable solutions.",
      "Optimized complex database queries and indexing strategies, reducing query execution times and improving performance for business-critical applications.",
      "Automated cloud infrastructure provisioning and deployment workflows, reducing release timelines by 40% and deployment-related issues by 25%.",
      "Conducted code reviews and technical design reviews, improving system resilience, maintainability, and fault tolerance by approximately 20%.",
      "Led database migration initiatives, ensuring seamless data transfer, data integrity, and minimal business disruption.",
      "Developed cloud-based data processing, monitoring, and observability solutions to support large-scale enterprise workloads.",
      "Contributed to Generative AI initiatives and AI observability platforms, improving visibility into AI workloads, model performance, and operational insights.",
      "Managed production incidents, troubleshooting, root cause analysis, and platform stability improvements in high-availability environments."
      ],
    // tech: ["Node.js", "NestJS", "AWS", "PostgreSQL", "Terraform", "Bedrock"],
  },
];

export const projects = [

{
  title: "AI Monitoring, Observability & Traceability Platform",
  slug: "ai-monitoring-observability-platform",

  description:
    "Contributed to an enterprise AI monitoring and observability platform that automated model onboarding, performance monitoring, drift detection, and Agentic AI traceability through centralized monitoring and telemetry pipelines.",

  image: basePath + "/images/ai-observability-dashboard.svg",

  tech: [
    "Python",
    "AWS Lambda",
    "Aurora PostgreSQL",
    "Grafana",
    "Arize Phoenix"
  ],

  // featured: true,

  details: {
    role: "Senior Software Engineer",
    period: "Jan 2026 — Present",

    businessProblem:
      "Machine learning models and Agentic AI applications were deployed across multiple business units without centralized monitoring and traceability. Model performance monitoring, drift detection, and AI application troubleshooting required significant manual effort, while logs and traces were distributed across multiple systems, making root cause analysis difficult and time-consuming.",

    situation:
      "The organization required a reusable monitoring framework capable of onboarding new models with minimal effort while providing centralized observability, automated metric generation, drift detection, and end-to-end traceability for AI workloads and Agentic AI applications.",

    tasks: [
      "Build scalable monitoring pipelines for machine learning models.",
      "Automate metadata onboarding and model registration workflows.",
      "Enable centralized observability and traceability across AI platforms.",
      "Implement monitoring, drift detection, and telemetry pipelines.",
      "Improve troubleshooting and root cause analysis capabilities for AI applications."
    ],

    actions: [
      "Developed AWS Lambda functions for metadata validation, ingestion, and monitoring workflows.",
      "Built ETL pipelines to standardize model outputs and monitoring datasets from multiple AI and ML systems.",
      "Integrated Amazon S3, Aurora PostgreSQL, EventBridge, and Step Functions to support end-to-end monitoring processes.",
      "Implemented metadata onboarding workflows to simplify model registration and monitoring setup.",
      "Developed monitoring pipelines supporting model performance metrics, drift analysis, and operational reporting.",
      "Worked on cross-account EventBridge integrations for collecting monitoring data from distributed ML applications.",
      "Contributed to AI observability and traceability initiatives using OpenTelemetry, Arize Phoenix, and Grafana.",
      "Built telemetry ingestion workflows to centralize AI traces, logs, and execution data from Agentic AI applications.",
      "Worked on Arize Phoenix integrations to provide end-to-end trace visualization and execution flow analysis.",
      "Leveraged Grafana dashboards to improve visibility into system health, operational metrics, and monitoring insights.",
      "Supported infrastructure provisioning and deployment automation using Terraform.",
      "Collaborated with data science, ML engineering, and platform teams to onboard new monitoring use cases and improve observability capabilities."
    ],

    outcomes: [
      "Reduced manual effort required for onboarding and monitoring machine learning models.",
      "Improved visibility into model performance, operational health, and AI application behavior.",
      "Enabled automated generation of monitoring, performance, and drift metrics.",
      "Centralized AI telemetry, traces, and monitoring data into a unified observability platform.",
      "Improved troubleshooting efficiency through end-to-end traceability and root cause analysis capabilities.",
      "Established a scalable foundation for monitoring and observability across enterprise AI workloads."
    ],

    responsibilities: [
      "Developed Lambda-based ingestion, monitoring, and telemetry processing workflows.",
      "Built ETL pipelines and data standardization processes for AI monitoring systems.",
      "Worked with Aurora PostgreSQL, EventBridge, Step Functions, and S3 integrations.",
      "Supported model onboarding, metadata management, and monitoring framework enhancements.",
      "Gained hands-on experience with OpenTelemetry, Arize Phoenix, Grafana, and AI observability platforms.",
      "Contributed to traceability, monitoring, deployment automation, and operational support activities.",
      "Collaborated with cross-functional teams to improve monitoring, observability, and troubleshooting capabilities."
    ],

    techStack: [
      "Python",
      "AWS Lambda",
      "Amazon S3",
      "Aurora PostgreSQL",
      "AWS Step Functions",
      "Amazon EventBridge",
      "AWS Fargate",
      "AWS Glue",
      "ECS/EKS",
      "OpenTelemetry",
      "Arize Phoenix",
      "Grafana",
      "Terraform",
      "GitLab CI/CD"
    ],

    practices: [
  "Agile/Scrum",
  "Sprint Planning",
  "Backlog Grooming",
  "Code Reviews",
  "Technical Design Reviews",
  "CI/CD",
  "Production Support",
  "Root Cause Analysis"
]
  }
},


{
  title: "Enterprise RAG Chatbot",
  slug: "rag-chatbot",
  description:
    "Contributed to the enhancement of an enterprise AI-powered document search and Q&A platform using Retrieval-Augmented Generation (RAG), enabling scalable knowledge discovery and context-aware responses grounded in organizational documents.",

  image: basePath + "/images/rag-chatbot.svg",

  tech: ["Python", "Amazon Bedrock", "Claude", "AWS"],

  // featured: true,

  details: {
    role: "Senior Software Engineer",
    period: "Aug 2025 — Mar 2026",

    businessProblem:
      "Employees spent significant time searching through policies, procedures, PDFs, technical documentation, and internal knowledge repositories. The existing chatbot supported only a single document upload at a time, had slow retrieval performance, and faced scalability limitations as user adoption increased.",

    situation:
      "The organization aimed to enhance the existing chatbot to support large-scale usage, enable multiple document uploads, improve retrieval performance, and provide accurate responses grounded in enterprise knowledge sources.",

    tasks: [
      "Enhance the existing chatbot using a Retrieval-Augmented Generation (RAG) architecture.",
      "Improve retrieval performance and response quality.",
      "Support multiple document uploads and document-based querying.",
      "Implement secure authentication and session management.",
      "Improve scalability and user experience."
    ],

    actions: [
      "Developed Python-based services supporting document ingestion and retrieval workflows.",
      "Implemented RAG pipelines to retrieve relevant document context before generating responses.",
      "Integrated Amazon Bedrock foundation models, including Claude, for context-aware answer generation.",
      "Built AWS Lambda functions for document processing, chunking, metadata extraction, and retrieval workflows.",
      "Leveraged Amazon S3 for document storage and DynamoDB for session management and chat history.",
      "Implemented API Gateway and WebSocket integrations to support real-time conversational experiences.",
      "Integrated Ping Identity authentication for secure user access.",
      "Collaborated with architects, product stakeholders, and engineering teams to improve chatbot performance and scalability.",
      "Participated in testing, deployment, and production support activities."
    ],

    outcomes: [
      "Improved response relevance through document-grounded answer generation.",
      "Enabled support for multiple document uploads and retrieval workflows.",
      "Reduced manual effort spent searching through enterprise documentation.",
      "Enhanced user experience through faster and more context-aware responses.",
      "Contributed to a scalable architecture capable of supporting growing enterprise adoption."
    ],

    responsibilities: [
      "Developed backend services and document processing workflows.",
      "Gained hands-on exposure to Retrieval-Augmented Generation (RAG) architectures using Amazon Bedrock and Claude.",
      "Integrated AWS services for storage, processing, and session management.",
      "Worked on authentication, scalability improvements, and system integrations.",
      "Supported testing, deployment, monitoring, and production issue resolution.",
      "Collaborated with cross-functional teams to deliver platform enhancements."
    ],

    techStack: [
      "Python",
      "Amazon Bedrock",
      "Claude",
      "RAG",
      "AWS Lambda",
      "API Gateway",
      "WebSockets",
      "S3",
      "DynamoDB",
      "EventBridge",
      "Route 53",
      "CloudFront",
      "WAF",
      "Ping Identity",
      "Terraform"
    ],

    practices: [
  "Agile/Scrum",
  "Sprint Planning",
  "Backlog Grooming",
  "Code Reviews",
  "Technical Design Reviews",
  "CI/CD",
  "Production Support",
  "Root Cause Analysis"
]
  }
},

{
  title: "Notification Service",
  slug: "notification-service",
  description:
    "Designed and developed a centralized email notification microservice used across multiple enterprise applications to deliver automated system notifications, approval updates, workflow alerts, and operational communications.",

  image: basePath + "/images/notification-service.svg",

  tech: ["NestJS", "MongoDB", "SMTP", "NGINX", "PM2"],

  featured: true,

  details: {
    role: "Software Engineer",
    period: "Jan 2025 - Jun 2025",

    businessProblem:
      "Enterprise applications relied on application-specific notification implementations, resulting in duplicated logic, inconsistent communication templates, and increased maintenance overhead across teams.",

    situation:
      "The organization required a centralized notification platform that could be integrated with multiple applications and provide a standardized, scalable, and reusable mechanism for sending workflow-driven email communications.",

    tasks: [
      "Design and develop a centralized notification microservice.",
      "Provide reusable APIs for enterprise-wide email communication.",
      "Standardize email templates and notification workflows.",
      "Support high-volume email delivery across multiple applications.",
      "Mentor engineering teams and drive adoption across projects."
    ],

    actions: [
      "Designed the architecture and data model for a centralized email notification platform.",
      "Developed reusable REST APIs enabling enterprise applications to trigger email notifications through a single service.",
      "Implemented configurable email templates for approval workflows, status updates, alerts, and operational communications.",
      "Integrated the notification service with multiple enterprise applications to eliminate duplicate notification implementations.",
      "Built notification tracking and logging capabilities to improve monitoring and troubleshooting.",
      "Configured and managed service deployment, process management, and production support activities.",
      "Collaborated with application teams to onboard and integrate the service into their platforms.",
      "Mentored eight backend engineers on microservices architecture, API design, coding standards, and best practices."
    ],

    outcomes: [
      "Established a centralized notification platform adopted across multiple enterprise applications.",
      "Reduced duplicate development effort by providing a reusable notification framework.",
      "Improved consistency of user communications through standardized email templates and workflows.",
      "Simplified maintenance and future enhancements by consolidating notification logic into a single service.",
      "Enhanced scalability and reliability of email delivery processes across the organization."
    ],

    responsibilities: [
      "Owned end-to-end architecture, development, and deployment of the notification microservice.",
      "Designed APIs, database models, and notification workflows.",
      "Integrated the service with enterprise applications and supported production rollouts.",
      "Managed monitoring, troubleshooting, and operational support activities.",
      "Mentored eight backend engineers and conducted technical reviews.",
      "Collaborated with stakeholders and application teams to drive platform adoption."
    ],

    techStack: [
      "NestJS",
      "MongoDB",
      "SMTP",
      "REST APIs",
      "Microservices",
      "NGINX",
      "PM2"
    ],

    practices: [
  "Agile/Scrum",
  "Sprint Planning",
  "Backlog Grooming",
  "Code Reviews",
  "Technical Design Reviews",
  "CI/CD",
  "Production Support",
  "Root Cause Analysis"
]
  }
},
 
  {
  title: "Asset Management",
  slug: "asset-management",
  description:
    "Led the modernization of a legacy asset management platform by redesigning workflows, improving user experience, and developing a scalable web application for managing asset requests, locker allocations, and vehicle pass processes.",

  image: basePath + "/images/asset-management.svg",

  tech: ["React.js", "NestJS", "PostgreSQL", "MSAL", "JWT"],

  // featured: false,

  details: {
    role: "Associate Engineer",
    period: "Jul 2024 — Dec 2024",

    businessProblem:
      "The existing asset management solution was hosted within a legacy internal platform and suffered from poor user experience, limited scalability, and complex workflows. Users faced challenges managing asset requests, locker allocations, and vehicle pass processes efficiently.",

    situation:
      "The organization initiated a modernization effort to migrate the application into a dedicated web platform with improved usability, maintainability, and scalability. The project required redesigning workflows, rebuilding the application architecture, and ensuring seamless adoption by business users.",

    tasks: [
      "Modernize the legacy asset management application and improve user experience.",
      "Design scalable workflows for asset requests, locker allocation, and vehicle pass management.",
      "Implement secure authentication and role-based access controls.",
      "Create a normalized database design to support future scalability and reporting.",
      "Lead development activities and mentor junior engineers throughout the project lifecycle."
    ],

    actions: [
      "Led requirement analysis and collaborated with stakeholders to understand existing business workflows and pain points.",
      "Designed end-to-end application workflows, database schemas, and data models for asset management processes.",
      "Implemented role-based access control (RBAC), JWT authentication, and Microsoft Active Directory integration using MSAL.",
      "Developed frontend and backend modules supporting asset requests, locker management, vehicle pass workflows, and approval processes.",
      "Normalized database structures and optimized application workflows to improve maintainability and performance.",
      "Mentored and guided four junior engineers, conducted code reviews, and ensured adherence to development standards.",
      "Managed deployment activities, release coordination, environment configuration, and production support.",
      "Worked closely with business stakeholders during UAT and post-production rollout to ensure successful adoption."
    ],

    outcomes: [
      "Successfully migrated a legacy internal application into a modern, scalable web platform.",
      "Improved user experience through streamlined workflows and enhanced usability.",
      "Standardized asset, locker, and vehicle pass management processes across the organization.",
      "Strengthened application security through centralized authentication and role-based access controls.",
      "Improved maintainability and scalability through workflow redesign and normalized database architecture.",
      "Enabled faster feature delivery and long-term platform growth through modern application architecture."
    ],

    responsibilities: [
      "Led end-to-end application design, workflow architecture, and technical implementation.",
      "Designed database schemas, relationships, and data normalization strategies.",
      "Developed frontend and backend features for asset, locker, and vehicle pass management workflows.",
      "Implemented authentication, authorization, and access control mechanisms.",
      "Mentored four junior engineers and provided technical leadership throughout development.",
      "Managed deployments, production releases, stakeholder communication, and application support."
    ],

    techStack: [
      "React.js",
      "NestJS",
      "PostgreSQL",
      "JWT",
      "MSAL",
      "RBAC",
      "Apache Hop",
      "NGINX",
      "Tomcat",
      "PM2"
    ],
    practices: [
  "Agile/Scrum",
  "Sprint Planning",
  "Backlog Grooming",
  "Code Reviews",
  "Technical Design Reviews",
  "CI/CD",
  "Production Support",
  "Root Cause Analysis"
]
  }
},

{
  title: "Gatepass Management",
  slug: "gatepass-management",
  description:
    "Led the modernization of a legacy gatepass management platform by redesigning approval workflows, improving user experience, and building a scalable web application for managing IT and non-IT asset movement requests across the organization.",

  image: basePath + "/images/gatepass-management.svg",

  tech: ["React.js", "NestJS", "PostgreSQL", "MSAL", "JWT"],

  // featured: false,

  details: {
    role: "Associate Engineer",
    period: "Jan 2024 — Jun 2024",

    businessProblem:
      "The existing gatepass management process for IT and non-IT assets was largely manual and lacked centralized tracking. Managing asset movement requests for laptops, monitors, chairs, and other organizational assets involved multiple approval stages, resulting in operational inefficiencies, limited visibility, and audit challenges.",

    situation:
      "The organization required a modern gatepass management platform to streamline asset movement approvals, improve traceability, and provide a standardized process for managing IT and non-IT asset transfers. The project involved migrating a legacy application to a scalable web platform while preserving existing business workflows and approval controls.",

    tasks: [
      "Modernize the legacy gatepass management application and improve user experience.",
      "Design configurable workflows for IT and non-IT asset movement requests.",
      "Implement multi-level approval workflows based on asset categories and business rules.",
      "Provide complete visibility into request status, approvals, and asset movement history.",
      "Design a scalable and secure platform capable of supporting future business requirements.",
      "Lead development activities and mentor junior engineers throughout the project lifecycle."
    ],

    actions: [
      "Collaborated with business stakeholders to understand existing asset movement processes, approval hierarchies, and operational challenges.",
      "Designed end-to-end workflows, database schemas, and normalized data models for gatepass request management.",
      "Implemented configurable approval workflows for IT and non-IT assets, supporting different approval chains and business rules.",
      "Developed frontend and backend modules for gatepass requests, approval tracking, request history, and asset movement management.",
      "Implemented Role-Based Access Control (RBAC), JWT authentication, and Microsoft Active Directory integration using MSAL.",
      "Built automated notifications for approvals, rejections, and rework requests to improve process transparency.",
      "Optimized application workflows and database structures to improve maintainability and scalability.",
      "Mentored four junior engineers, conducted code reviews, and provided technical guidance throughout development.",
      "Managed deployment activities, release coordination, production support, and stakeholder communication.",
      "Worked closely with business users during UAT and rollout phases to ensure successful adoption."
    ],

    outcomes: [
      "Successfully migrated the legacy gatepass process into a modern web-based platform.",
      "Standardized asset movement approval workflows across IT and non-IT asset categories.",
      "Improved visibility into asset movement requests, approval status, and historical records.",
      "Reduced manual effort through workflow automation and centralized request management.",
      "Enhanced compliance and audit readiness through complete approval traceability and request history.",
      "Improved user experience, maintainability, and scalability through modern application architecture."
    ],

    responsibilities: [
      "Led end-to-end application design, workflow architecture, and technical implementation.",
      "Designed database schemas, approval frameworks, and data normalization strategies.",
      "Developed frontend and backend features for gatepass request and approval management.",
      "Implemented authentication, authorization, notification, and workflow automation capabilities.",
      "Mentored four junior engineers and provided technical leadership throughout development.",
      "Managed deployments, production releases, stakeholder communication, and application support."
    ],

    techStack: [
      "React.js",
      "NestJS",
      "PostgreSQL",
      "JWT",
      "MSAL",
      "RBAC",
      "Apache Hop",
      "NGINX",
      "Tomcat",
      "PM2"
    ],
    practices: [
  "Agile/Scrum",
  "Sprint Planning",
  "Backlog Grooming",
  "Code Reviews",
  "Technical Design Reviews",
  "CI/CD",
  "Production Support",
  "Root Cause Analysis"
]
  }
},

{
  title: "Onboarding Management",
  slug: "onboarding-management",
  description:
    "Enhanced and maintained an employee onboarding platform that streamlined onboarding workflows, task tracking, document management, and onboarding progress visibility for HR teams.",

  image: basePath + "/images/onboarding-management.svg",

  tech: ["React.js", "NestJS", "SQL Server", "MSAL"],

  // featured: false,

  details: {
    role: "Software Engineer",
    period: "Nov 2023 — Feb 2024",

    businessProblem:
      "Employee onboarding activities involved multiple manual processes, making it difficult for HR teams to track onboarding tasks, manage documentation, and monitor onboarding progress consistently.",

    situation:
      "The organization utilized an onboarding platform to manage employee onboarding workflows and HR processes. As business requirements evolved, the application required workflow enhancements, process improvements, and ongoing support to improve efficiency and user experience.",

    tasks: [
      "Enhance onboarding workflows based on evolving HR requirements.",
      "Improve visibility into onboarding task status and employee progress.",
      "Implement secure authentication and access controls.",
      "Support onboarding operations through application maintenance and enhancements.",
      "Ensure reliable application performance and production support."
    ],

    actions: [
      "Developed and enhanced backend services and APIs to support onboarding workflows and task management.",
      "Implemented workflow enhancements to improve onboarding process efficiency and user experience.",
      "Integrated secure authentication and authorization using JWT and Microsoft Active Directory (MSAL).",
      "Designed and optimized SQL Server queries and database operations to support onboarding processes.",
      "Collaborated with HR stakeholders to understand requirements and deliver workflow improvements.",
      "Performed debugging, issue resolution, and production support activities to maintain application stability.",
      "Participated in deployment, release management, and post-deployment validation activities.",
      "Contributed to application maintenance and continuous improvements based on user feedback."
    ],

    outcomes: [
      "Improved onboarding workflow efficiency through process enhancements and automation.",
      "Enhanced visibility into employee onboarding progress and task completion status.",
      "Reduced manual effort for HR teams through streamlined onboarding operations.",
      "Improved application reliability and user experience through ongoing enhancements and support.",
      "Enabled secure access management through centralized authentication and authorization mechanisms."
    ],

    responsibilities: [
      "Developed and maintained backend services and onboarding workflows.",
      "Implemented workflow enhancements and business process improvements.",
      "Designed and optimized database queries and data management processes.",
      "Collaborated with HR stakeholders to gather requirements and support onboarding operations.",
      "Managed production support, deployments, troubleshooting, and issue resolution."
    ],

    techStack: [
      "React.js",
      "NestJS",
      "SQL Server",
      "SSMS",
      "NGINX",
      "Tomcat",
      "PM2"
    ]
  }
},

  {
    title: "Finance Management",
    slug: "finance-management",
    description:
      "A finance management system to automate expense tracking, approvals, and reconciliation across teams.",
    image: basePath + "/images/finance-management.svg",
    tech: ["Node.js", "Angular", "SQL Server", "OAuth2.0"],
  details: {
    role: "Backend Engineer",
    period: "Jan 2023 - Nov 2023",
    businessProblem:
      "The existing finance management solution was built within an internal business platform and suffered from poor user experience, limited scalability, and complex financial workflows. Users faced challenges managing expenses, approvals, and financial operations efficiently.",

    situation:
      "The organization decided to modernize the platform by migrating it to a dedicated web application with improved usability, scalability, and maintainability. The initiative required redesigning workflows, migrating historical data, and rebuilding the application architecture while ensuring business continuity.",

    tasks: [
      "Migrate the legacy finance management application to a modern web-based platform.",
      "Design scalable application architecture, workflows, and database schemas.",
      "Migrate existing financial data to a new database environment with data integrity.",
      "Implement secure authentication and role-based access controls.",
      "Support finance stakeholders with improved operational workflows and reporting."
    ],

    actions: [
      "Collaborated with business stakeholders to gather requirements and redesign finance workflows.",
      "Contributed to application architecture design, workflow modeling, and database schema design.",
      "Developed backend services and REST APIs to support expense management, approvals, and financial operations.",
      "Implemented OAuth 2.0 authentication and Role-Based Access Control (RBAC) for secure access management.",
      "Built ETL processes using SQL Server Management Studio (SSMS) to migrate and transform legacy financial data.",
      "Created and optimized database schemas, stored procedures, and integrations to support scalable operations.",
      "Supported deployment activities, user onboarding, and production issue resolution throughout the migration.",
      "Worked closely with finance stakeholders to address usability concerns and improve overall user experience."
    ],

    outcomes: [
      "Successfully migrated the legacy finance platform to a scalable web application with minimal business disruption.",
      "Improved user experience through streamlined workflows and a modern application interface.",
      "Centralized financial operations, approval tracking, and reporting capabilities within a single platform.",
      "Ensured secure access management through OAuth 2.0 authentication and RBAC implementation.",
      "Achieved seamless migration of historical financial data while maintaining data integrity and auditability.",
      "Reduced operational overhead by automating manual finance workflows and improving process visibility."
    ],

    responsibilities: [
      "Developed backend services and business workflows using Node.js.",
      "Implemented OAuth 2.0 authentication and Role-Based Access Control (RBAC).",
      "Designed and maintained database schemas and data migration processes.",
      "Built ETL pipelines using SQL Server Management Studio (SSMS) for data migration and transformation.",
      "Supported deployment, production releases, and post-migration stabilization activities.",
      "Collaborated with finance stakeholders to resolve issues and enhance application usability."
    ],

    techStack: [
      "Node.js",
      "Angular",
      "SQL Server",
      "OAuth 2.0",
      "RBAC",
      "REST APIs",
      "SSMS",
      "ETL",
      "GitLab CI/CD",
      "Nginx",
      "PM2"
    ]
  }
},

{
  title: "People Management",
  slug: "people-management",
  description:
    "Enhanced and supported an enterprise people management platform used for resource allocation, workforce planning, reporting, and employee project assignments.",

  image: basePath + "/images/people-management.svg",

  tech: ["Node.js", "Angular", "PostgreSQL", "OAuth2.0"],

  details: {
    role: "Backend Engineer",
    period: "2022 — 2022",

    businessProblem:
      "Resource allocation and workforce management required timely visibility into employee assignments, project utilization, and organizational reporting. Existing processes required continuous enhancements to support evolving business needs and improve operational efficiency.",

    situation:
      "The organization relied on a centralized people management platform for managing resource allocation, project staffing, and workforce reporting. As business requirements evolved, the application required new features, reporting capabilities, performance improvements, and production support to ensure uninterrupted operations.",

    tasks: [
      "Enhance existing resource management and workforce allocation workflows.",
      "Develop APIs to support new business requirements and integrations.",
      "Improve reporting capabilities through optimized database queries.",
      "Provide production support and resolve application incidents within SLA timelines.",
      "Maintain application stability, performance, and data accuracy."
    ],

    actions: [
      "Developed and enhanced REST APIs to support resource allocation and workforce management processes.",
      "Created and optimized PostgreSQL queries for business reports, utilization tracking, and operational dashboards.",
      "Implemented application enhancements based on stakeholder and business requirements.",
      "Investigated and resolved production incidents and support tickets, ensuring minimal impact to business operations.",
      "Performed root cause analysis for recurring issues and implemented long-term fixes.",
      "Collaborated with business users, project managers, and development teams to deliver enhancements and support releases.",
      "Maintained secure authentication and authorization workflows using OAuth 2.0.",
      "Participated in application deployments, testing, and post-release validation activities."
    ],

    outcomes: [
      "Improved reporting accuracy and visibility into resource allocation and workforce utilization.",
      "Enhanced application functionality through continuous feature improvements and workflow optimizations.",
      "Reduced production issues through proactive monitoring, troubleshooting, and root cause analysis.",
      "Ensured reliable system performance and high availability for business-critical operations.",
      "Delivered enhancements that improved user experience and operational efficiency."
    ],

    responsibilities: [
      "Developed and maintained REST APIs for resource allocation and workforce management workflows.",
      "Designed and optimized PostgreSQL queries, reports, and data retrieval processes.",
      "Resolved production incidents and managed application support activities.",
      "Collaborated with stakeholders to understand requirements and implement enhancements.",
      "Performed debugging, root cause analysis, testing, and deployment support.",
      "Maintained application security and access controls using OAuth 2.0."
    ],

    techStack: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "SQL",
      "Production Support",
      "Incident Management"
    ]
  }
}

];

export const education = [
  {
    title: "B.E. in Computer Science",
    institution: "Sona College of Technology, Salem, Tamil Nadu",
    date: "2018 - 2022",
    cgpa: "9.04/10",
    icon: "GraduationCap",
    languages: ["Tamil", "English"],
  },
];

export const achievements = [
  {
    title: "Spot Award (2024)",
    date: "2024",
    icon: "Award",
    description:
      "Received Spot Award for technical contribution, ownership, and fast execution.",
  },
  {
    title: "Impact Award (2025)",
    date: "2025",
    icon: "Award",
    description:
      "Received Impact Award for successfully leading the migration of multiple enterprise applications, ensuring seamless delivery, stakeholder alignment, and on-time project completion.",
  },
  {
    title: "Spot Award (2026)",
    date: "2026",
    icon: "Award",
    description:
      "Received Spot Award for successfully migrating enterprise Generative AI AWS infrastructure from CCP to CCP Next using Terraform, enabling standardized infrastructure management, automation, and operational efficiency.",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];