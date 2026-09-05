import React, { useState } from 'react';
import { Cpu, Zap, Target, BarChart2, Layers } from 'lucide-react';
import { ResearchModelMetric } from '../../types';

interface ResearchBenchmarkProps {
  metrics: ResearchModelMetric[];
  findings: string[];
}

export const ResearchBenchmark: React.FC<ResearchBenchmarkProps> = ({ findings }) => {
  const [selectedDataset, setSelectedDataset] = useState<'963 Images' | '200 Images'>('963 Images');

  const datasetData = {
    '963 Images': {
      yolov8: { precision: 99.5, recall: 99.9, map50: 99.0, inference: 3.6 },
      yolo11: { precision: 98.5, recall: 99.8, map50: 99.4, inference: 5.2 },
      note: 'Final expanded dataset after domain-specific data curation and augmentation.',
    },
    '200 Images': {
      yolov8: { precision: 65.6, recall: 47.6, map50: 54.8, inference: 3.2 },
      yolo11: { precision: 71.1, recall: 42.7, map50: 51.4, inference: 4.1 },
      note: 'Initial baseline dataset demonstrating severe underfitting prior to dataset expansion.',
    },
  };

  const currentData = datasetData[selectedDataset];

  return (
    <div className="w-full my-4 bg-dark-950/80 rounded-2xl border border-white/10 p-5 sm:p-6 font-sans">
      {/* Header & Dataset Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-nest-400 text-xs font-mono font-bold uppercase mb-1">
            <BarChart2 className="w-4 h-4" />
            <span>Undergraduate CV Research Benchmark</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Backpacks & Luggage Detection under Gunadarma University Protocol
          </p>
        </div>

        {/* Dataset selector pills */}
        <div className="flex items-center bg-dark-900 border border-white/10 rounded-full p-1 self-start sm:self-auto font-mono text-xs">
          <button
            type="button"
            onClick={() => setSelectedDataset('963 Images')}
            className={`px-3 py-1 rounded-full transition-colors ${
              selectedDataset === '963 Images'
                ? 'bg-nest-500 text-white font-bold shadow-md shadow-nest-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            963 Images (Expanded)
          </button>
          <button
            type="button"
            onClick={() => setSelectedDataset('200 Images')}
            className={`px-3 py-1 rounded-full transition-colors ${
              selectedDataset === '200 Images'
                ? 'bg-nest-500 text-white font-bold shadow-md shadow-nest-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            200 Images (Baseline)
          </button>
        </div>
      </div>

      <div className="text-xs text-slate-400 py-2 border-b border-white/5 font-mono">
        <span className="text-nest-400 font-semibold">Active Sample:</span> {currentData.note}
      </div>

      {/* Side-by-Side Model Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        
        {/* YOLOv8 Card */}
        <div className="rounded-2xl border border-white/10 bg-dark-900/60 p-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-nest-400" />
              <span className="text-white font-bold text-sm">Ultralytics YOLOv8</span>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Optimal Latency (~3.6 ms)
            </span>
          </div>

          <div className="space-y-3 pt-4 text-xs font-mono">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Precision (P):</span>
                <span className="font-bold text-nest-400">{currentData.yolov8.precision}%</span>
              </div>
              <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-nest-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${currentData.yolov8.precision}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Recall (R):</span>
                <span className="font-bold text-slate-200">{currentData.yolov8.recall}%</span>
              </div>
              <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-slate-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${currentData.yolov8.recall}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>mAP@50 Metric:</span>
                <span className="font-bold text-emerald-400">{currentData.yolov8.map50}%</span>
              </div>
              <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${currentData.yolov8.map50}%` }}
                />
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Inference Speed:</span>
              </span>
              <span className="text-emerald-400 font-bold">~{currentData.yolov8.inference} ms</span>
            </div>
          </div>
        </div>

        {/* YOLO11 Card */}
        <div className="rounded-2xl border border-white/10 bg-dark-900/60 p-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">Ultralytics YOLO11</span>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold bg-nest-500/15 text-nest-300 border border-nest-500/30">
              Top mAP50 Score (99.4%)
            </span>
          </div>

          <div className="space-y-3 pt-4 text-xs font-mono">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Precision (P):</span>
                <span className="font-bold text-nest-400">{currentData.yolo11.precision}%</span>
              </div>
              <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-nest-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${currentData.yolo11.precision}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Recall (R):</span>
                <span className="font-bold text-slate-200">{currentData.yolo11.recall}%</span>
              </div>
              <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-slate-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${currentData.yolo11.recall}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>mAP@50 Metric:</span>
                <span className="font-bold text-emerald-400">{currentData.yolo11.map50}%</span>
              </div>
              <div className="w-full bg-dark-950 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${currentData.yolo11.map50}%` }}
                />
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Inference Speed:</span>
              </span>
              <span className="text-slate-300 font-bold">~{currentData.yolo11.inference} ms</span>
            </div>
          </div>
        </div>

      </div>

      {/* Findings */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase mb-2">
          <Target className="w-3.5 h-3.5 text-nest-400" />
          <span>Key Research Findings</span>
        </div>
        <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
          {findings.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-nest-400 font-bold">•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
