'use client';

import { useState } from 'react';
import { contributions } from '@/utils/contributions';

export default function Contributions() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mb-12">
      <h2 className="mb-1 text-lg font-semibold">Contributions #</h2>
      <p className="mb-6 text-sm text-gray-500">
        Merged pull requests across personal and open source projects.
      </p>
      <div className="flex flex-col gap-3">
        {contributions.map((pr, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-gray-100 bg-white">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50"
            >
              <div className="flex min-w-0 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[11px] font-medium text-purple-700">
                    merged
                  </span>
                  {pr.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="truncate text-sm font-medium text-gray-800">{pr.title}</span>
                <span className="text-xs text-gray-400">
                  {pr.repo} · {pr.date} · {pr.commits} commits
                </span>
                <span className="mt-0.5 text-xs text-gray-500">{pr.oneliner}</span>
              </div>
              <span className="mt-1 shrink-0 text-sm text-gray-400">
                {expanded === i ? '↑' : '↓'}
              </span>
            </button>

            {expanded === i && (
              <div className="border-t border-gray-100 px-5 pb-4">
                <p className="mt-3 mb-4 text-sm leading-relaxed text-gray-600">{pr.what}</p>
                <a
                  href={pr.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100"
                >
                  ↗ View PR on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
