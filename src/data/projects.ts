import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'chronicle-and-quill',
    number: '01',
    title: 'Chronicle & Quill',
    subtitle: 'Archival Historical Bookstore & Curatorial Ledger',
    positioning: 'A production-engineered full-stack antiquarian bookstore, historical archive, and scholarly press operating on a zero-cost serverless compute & database model.',
    category: 'Flagship Full-Stack',
    isFlagship: true,
    summary: 'Chronicle & Quill preserves and dispatches classical codices, illuminated manuscripts, Renaissance treatises, and foundational historical texts across four defined epochs: Antiquity, Medieval, Early Modern, and the 20th Century. Built to demonstrate architectural competence across both software engineering and quality assurance, the entire application runs on Vercel serverless compute and MongoDB Atlas M0 with zero paid third-party dependencies.',
    keyTech: ['Next.js 16 (App Router)', 'TypeScript 5.9', 'MongoDB Atlas M0', 'Tailwind CSS v4', 'Playwright & Vitest', 'JOSE / HS256 JWT'],
    allTech: [
      {
        category: 'Architecture & Framework',
        items: ['Next.js 16.3.4 (App Router)', 'TypeScript 5.9', 'Tailwind CSS v4.0', 'Serverless Route Handlers', 'Edge Middleware']
      },
      {
        category: 'Data & Persistence',
        items: ['MongoDB Atlas M0 (Free Tier)', 'Global Client Connection Caching', 'Dedicated Binary Document Isolation', '24h TTL Idempotency Store']
      },
      {
        category: 'Security & Auth',
        items: ['3-Tier RBAC (Scholar / Archivist / Curatorial)', 'JOSE HS256 JWT', 'HttpOnly SameSite=Lax Cookies', 'Anti-BOLA & Anti-IDOR Guards', 'Strict PAN/CVV PCI Guard', 'RFC-7807 Error Standard']
      },
      {
        category: 'Testing & Quality Assurance',
        items: ['172/172 Automated Tests', '30 Vitest Unit Tests', '116 TSX API Regression Tests', '26 Playwright E2E Tests', 'Axe-core WCAG 2.1 AA Audits', '90 Manual QA Test Cases']
      }
    ],
    liveUrl: 'https://chronicle-and-quill.vercel.app/',
    repositoryUrl: 'https://github.com/Sandy-YP-Holley/chronicle-and-quill',
    deploymentStatus: {
      type: 'live',
      badge: 'Live Production',
      note: 'Vercel serverless deployment active with Atlas M0 cluster'
    },
    metrics: [
      { label: 'Automated Tests', value: '172 / 172', detail: '100% passing across Vitest, TSX API, and Playwright' },
      { label: 'Manual QA Cases', value: '90 / 90', detail: 'Documented verification across discovery, cart, checkout, & RBAC' },
      { label: 'WCAG 2.1 AA Violations', value: '0 Clean', detail: 'Automated axe-core accessibility compliance' },
      { label: 'Compiled Routes', value: '48 Routes', detail: 'Compiled via Turbopack in 1037ms without warnings' },
    ],
    features: [
      {
        title: 'Catalog Stacks Exploration',
        description: 'Browse 22+ preserved folios with multi-facet filters (Epoch, Format, Price boundaries, In-stock toggle) and compound full-text search with MongoDB relevance scoring.',
        tag: 'Catalog'
      },
      {
        title: 'Dual-State Satchel (Cart)',
        description: 'Unauthenticated guests receive an ephemeral cq_guest_id cookie. Upon scholar login or registration, guest folios are automatically merged and deduplicated into the account’s permanent cart.',
        tag: 'Cart'
      },
      {
        title: 'Courier Checkout & Idempotency',
        description: 'Simulated courier fulfillment with live address validation and atomic idempotency locks stored with 24-hour TTL indices to eliminate duplicate charges on double-clicks.',
        tag: 'Checkout'
      },
      {
        title: 'Archivist Dealership & Inventory',
        description: 'Elevates verified scholars to archivist status via /seller/onboard. Real-time sales statistics, stock count updates, and live price adjustment.',
        tag: 'Seller'
      },
      {
        title: 'Dual-Source Cover Selector',
        description: 'Catalog manuscripts using either remote HTTPS URLs with domain whitelisting or direct drag-and-drop local file uploads (up to 10 MB) stored in MongoDB Atlas.',
        tag: 'Media'
      },
      {
        title: 'Curatorial Overseer Management',
        description: 'Administrative portal tracking gross historical revenue, volume counts, registered scholars, and active archivists with irreversible order state machines and soft-delisting.',
        tag: 'Admin'
      }
    ],
    engineeringHighlights: [
      {
        title: 'Serverless Connection Caching',
        detail: 'MongoDB Atlas connections are cached globally (global._mongoClientPromise) across warm lambda function invocations with maxPoolSize: 10, eliminating cold-start connection storms and staying safely within Atlas M0 connection ceilings.',
        threatOrImpact: 'Eliminates lambda connection exhaustion and reduces TTFB across cold boots'
      },
      {
        title: 'Dedicated Image Document Isolation',
        detail: 'Uploaded manuscript covers are isolated into a specialized book_images collection storing raw binary buffers, served via a streaming endpoint (/api/images/[id]) with Cache-Control: public, max-age=31536000, immutable.',
        threatOrImpact: 'Prevents MongoDB 16 MB document size limit bloating on primary book records'
      },
      {
        title: 'Server-Authoritative Pricing & Atomic Locks',
        detail: 'Zero client-supplied prices are honored; line items and totals are re-queried authoritatively on the server during checkout. Conditional MongoDB queries ({ stock: { $gte: quantity } }, { $inc: { stock: -quantity } }) guard against overselling.',
        threatOrImpact: 'Mitigates price tampering and high-concurrency checkout race conditions'
      },
      {
        title: 'Anti-BOLA & Anti-IDOR Authorization Guards',
        detail: 'Subject claims are strictly extracted from signed HS256 JOSE JWTs in HttpOnly SameSite=Lax session cookies. Route parameters are verified against identity tokens so archivists can only mutate folios they catalogued.',
        threatOrImpact: 'Blocks Broken Object Level Authorization and cross-tenant data exfiltration'
      },
      {
        title: 'PCI-DSS Simulated Guard & RFC-7807 Errors',
        detail: 'The server actively inspects incoming requests and immediately rejects payloads containing raw credit card PANs or CVVs with HTTP 400. Custom Zod error transformers convert schema violations into structured RFC-7807 Problem Details.',
        threatOrImpact: 'Ensures strict compliance boundary and transparent machine-readable errors'
      }
    ],
    roles: [
      {
        role: 'Scholar (Buyer)',
        subtitle: 'Patron of the Archives',
        description: 'Standard verified client role dedicated to archival exploration and acquisition.',
        capabilities: ['Catalog stacks exploration with epoch filtering', 'Ephemeral-to-permanent cart auto-merge', 'Personal study wishlist archival', 'Courier checkout with address validation', 'Visual dispatch lifecycle tracking']
      },
      {
        role: 'Archivist (Seller)',
        subtitle: 'Curator & Dealer',
        description: 'Elevated merchant tier unlocked via verification workflow.',
        capabilities: ['Dealership onboarding and KYC flow', 'Real-time sales & inventory metrics', 'Dual-source cover uploads (URL & 10MB raw binary)', 'Manuscript pricing and soft-delisting', 'Strict Anti-BOLA ownership boundaries']
      },
      {
        role: 'Curatorial Overseer (Admin)',
        subtitle: 'System Administrator',
        description: 'Hardcoded admin credential provisioned with zero public self-elevation vectors.',
        capabilities: ['Executive KPI & business intelligence dashboard', 'Irreversible order state machine (Delivered/Cancelled locks)', 'Safe user directory with passwordHash projection omission', 'Global inventory audit & soft-delisting integrity']
      }
    ],
    qaArtifacts: [
      { name: 'QA/TEST-PLAN.md', description: 'Strategic master test plan outlining system architecture, test levels, and exit criteria' },
      { name: 'QA/MANUAL-TESTS.md', description: 'Comprehensive repository of 90 detailed manual test cases across discovery, cart, RBAC, and accessibility' },
      { name: 'QA/CURL-TESTS.md', description: 'Reproducible cURL command suite testing every public, scholar, seller, and admin API endpoint' },
      { name: 'QA/EXPLORATORY.md', description: '5 time-boxed exploratory testing charters covering concurrency, session hijacking, and boundary attacks' },
      { name: 'QA/TRACEABILITY.md', description: 'Requirements Traceability Matrix (RTM) mapping REQ-01 through REQ-30 across all test levels' },
      { name: 'QA/BUG-REPORTS.md', description: 'Defect classification matrix and resolution reports for all 8 defects resolved across iterations' }
    ],
    screenshots: [
      {
        url: '/images/chronicleandquill/homepage.PNG',
        title: 'Archival Landing & Epoch Curations',
        description: 'Editorial homepage highlighting preserved folios across Antiquity, Medieval, Early Modern, and 20th Century eras with live catalog counters.',
        category: 'Storefront'
      },
      {
        url: '/images/chronicleandquill/catalogues.PNG',
        title: 'Catalog Stacks & Faceted Search',
        description: 'Multi-faceted archival search interface featuring compound epoch filters, binding format selection, price sliders, and in-stock toggles.',
        category: 'Catalog'
      },
      {
        url: '/images/chronicleandquill/cart.PNG',
        title: 'Dual-State Satchel Drawer',
        description: 'Ephemeral guest cart auto-merging with permanent scholar account upon authentication, with line-item volume counts and live subtotals.',
        category: 'Checkout'
      },
      {
        url: '/images/chronicleandquill/searchpage.PNG',
        title: 'Full-Text Archival Discovery',
        description: 'MongoDB relevance-scored text search handling translation variants, author names, and historical keywords with regex sanitization.',
        category: 'Catalog'
      },
      {
        url: '/images/chronicleandquill/wishlist.PNG',
        title: 'Scholar Study Archives (Wishlist)',
        description: 'One-tap preservation of rare folios into personal research collections, persisted across scholar sessions.',
        category: 'Account'
      },
      {
        url: '/images/chronicleandquill/sellerlisting.PNG',
        title: 'Archivist Inventory Management',
        description: 'Seller portal enabling stock editing, pricing adjustments, and dual-source manuscript cover uploads with Anti-BOLA guards.',
        category: 'Seller'
      },
      {
        url: '/images/chronicleandquill/admin.PNG',
        title: 'Curatorial Overseer KPI Dashboard',
        description: 'Real-time administrative business intelligence displaying gross historical revenue, volume counts, scholar accounts, and active archivists.',
        category: 'Admin'
      },
      {
        url: '/images/chronicleandquill/adminorders.PNG',
        title: 'Order Lifecycle State Machine',
        description: 'Terminal order status controls ensuring delivered or cancelled dispatches cannot be forged or arbitrarily reverted.',
        category: 'Admin'
      },
      {
        url: '/images/chronicleandquill/adminstocks.PNG',
        title: 'Stock Auditing & Soft-Delisting',
        description: 'Inventory management interface preserving historical line-item integrity by soft-delisting ordered manuscripts rather than purging records.',
        category: 'Admin'
      },
      {
        url: '/images/chronicleandquill/adminusers.PNG',
        title: 'Secure User Directory',
        description: 'Administrative user listing employing explicit MongoDB projections to exclude password hashes from memory and responses.',
        category: 'Admin'
      },
      {
        url: '/images/chronicleandquill/adminprofile.PNG',
        title: 'Overseer Identity & Audit Authority',
        description: 'Protected profile view showcasing role-verified permissions and curatorial access bounds.',
        category: 'Admin'
      },
      {
        url: '/images/chronicleandquill/signin.PNG',
        title: 'Cryptographic Authentication Portal',
        description: 'HttpOnly SameSite=Lax session authentication issuing signed HS256 JOSE JWTs for authenticated scholars and staff.',
        category: 'Auth'
      },
      {
        url: '/images/chronicleandquill/signup.PNG',
        title: 'Scholar Guild Registration',
        description: 'New scholar onboarding with real-time field validation, bcrypt password hashing, and automatic guest-to-account cart synchronization.',
        category: 'Auth'
      }
    ]
  },
  {
    id: 'supernotes',
    number: '02',
    title: 'SuperNotes',
    subtitle: 'Full-stack notes, rich text & personal knowledge workspace',
    positioning: 'MERN full-stack workspace featuring automated JWT refresh-token rotation, rich text formatting, file attachments, and an interactive calendar view.',
    category: 'MERN Workspace',
    isFlagship: false,
    summary: 'A complete personal knowledge base engineered with the MERN stack (MongoDB, Express, React 19, Node.js). SuperNotes delivers a distraction-free writing environment with rich text formatting, file attachments up to 2 MB, multi-format previews, month-grid calendar note associations, and strict multi-tenant user data isolation.',
    keyTech: ['React 19', 'Node.js & Express', 'MongoDB / Mongoose v8', 'JWT Token Rotation', 'Tailwind & DaisyUI', 'DOMPurify'],
    allTech: [
      {
        category: 'Frontend Client',
        items: ['React 19', 'Vite', 'React Router v8', 'Tailwind CSS v3', 'DaisyUI v4', 'Axios (with Interceptors)', 'DOMPurify', 'Lucide React']
      },
      {
        category: 'Backend Server',
        items: ['Node.js', 'Express.js', 'MongoDB (Mongoose v8)', 'JWT (15m access / 7d refresh)', 'bcryptjs', 'Helmet', 'MongoSanitize', '@upstash/ratelimit']
      },
      {
        category: 'Verification & QA',
        items: ['9/9 Automated API Tests Passed', 'Playwright E2E Browser Automation', '38 Documented Manual QA Scenarios']
      }
    ],
    liveUrl: 'https://super-notes-roan.vercel.app/',
    repositoryUrl: 'https://github.com/Sandy-YP-Holley/super-notes',
    deploymentStatus: {
      type: 'frontend_only',
      badge: 'Frontend Demo Live · Backend Offline',
      note: 'Frontend demo is fully accessible on Vercel. The Railway Express/MongoDB backend is currently offline.'
    },
    metrics: [
      { label: 'API Integration Tests', value: '9 / 9 Passed', detail: 'Automated verification across all REST endpoints' },
      { label: 'Playwright E2E Flow', value: '11.8s Clean', detail: 'Complete end-to-end browser user journey' },
      { label: 'Documented QA Tests', value: '38 Scenarios', detail: 'Boundary cases, XSS sanitization, attachment validation' },
      { label: 'Token Lifecycle', value: '15m / 7d', detail: 'Automated silent refresh token rotation via Axios interceptors' }
    ],
    features: [
      {
        title: 'Automated Token Rotation',
        description: 'Short-lived JWT access tokens (15m expiry) paired with secure refresh tokens (7d expiry) and automatic silent renewal via Axios interceptors upon HTTP 401.',
        tag: 'Auth'
      },
      {
        title: 'Rich Text Note Editor',
        description: 'Comprehensive formatting tools including Bold, Italic, Underline, Highlight, and custom font sizing (12px to 48px) with client-side DOMPurify and strict backend attribute sanitization.',
        tag: 'Editor'
      },
      {
        title: 'Multi-Format File Attachments',
        description: 'Attach images (JPG, PNG, GIF, WebP, SVG) and documents (PDF, TXT, DOC, DOCX) with inline thumbnail generation and direct download support (up to 2MB/file, max 10 files).',
        tag: 'Media'
      },
      {
        title: 'Interactive Month Calendar',
        description: 'Month grid view with note indicator dots allowing users to click any specific calendar day to filter and surface notes created on that timestamp.',
        tag: 'Navigation'
      },
      {
        title: 'Tenant Data Isolation & Security',
        description: 'Zero cross-tenant leakage: notes are strictly scoped to authenticated user IDs, shielded by Helmet HTTP headers, express-mongo-sanitize, and rate limiting.',
        tag: 'Security'
      }
    ],
    engineeringHighlights: [
      {
        title: 'Silent Refresh Token Rotation',
        detail: 'Engineered an Axios response interceptor queue that captures expiring 15-minute access tokens, transparently negotiates a new pair using the 7-day refresh token, and replays failed queries without disrupting active user typing.',
        threatOrImpact: 'Seamless UX without sacrificing session revocation security'
      },
      {
        title: 'Dual-Layer HTML Sanitization',
        detail: 'Formatted rich text input is cleansed client-side through DOMPurify to strip malicious scripts prior to network transport, and validated against strict whitelist tags on the Node/Express backend.',
        threatOrImpact: 'Prevents stored Cross-Site Scripting (XSS) via rich text payloads'
      },
      {
        title: 'User Data Isolation Architecture',
        detail: 'All Mongoose database queries enforce userId scoping at the controller and middleware level. No query accepts user identity from request bodies; identity is extracted strictly from the verified JWT payload.',
        threatOrImpact: 'Eliminates insecure direct object reference (IDOR) between users'
      }
    ],
    screenshots: [
      {
        url: '/images/supernotes/homepage.PNG',
        title: 'Note Dashboard & Filtered Grid',
        description: 'Central personal workspace displaying categorized notes, search bar with live filtering, tag badges, and quick creation triggers.',
        category: 'Workspace'
      },
      {
        url: '/images/supernotes/calendarpage.PNG',
        title: 'Interactive Month Calendar View',
        description: 'Month-at-a-glance view displaying daily note density dots, enabling users to jump directly to notes created on specific calendar dates.',
        category: 'Calendar'
      },
      {
        url: '/images/supernotes/notecreationpage.PNG',
        title: 'Rich Text Note Editor & Attachments',
        description: 'WYSIWYG editor with typography controls, highlighting, attachment dropzone, and responsive document formatting.',
        category: 'Editor'
      },
      {
        url: '/images/supernotes/login.PNG',
        title: 'Authentication & Session Entry',
        description: 'JWT authentication portal with input validation, password reveal toggles, and session token provisioning.',
        category: 'Auth'
      },
      {
        url: '/images/supernotes/signup.PNG',
        title: 'Account Registration with Password Meter',
        description: 'User registration featuring client-side password strength metering, regex credential checks, and duplicate username prevention.',
        category: 'Auth'
      }
    ]
  },
  {
    id: 'sandys-movies',
    number: '03',
    title: "Sandy's Movies",
    subtitle: 'Movie discovery & review platform',
    positioning: 'Full-stack movie platform showcasing modern vanilla JavaScript & DOM architecture paired with a modular Express 5 and MongoDB Data Access Object layer.',
    category: 'Core JS Architecture',
    isFlagship: false,
    summary: "Built without relying on frontend frameworks, Sandy's Movies demonstrates an understanding of the web platform's core building blocks: native DOM manipulation, clean asynchronous fetch pipelines, and modular CSS. It connects to the TMDB API for live movie discoveries and pairs with a custom Express 5 and MongoDB Atlas backend via the DAO (Data Access Object) pattern for persistent community reviews.",
    keyTech: ['Vanilla JavaScript', 'HTML5 & CSS3', 'Node.js & Express 5', 'MongoDB Atlas', 'TMDB API', 'DAO Pattern'],
    allTech: [
      {
        category: 'Client Frontend',
        items: ['Vanilla JavaScript (ESNext)', 'HTML5 Semantic Structure', 'Responsive CSS3', 'Fetch API', 'TMDB REST Client']
      },
      {
        category: 'Server Backend',
        items: ['Node.js', 'Express 5', 'MongoDB Atlas Driver', 'DAO Architecture (reviewsDAO.js)', 'CORS & Dotenv']
      }
    ],
    liveUrl: 'https://sandys-movies.vercel.app/',
    repositoryUrl: 'https://github.com/Sandy-YP-Holley/Sandys-Movies',
    deploymentStatus: {
      type: 'frontend_only',
      badge: 'Frontend Demo Live · Backend Offline',
      note: 'Frontend discovery interface is live on Vercel with TMDB integration. The custom Express review backend is currently offline.'
    },
    metrics: [
      { label: 'Framework Overhead', value: '0 KB', detail: 'Built entirely on native browser APIs without React/Vue bundles' },
      { label: 'External Catalog', value: 'TMDB API', detail: 'Real-time trending feeds, search endpoints, and movie metadata' },
      { label: 'Backend Layer', value: 'Express 5', detail: 'Modern Express 5 routing with native Promise handling' },
      { label: 'Data Architecture', value: 'DAO Pattern', detail: 'Modular decoupling between HTTP controllers and MongoDB queries' }
    ],
    features: [
      {
        title: 'Live TMDB Catalog Discovery',
        description: 'Fetches trending movies, poster imagery, synopses, release dates, and vote averages directly from The Movie Database REST API.',
        tag: 'Discovery'
      },
      {
        title: 'Instant Client-Side Title Search',
        description: 'Asynchronous search bar querying movie titles on demand, updating the native DOM grid dynamically with loading and empty state handling.',
        tag: 'Search'
      },
      {
        title: 'Dedicated Movie Detail Pages',
        description: 'Dedicated single-movie view pulling runtime, genre tags, storyline summaries, and linking directly into persistent review threads.',
        tag: 'Details'
      },
      {
        title: 'Full CRUD Review Architecture',
        description: 'Complete review lifecycle support: create, read, edit, and delete movie reviews persisted in MongoDB collections via RESTful endpoints.',
        tag: 'Backend'
      }
    ],
    engineeringHighlights: [
      {
        title: 'Zero-Framework Frontend Architecture',
        detail: 'Engineered entirely in vanilla JavaScript to maintain complete control over DOM reconciliation, lifecycle events, and minimal network payload without the overhead of heavy single-page application runtime libraries.',
        threatOrImpact: 'Demonstrates deep mastery of fundamental web standards'
      },
      {
        title: 'Data Access Object (DAO) Pattern',
        detail: 'Decoupled database transactions into a standalone reviewsDAO.js layer using the official MongoDB driver. Controllers handle HTTP validation while DAO manages connection pooling and ObjectId casting.',
        threatOrImpact: 'Clean separation of concerns enabling seamless database swapping'
      }
    ],
    screenshots: [
      {
        url: '/images/sandysmovies/homepage.PNG',
        title: 'Popular Movies Showcase',
        description: 'Dynamic poster grid rendered in vanilla JavaScript showing currently trending films fetched directly from TMDB.',
        category: 'Discovery'
      },
      {
        url: '/images/sandysmovies/searchresult.PNG',
        title: 'Instant Dynamic Search Results',
        description: 'Responsive search results view filtering cinematic records by query terms with seamless DOM updates.',
        category: 'Search'
      },
      {
        url: '/images/sandysmovies/reviewpage.PNG',
        title: 'Movie Details & Community Reviews',
        description: 'Individual movie page displaying detailed synopsis, poster art, and the interactive review creation and editing interface.',
        category: 'Reviews'
      }
    ]
  },
  {
    id: 'baggage-detection',
    number: '04',
    title: 'Baggage Detection — YOLOv8 vs YOLO11',
    subtitle: 'Computer vision research & model comparison',
    positioning: 'Undergraduate computer vision research project at Gunadarma University comparing two generations of YOLO architectures across a 963-image baggage dataset.',
    category: 'Computer Vision Research',
    isFlagship: false,
    summary: 'An empirical machine learning study developed as an undergraduate research project at Universitas Gunadarma. The project evaluates and benchmarks YOLOv8 against the newer YOLO11 architecture for detecting backpacks and luggage. The models were evaluated on both a baseline 200-image dataset and an expanded 963-image dataset to measure the concrete impact of dataset scaling on precision, recall, mAP50, and latency.',
    keyTech: ['Python', 'Ultralytics YOLO', 'PyTorch', 'OpenCV', 'Flask', 'Computer Vision'],
    allTech: [
      {
        category: 'Machine Learning & Vision',
        items: ['Ultralytics YOLOv8', 'Ultralytics YOLO11', 'PyTorch', 'OpenCV', 'Custom Backpack & Luggage Dataset']
      },
      {
        category: 'Interface & Serving',
        items: ['Python', 'Flask Web Interface', 'HTML5 & CSS3', 'Jupyter Notebooks']
      },
      {
        category: 'Evaluation Metrics',
        items: ['Precision (P)', 'Recall (R)', 'mAP50', 'Inference Latency (ms)', 'Confusion Matrix Analysis']
      }
    ],
    repositoryUrl: 'https://github.com/Sandy-YP-Holley/backpack-detection',
    deploymentStatus: {
      type: 'research_repo',
      badge: 'Research Repository',
      note: 'Source code, training weights (best_yolov8_final.pt, best_yolov11_final.pt), and notebooks published on GitHub.'
    },
    metrics: [
      { label: 'YOLOv8 Precision', value: '99.5%', detail: 'On 963-image dataset with ~3.6 ms inference speed' },
      { label: 'YOLO11 mAP50', value: '99.4%', detail: 'Superior localization score on expanded dataset' },
      { label: 'Dataset Scaling', value: '+45% mAP', detail: 'Jump from 54.8% mAP50 (200 imgs) to >99% (963 imgs)' },
      { label: 'Detection Accuracy', value: '>99%', detail: 'Both architectures exceeded 99% accuracy after fine-tuning' }
    ],
    features: [
      {
        title: 'Dual-Class Object Detection',
        description: 'Trained model weights specifically optimized to isolate, segment, and detect backpacks and luggage across diverse lighting conditions and occlusion angles.',
        tag: 'Vision'
      },
      {
        title: 'Side-by-Side Model Benchmarking',
        description: 'Interactive comparison matrix allowing simultaneous evaluation of YOLOv8 and YOLO11 inference outputs on identical test images.',
        tag: 'Evaluation'
      },
      {
        title: 'Flask Web Inference Interface',
        description: 'Lightweight web GUI enabling real-time image upload, bounding box visualization, confidence threshold adjustment, and inference latency logging.',
        tag: 'Deployment'
      },
      {
        title: 'Comprehensive Training Metrics & Confusion Matrices',
        description: 'Full evaluation pipeline tracking training loss curves, precision-recall trade-offs, and confusion matrix distribution between background and baggage classes.',
        tag: 'Metrics'
      }
    ],
    engineeringHighlights: [
      {
        title: 'Dataset Scaling Impact Analysis',
        detail: 'Demonstrated empirically that expanding the dataset from 200 images to 963 images drove a dramatic accuracy surge — moving YOLOv8 from 54.8% mAP50 to 99.0% mAP50, and YOLO11 from 51.4% mAP50 to 99.4% mAP50.',
        threatOrImpact: 'Proves high return-on-investment of targeted dataset curation over raw hyperparameter tuning'
      },
      {
        title: 'Architecture Trade-Off Analysis',
        detail: 'Analysis revealed distinct engineering trade-offs: YOLOv8 achieved slightly higher precision (99.5% vs 98.5%) and ~30% faster inference latency (~3.6ms vs ~5.2ms), while YOLO11 delivered higher mAP50 (99.4% vs 99.0%), indicating more consistent bounding box localization.',
        threatOrImpact: 'Guides deployment selection based on edge hardware vs localization priority'
      }
    ],
    researchData: {
      datasetDescription: 'Comparative performance across initial 200-image baseline and final expanded 963-image dataset with PyTorch / Ultralytics pipeline.',
      metrics: [
        {
          model: 'YOLOv8',
          dataset: '200 Images',
          precision: '65.6%',
          recall: '47.6%',
          map50: '54.8%',
          inference: '~3.2 ms'
        },
        {
          model: 'YOLO11',
          dataset: '200 Images',
          precision: '71.1%',
          recall: '42.7%',
          map50: '51.4%',
          inference: '~4.1 ms'
        },
        {
          model: 'YOLOv8',
          dataset: '963 Images',
          precision: '99.5%',
          recall: '99.9%',
          map50: '99.0%',
          inference: '~3.6 ms'
        },
        {
          model: 'YOLO11',
          dataset: '963 Images',
          precision: '98.5%',
          recall: '99.8%',
          map50: '99.4%',
          inference: '~5.2 ms'
        }
      ],
      keyFindings: [
        'Expanding the training dataset from 200 to 963 images yielded the single largest performance jump across both architectures (+44.2% mAP for YOLOv8, +48.0% mAP for YOLO11).',
        'YOLOv8 achieved slightly better precision (99.5%) and faster inference throughput (~3.6 ms), making it the optimal choice for real-time edge or security screening applications.',
        'YOLO11 achieved higher mAP50 (99.4%), demonstrating tighter bounding box regression and superior spatial overlap consistency.',
        'Both models exceeded 99% overall detection accuracy following targeted fine-tuning on domain-specific baggage imagery.'
      ]
    },
    screenshots: [
      {
        url: '/images/backpackdetection/flaskhomepage.PNG',
        title: 'Flask Web Inference Portal',
        description: 'Lightweight web interface for uploading test images, adjusting confidence thresholds, and triggering side-by-side model predictions.',
        category: 'Interface'
      },
      {
        url: '/images/backpackdetection/testresult.PNG',
        title: 'Model Detection & Inference Output',
        description: 'Comparative bounding box outputs and confidence scores detecting backpacks and luggage with latency measurements.',
        category: 'Inference'
      },
      {
        url: '/images/backpackdetection/results.PNG',
        title: 'Training Performance & Confusion Matrices',
        description: 'Comprehensive evaluation charts comparing loss progression, precision-recall curves, and mAP metrics between YOLOv8 and YOLO11.',
        category: 'Evaluation'
      }
    ]
  }
];
