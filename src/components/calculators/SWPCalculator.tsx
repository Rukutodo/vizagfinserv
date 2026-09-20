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

export default function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(1000000);
  const [withdrawalAmount, setWithdrawalAmount] = useState(10000);
  const [expectedRate, setExpectedRate] = useState(8);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const monthlyRate = Math.pow(1 + expectedRate / 100, 1 / 12) - 1;

  let balance = totalInvestment;
  let totalWithdrawn = 0;

  for (let m = 1; m <= months; m++) {
    const prevBalance = balance;
    balance = (prevBalance - withdrawalAmount) * (1 + monthlyRate);
    if (balance <= 0) {
      totalWithdrawn += prevBalance;
      balance = 0;
      break;
    }
    totalWithdrawn += withdrawalAmount;
  }

  balance = Math.max(0, Math.round(balance));
  totalWithdrawn = Math.round(totalWithdrawn);

  const withdrawnPct = totalWithdrawn / (totalWithdrawn + balance || 1);

  return (
    <CalculatorCard>
      <CalculatorInputs>
        <SliderField
          label="Total Investment"
          value={totalInvestment}
          onChange={setTotalInvestment}
          min={10000}
          max={100000000}
          step={10000}
          currency
        />
        <SliderField
          label="Monthly Withdrawal"
          value={withdrawalAmount}
          onChange={setWithdrawalAmount}
          min={500}
          max={1000000}
          step={500}
          currency
        />
        <SliderField
          label="Expected Return Rate (p.a)"
          value={expectedRate}
          onChange={setExpectedRate}
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
          <ResultRow label="Total Invested" value={formatCurrency(totalInvestment)} />
          <ResultRow label="Total Withdrawal" value={formatCurrency(totalWithdrawn)} />
          <ResultTotal label="Final Balance" value={formatCurrency(balance)} />
          <CalculatorCta>Start SWP</CalculatorCta>
        </CalculatorResults>
      </CalculatorInputs>

      <CalculatorVisual>
        <CalculatorDonut
          caption="Final Value"
          value={formatCurrency(balance)}
          percent={withdrawnPct}
          legend={["Withdrawal", "Final Balance"]}
        />
      </CalculatorVisual>
    </CalculatorCard>
  );
}
