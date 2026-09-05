import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, CheckCircle2, Cpu, Copy, Check } from 'lucide-react';

export const ArchitectureTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cache' | 'rbac' | 'tests' | 'vision'>('cache');
  const [copied, setCopied] = useState(false);

  const snippets = {
    cache: `// Serverless MongoDB Connection Caching (Atlas M0 Free Tier)
// Prevents connection storming across warm Next.js lambda invocations
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = { maxPoolSize: 10, serverSelectionTimeoutMS: 5000 };

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export const clientPromise: Promise<MongoClient> =
  global._mongoClientPromise ??= new MongoClient(uri, options).connect();`,

    rbac: `// Anti-BOLA & Anti-IDOR Route Security Guard
// Enforces cryptographic JWT claim verification against resource ownership
export async function verifyArchivistOwnership(req: NextRequest, folioId: string) {
  const token = await verifyJoseJWT(req.cookies.get('cq_session')?.value);
  if (!token || token.role !== 'ARCHIVIST') {
    return NextResponse.json({ error: 'FORBIDDEN_ROLE' }, { status: 403 });
  }

  const book = await db.collection('books').findOne({ _id: folioId });
  if (book.archivistId !== token.sub) {
    return NextResponse.json({ error: 'BOLA_VIOLATION_BLOCKED' }, { status: 403 });
  }
  return true;
}`,

    tests: `========================================================================
CHRONICLE & QUILL — AUTOMATED VERIFICATION MATRIX
========================================================================
✔ Vitest Business Rules & Unit Tests ......... 30 / 30 Passed (100%)
✔ Full-Stack TSX Regression & API Suite ..... 116 / 116 Passed (100%)
✔ Playwright Cross-Viewport & Axe E2E ........ 26 / 26 Passed (100%)
------------------------------------------------------------------------
TOTAL VERIFIED AUTOMATED TEST SUITE:        172 / 172 Passed (100%)
MANUAL TEST CASES DOCUMENTED & VERIFIED:      90 / 90 Passed (100%)
AUTOMATED WCAG 2.1 AA VIOLATIONS:              0 Violations (Clean)
STRICT TYPESCRIPT (tsc --noEmit):              0 Errors
PRODUCTION ROUTES COMPILED:                   48 Routes (Turbopack)
GITHUB ACTIONS CI WORKFLOW:                    ALL GREEN (100% Passing)
========================================================================`,

    vision: `// YOLOv8 vs YOLO11 Computer Vision Benchmark (Gunadarma Univ)
// Comparative Performance on 963-Image Baggage Dataset
const benchmarkResults = {
  YOLOv8: {
    precision: '99.5%',
    recall: '99.9%',
    map50: '99.0%',
    inferenceLatency: '3.6 ms', // Optimal Edge Latency
    edgeOptimized: true
  },
  YOLO11: {
    precision: '98.5%',
    recall: '99.8%',
    map50: '99.4%', // Superior Localization
    inferenceLatency: '5.2 ms',
    localizationOptimized: true
  }
};`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-nest-400 bg-nest-500/10 border border-nest-500/20 mb-3">
          ARCHITECTURE & SPECIFICATIONS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          System Implementations
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mt-2">
          Inspect production code implementations from Chronicle & Quill and machine learning models.
        </p>
      </motion.div>

      {/* Terminal Window with Scroll Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-white/10 bg-dark-900 shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-dark-950 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2 font-mono text-xs text-slate-300 hidden sm:inline">
              ~/sandy-holley/architecture-spec.ts
            </span>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <button
              onClick={() => setActiveTab('cache')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'cache'
                  ? 'bg-nest-500 text-white font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Connection Pooling</span>
            </button>

            <button
              onClick={() => setActiveTab('rbac')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'rbac'
                  ? 'bg-nest-500 text-white font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Anti-BOLA Guard</span>
            </button>

            <button
              onClick={() => setActiveTab('tests')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'tests'
                  ? 'bg-emerald-500 text-white font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>172 Tests Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'vision'
                  ? 'bg-nest-500 text-white font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>YOLO Benchmark</span>
            </button>
          </div>

          <button
            onClick={copyCode}
            type="button"
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 border border-white/10"
            aria-label="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm text-slate-100 leading-relaxed bg-dark-950">
          <pre className="whitespace-pre">
            <code>{snippets[activeTab]}</code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
};
