"use client";

import { useEffect, type ReactNode } from "react";
import Button from "@/components/ui/Button";

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatIndian = (value: number) => {
  return new Intl.NumberFormat("en-IN").format(value);
};

// brand-900 — the same blue as the active tab pill on /calculators
const SLIDER_FILL = "#0F2A4A";
const SLIDER_TRACK = "#E2E8F0";
const DONUT_FILL = "#0F2A4A";
const DONUT_REST = "#2563A0"; // brand-600

// Single injection point for the slider thumb / number input styles every
// calculator shares. Previously each calculator shipped its own near-identical copy.
function useCalculatorStyles() {
  useEffect(() => {
    const styleId = "calc-shared-styles";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .calc-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: ${SLIDER_FILL}; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
      .calc-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: ${SLIDER_FILL}; border: 4px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; border: none; }
      .calc-slider::-moz-range-track { height: 8px; border-radius: 4px; }
      .calc-num-input::-webkit-outer-spin-button, .calc-num-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
      .calc-num-input[type=number] { -moz-appearance: textfield; }
    `;
    document.head.appendChild(style);
  }, []);
}

export function CalculatorCard({ children }: { children: ReactNode }) {
  useCalculatorStyles();
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/60 max-w-5xl mx-auto">
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">{children}</div>
    </div>
  );
}

export function CalculatorInputs({ children }: { children: ReactNode }) {
  return <div className="lg:col-span-7 space-y-8">{children}</div>;
}

export function CalculatorVisual({ children }: { children: ReactNode }) {
  return (
    <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">{children}</div>
  );
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

interface SliderFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  /** Renders a ₹ prefix and Indian-grouped text input instead of a number input. */
  currency?: boolean;
  /** Unit shown after the value, e.g. "%" or "Yr". */
  suffix?: string;
}

export function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  currency = false,
  suffix,
}: SliderFieldProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center gap-3">
        <label className="text-neutral-600 font-medium">{label}</label>
        <div
          className={`bg-brand-50 flex items-center px-4 py-2 rounded-lg border border-brand-100 ${
            currency ? "min-w-[10rem]" : "w-28"
          }`}
        >
          {currency && <span className="text-brand-900 font-semibold mr-1">₹</span>}
          {currency ? (
            <input
              type="text"
              inputMode="numeric"
              value={formatIndian(value)}
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9]/g, "");
                const num = parseInt(raw, 10);
                onChange(isNaN(num) ? min : Math.min(num, max));
              }}
              className="bg-transparent outline-none text-brand-900 font-semibold w-full text-right"
            />
          ) : (
            <input
              type="number"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={(e) => onChange(clamp(Number(e.target.value), min, max))}
              className="calc-num-input bg-transparent outline-none text-brand-900 font-semibold w-full text-right"
            />
          )}
          {suffix && <span className="text-brand-900 font-semibold ml-1">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${SLIDER_FILL} ${pct}%, ${SLIDER_TRACK} ${pct}%)`,
        }}
      />
    </div>
  );
}

export function CalculatorResults({ children }: { children: ReactNode }) {
  return <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">{children}</div>;
}

export function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center gap-3">
      <span className="text-neutral-500">{label}</span>
      <span className="font-semibold text-neutral-800">{value}</span>
    </div>
  );
}

export function ResultTotal({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center gap-3 pt-2 border-t border-neutral-100">
      <span className="text-neutral-800 font-medium text-lg">{label}</span>
      <span className="font-bold text-xl text-gold-500">{value}</span>
    </div>
  );
}

export function CalculatorCta({ children, href = "/contact" }: { children: ReactNode; href?: string }) {
  return (
    <div className="pt-4">
      <Button href={href} className="w-full justify-center" size="lg">
        {children}
      </Button>
    </div>
  );
}

interface DonutProps {
  /** Small uppercase caption inside the ring. */
  caption: string;
  /** Headline value inside the ring. */
  value: string;
  /** Share of the ring drawn in the accent colour, 0–1. */
  percent: number;
  /** [accent legend, remainder legend] */
  legend: [string, string];
  /** Optional line under the legend. */
  note?: string;
}

export function CalculatorDonut({ caption, value, percent, legend, note }: DonutProps) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - clamp(percent, 0, 1));

  return (
    <>
      <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8">
        <svg width="100%" height="100%" viewBox="0 0 200 200" className="transform -rotate-90">
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="transparent"
            stroke={DONUT_REST}
            strokeWidth="30"
            className="transition-all duration-150 ease-out"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="transparent"
            stroke={DONUT_FILL}
            strokeWidth="30"
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
            strokeLinecap="butt"
            className="transition-all duration-150 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[10px] text-neutral-400 uppercase tracking-[0.15em] font-semibold mb-1">
            {caption}
          </span>
          <span className="text-lg md:text-xl font-bold text-gold-500">{value}</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: DONUT_FILL }} />
          <span className="text-sm text-neutral-600">{legend[0]}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: DONUT_REST }} />
          <span className="text-sm text-neutral-600">{legend[1]}</span>
        </div>
      </div>

      {note && <p className="mt-4 text-sm text-neutral-500 text-center">{note}</p>}
    </>
  );
}
