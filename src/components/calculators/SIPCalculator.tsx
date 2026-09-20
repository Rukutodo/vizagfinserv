"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  CalculatorCard,
  CalculatorCta,
  CalculatorDonut,
  CalculatorInputs,
  CalculatorResults,
  CalculatorVisual,
  ResultRow,
  ResultTotal,
  SliderField,
  formatCurrency,
} from "./shared";

export default function SIPCalculator({
  defaultTab = "SIP",
  hideToggle = false,
}: {
  defaultTab?: "SIP" | "Lumpsum";
  hideToggle?: boolean;
}) {
  void hideToggle;
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"SIP" | "Lumpsum">(defaultTab);

  // Sync tab with URL search parameter
  useEffect(() => {
    const tabParam = searchParams.get("tab")?.toLowerCase();
    if (tabParam === "lumpsum") {
      setActiveTab("Lumpsum");
    } else if (tabParam === "sip") {
      setActiveTab("SIP");
    }
  }, [searchParams]);

  // SIP State
  const [sipInvestment, setSipInvestment] = useState(25000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // Lumpsum State
  const [lumpInvestment, setLumpInvestment] = useState(2500000);
  const [lumpRate, setLumpRate] = useState(12);
  const [lumpYears, setLumpYears] = useState(10);

  const isSip = activeTab === "SIP";

  // Current active values
  const investment = isSip ? sipInvestment : lumpInvestment;
  const setInvestment = isSip ? setSipInvestment : setLumpInvestment;
  const investMin = 500;
  const investMax = isSip ? 100000 : 10000000;
  const investStep = isSip ? 500 : 10000;

  const rate = isSip ? sipRate : lumpRate;
  const setRate = isSip ? setSipRate : setLumpRate;

  const years = isSip ? sipYears : lumpYears;
  const setYears = isSip ? setSipYears : setLumpYears;

  // Inline synchronous calculations for real-time responsiveness
  const investedAmount = isSip ? sipInvestment * sipYears * 12 : lumpInvestment;

  let totalValue = 0;
  if (isSip) {
    const i = Math.pow(1 + sipRate / 100, 1 / 12) - 1;
    const n = sipYears * 12;
    if (i > 0) {
      totalValue = Math.round(sipInvestment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    } else {
      totalValue = investedAmount;
    }
  } else {
    totalValue = Math.round(lumpInvestment * Math.pow(1 + lumpRate / 100, lumpYears));
  }

  const estReturns = Math.round(totalValue - investedAmount);
  const investedPct = investedAmount / (totalValue || 1);

  return (
    <CalculatorCard>
      <CalculatorInputs>
        <SliderField
          label={isSip ? "Monthly Investment" : "Total Investment"}
          value={investment}
          onChange={setInvestment}
          min={investMin}
          max={investMax}
          step={investStep}
          currency
        />
        <SliderField
          label="Expected Return Rate (p.a)"
          value={rate}
          onChange={setRate}
          min={1}
          max={30}
          step={0.1}
          suffix="%"
        />
        <SliderField
          label="Time Period"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
          suffix="Yr"
        />

        <CalculatorResults>
          <ResultRow label="Invested Amount" value={formatCurrency(investedAmount)} />
          <ResultRow label="Estimated Returns" value={formatCurrency(estReturns)} />
          <ResultTotal label="Total Value" value={formatCurrency(totalValue)} />
          <CalculatorCta>Start Investing</CalculatorCta>
        </CalculatorResults>
      </CalculatorInputs>

      <CalculatorVisual>
        <CalculatorDonut
          caption="Expected Corpus"
          value={formatCurrency(totalValue)}
          percent={investedPct}
          legend={["Invested", "Returns"]}
        />
      </CalculatorVisual>
    </CalculatorCard>
  );
}
