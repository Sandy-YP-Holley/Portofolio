import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Copy',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-label={`Copy ${textToCopy}`}
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase px-3 py-1.5 border border-white/15 hover:border-archival-ochre hover:text-archival-ochre text-parchment-300 transition-colors duration-200 bg-ink-900/80 ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-signal-emerald" />
          <span className="text-signal-emerald">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
