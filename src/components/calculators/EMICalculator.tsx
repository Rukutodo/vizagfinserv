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

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const p = loanAmount;
  const r = interestRate / 12 / 100;
  const n = loanTenure * 12;

  let emi = 0;
  if (r > 0) {
    emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  } else {
    emi = p / n;
  }

  const totalPayable = emi * n;
  const totalInterest = totalPayable - p;
  const principalPct = p / (totalPayable || 1);

  return (
    <CalculatorCard>
      <CalculatorInputs>
        <SliderField
          label="Loan Amount"
          value={loanAmount}
          onChange={setLoanAmount}
          min={10000}
          max={100000000}
          step={10000}
          currency
        />
        <SliderField
          label="Interest Rate (p.a)"
          value={interestRate}
          onChange={setInterestRate}
          min={1}
          max={30}
          step={0.1}
          suffix="%"
        />
        <SliderField
          label="Loan Tenure"
          value={loanTenure}
          onChange={setLoanTenure}
          min={1}
          max={30}
          suffix="Yr"
        />

        <CalculatorResults>
          <ResultRow label="Principal Amount" value={formatCurrency(p)} />
          <ResultRow label="Total Interest" value={formatCurrency(totalInterest)} />
          <ResultTotal label="Total Amount Payable" value={formatCurrency(totalPayable)} />
          <CalculatorCta>Apply Now</CalculatorCta>
        </CalculatorResults>
      </CalculatorInputs>

      <CalculatorVisual>
        <CalculatorDonut
          caption="Monthly EMI"
          value={formatCurrency(emi)}
          percent={principalPct}
          legend={["Principal", "Interest"]}
        />
      </CalculatorVisual>
    </CalculatorCard>
  );
}
