'use client';

import { useEffect, useRef } from 'react';

const leftStack = ['React · Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST / WS'];
const rightStack = [
  'Node.js · Express',
  'PostgreSQL',
  'Prisma ORM',
  'Redis · Queues',
  'Docker · AWS',
];

export default function SVGLines() {
  const svgRef = useRef<SVGSVGElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function draw() {
      const svg = svgRef.current;
      const center = centerRef.current;
      if (!svg || !center) return;

      svg.innerHTML = '';
      const cRect = center.getBoundingClientRect();
      const cx = cRect.width / 2;
      const cy = cRect.height / 2;

      const leftChips = leftRef.current?.querySelectorAll('[data-chip]') ?? [];
      const rightChips = rightRef.current?.querySelectorAll('[data-chip]') ?? [];

      function addLine(el: Element, side: 'left' | 'right') {
        const r = el.getBoundingClientRect();
        const chipCY = r.top - cRect.top + r.height / 2;
        const chipX = side === 'left' ? cRect.width : 0;
        const mx = (chipX + cx) / 2;
        const d = `M ${chipX} ${chipCY} C ${mx} ${chipCY} ${mx} ${cy} ${cx} ${cy}`;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#d1d5db');
        path.setAttribute('stroke-width', '0.8');
        svg?.appendChild(path);
      }

      leftChips.forEach((c) => addLine(c, 'left'));
      rightChips.forEach((c) => addLine(c, 'right'));
    }

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  const chipClass = (highlight: boolean) =>
    `text-[11px] font-medium px-3 py-1 rounded-full border whitespace-nowrap ${
      highlight
        ? 'bg-white border-gray-200 text-gray-800'
        : 'bg-gray-50 border-gray-100 text-gray-400'
    }`;

  return (
    <div className="flex items-center gap-0 py-2">
      <div ref={leftRef} className="flex flex-1 flex-col items-end gap-2.5">
        {leftStack.map((t, i) => (
          <span key={t} data-chip className={chipClass(i < 3)}>
            {t}
          </span>
        ))}
      </div>

      <div ref={centerRef} className="relative flex w-28 flex-shrink-0 items-center justify-center">
        <svg
          ref={svgRef}
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        />
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.5"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
          <span className="text-center text-[10px] leading-tight text-gray-400">
            Full
            <br />
            Stack
          </span>
        </div>
      </div>

      <div ref={rightRef} className="flex flex-1 flex-col items-start gap-2.5">
        {rightStack.map((t, i) => (
          <span key={t} data-chip className={chipClass(i < 3)}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
