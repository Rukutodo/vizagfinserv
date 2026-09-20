"use client";

import { useState } from "react";
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

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflationRate, setInflationRate] = useState(6);
  const [preRate, setPreRate] = useState(12);
  const [postRate, setPostRate] = useState(8);
  const lifeExpectancy = 85;

  // Calculations
  const Y = Math.max(0, retirementAge - currentAge);
  const R = Math.max(0, lifeExpectancy - retirementAge);

  // Monthly expense at retirement
  const F = monthlyExpense * Math.pow(1 + inflationRate / 100, Y);

  // Real rate of return post retirement
  const post_monthly = Math.pow(1 + postRate / 100, 1 / 12) - 1;
  const inf_monthly = Math.pow(1 + inflationRate / 100, 1 / 12) - 1;
  const real_rate = (1 + post_monthly) / (1 + inf_monthly) - 1;

  // Total corpus needed
  const months_R = R * 12;
  let corpus = 0;
  if (real_rate > 0) {
    corpus = F * ((1 - Math.pow(1 + real_rate, -months_R)) / real_rate);
  } else {
    corpus = F * months_R;
  }

  // Monthly SIP required
  const pre_monthly = Math.pow(1 + preRate / 100, 1 / 12) - 1;
  const months_pre = Y * 12;
  let monthlySip = 0;
  if (pre_monthly > 0 && months_pre > 0) {
    monthlySip =
      corpus / (((Math.pow(1 + pre_monthly, months_pre) - 1) / pre_monthly) * (1 + pre_monthly));
  } else if (months_pre > 0) {
    monthlySip = corpus / months_pre;
  }

  // Handle Edge Cases
  if (Y <= 0) monthlySip = 0;
  if (R <= 0) corpus = 0;

  // Split the corpus into what you contribute vs. what growth adds
  const totalContributed = monthlySip * months_pre;
  const contributedPct = totalContributed / (corpus || 1);

  const handleCurrentAge = (value: number) => {
    setCurrentAge(value);
    if (value >= retirementAge) setRetirementAge(value + 1);
  };

  return (
    <CalculatorCard>
      <CalculatorInputs>
        <SliderField
          label="Current Age"
          value={currentAge}
          onChange={handleCurrentAge}
          min={18}
          max={60}
          suffix="Yr"
        />
        <SliderField
          label="Retirement Age"
          value={retirementAge}
          onChange={(value) => setRetirementAge(Math.max(value, currentAge + 1))}
          min={40}
          max={75}
          suffix="Yr"
        />
        <SliderField
          label="Current Monthly Expense"
          value={monthlyExpense}
          onChange={setMonthlyExpense}
          min={5000}
          max={1000000}
          step={1000}
          currency
        />
        <SliderField
          label="Inflation Rate (p.a)"
          value={inflationRate}
          onChange={setInflationRate}
          min={1}
          max={15}
          step={0.5}
          suffix="%"
        />
        <SliderField
          label="Pre-retirement Return (p.a)"
          value={preRate}
          onChange={setPreRate}
          min={5}
          max={30}
          step={0.5}
          suffix="%"
        />
        <SliderField
          label="Post-retirement Return (p.a)"
          value={postRate}
          onChange={setPostRate}
          min={4}
          max={20}
          step={0.5}
          suffix="%"
        />

        <CalculatorResults>
          <ResultRow label="Years to Invest" value={`${Y} years`} />
          <ResultRow label={`Monthly Expense at ${retirementAge}`} value={formatCurrency(F)} />
          <ResultRow label={`Corpus Needed at ${retirementAge}`} value={formatCurrency(corpus)} />
          <ResultTotal label="Monthly SIP Required" value={formatCurrency(monthlySip)} />
          <CalculatorCta>Plan My Retirement</CalculatorCta>
        </CalculatorResults>
      </CalculatorInputs>

      <CalculatorVisual>
        <CalculatorDonut
          caption={`Corpus Needed at ${retirementAge}`}
          value={formatCurrency(corpus)}
          percent={contributedPct}
          legend={["Your Investment", "Growth"]}
          note={`${R} years of retirement income`}
        />
      </CalculatorVisual>
    </CalculatorCard>
  );
}
