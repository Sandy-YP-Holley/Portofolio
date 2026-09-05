import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    badge: 'Client Systems',
    description: 'Interface architecture emphasizing type safety, responsive layout logic, accessibility, and zero unnecessary runtime weight.',
    items: [
      { name: 'React 19 & 18', context: 'Component hierarchies, hooks, state management, concurrent features', highlight: true },
      { name: 'Next.js 16 (App Router)', context: 'Server components, edge middleware, serverless route handlers', highlight: true },
      { name: 'TypeScript', context: 'Strict typing, generic boundaries, Zod schema validation', highlight: true },
      { name: 'JavaScript (ESNext)', context: 'Native DOM APIs, async/await, event loops, zero-framework apps', highlight: true },
      { name: 'Tailwind CSS (v3 & v4)', context: 'Design token architecture, custom utility primitives, dark palettes' },
      { name: 'Alpine.js', context: 'Lightweight reactive DOM state in server-rendered stacks' },
      { name: 'HTML5 & CSS3', context: 'Semantic structure, WCAG 2.1 AA accessibility, fluid layouts' }
    ]
  },
  {
    title: 'Backend & Server Systems',
    badge: 'Server Architecture',
    description: 'Stateless route handlers, secure session boundaries, cryptographic authentication, and robust data transformations.',
    items: [
      { name: 'Node.js', context: 'Event-driven asynchronous runtime, stream piping, buffer handling', highlight: true },
      { name: 'Express.js (v4 & v5)', context: 'RESTful API routers, DAO abstractions, middleware pipelines', highlight: true },
      { name: 'Python', context: 'Scientific computing, computer vision pipelines, automation scripting', highlight: true },
      { name: 'Flask', context: 'Lightweight WSGI endpoints, model serving, image inference APIs' },
      { name: 'Laravel (TALL)', context: 'MVC architectures, Eloquent ORM, full-stack PHP applications' },
      { name: 'Auth & Security', context: 'JOSE HS256 JWT, bcrypt, HttpOnly cookies, RBAC, Anti-BOLA/IDOR guards' }
    ]
  },
  {
    title: 'Databases & Storage',
    badge: 'Data Integrity',
    description: 'Document and relational persistence models, connection pool caching, and referential soft-delisting patterns.',
    items: [
      { name: 'MongoDB & Atlas', context: 'Document modeling, aggregation pipelines, serverless connection caching', highlight: true },
      { name: 'PostgreSQL', context: 'Relational schemas, ACID transactions, complex foreign keys', highlight: true },
      { name: 'MySQL / MariaDB', context: 'Normalized relational architectures, indexing, stored procedures' },
      { name: 'Redis', context: 'TTL key-value storage, atomic rate limiting, session locks' }
    ]
  },
  {
    title: 'Testing & Quality Assurance',
    badge: 'Verification Matrix',
    description: 'Comprehensive automated test strategies proving architectural correctness before code touches production.',
    items: [
      { name: 'Playwright', context: 'Cross-viewport E2E automation, axe-core WCAG accessibility testing', highlight: true },
      { name: 'Vitest', context: 'Lightning-fast unit testing, business rule validation, state machines', highlight: true },
      { name: 'Cypress', context: 'Interactive browser verification and component tests' },
      { name: 'Automated CI Pipelines', context: 'Multi-stage GitHub Actions: lint, typecheck, unit, API QA, E2E' }
    ]
  },
  {
    title: 'Tooling, Machine Learning & Ops',
    badge: 'Infrastructure',
    description: 'Version control, developer toolchains, machine learning inference engines, and deployment environments.',
    items: [
      { name: 'Git & GitHub', context: 'Branch strategies, automated pull-request reviews, CI workflows', highlight: true },
      { name: 'Ultralytics YOLO & PyTorch', context: 'Computer vision training, model fine-tuning (YOLOv8, YOLO11)', highlight: true },
      { name: 'OpenCV', context: 'Image preprocessing, bounding box matrix transforms, color spaces' },
      { name: 'Jira & Agile Workflows', context: 'Sprint backlog estimation, stakeholder requirement mapping' },
      { name: 'Vercel & Cloud Runtimes', context: 'Edge configuration, serverless functions, DNS, CDN asset caching' }
    ]
  }
];
