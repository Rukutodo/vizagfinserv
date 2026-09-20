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

export default function InflationCalculator() {
  const [currentValue, setCurrentValue] = useState(50000);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(10);

  const futureValue = Math.round(currentValue * Math.pow(1 + inflationRate / 100, years));
  const purchasingPower = Math.round(currentValue / Math.pow(1 + inflationRate / 100, years));
  const inflationErosion = futureValue - currentValue;
  const purchasingPowerReducedPct = Math.round((1 - purchasingPower / (currentValue || 1)) * 100);
  const currentPct = currentValue / (futureValue || 1);

  return (
    <CalculatorCard>
      <CalculatorInputs>
        <SliderField
          label="Current Amount / Expense"
          value={currentValue}
          onChange={setCurrentValue}
          min={1000}
          max={10000000}
          step={1000}
          currency
        />
        <SliderField
          label="Expected Inflation Rate"
          value={inflationRate}
          onChange={setInflationRate}
          min={1}
          max={20}
          step={0.5}
          suffix="%"
        />
        <SliderField
          label="Years in Future"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
          suffix="Yr"
        />

        <CalculatorResults>
          <ResultRow label="Current Value" value={formatCurrency(currentValue)} />
          <ResultRow label="Inflation Erosion" value={formatCurrency(inflationErosion)} />
          <ResultTotal label="Required in Future" value={formatCurrency(futureValue)} />
          <CalculatorCta>Beat Inflation</CalculatorCta>
        </CalculatorResults>
      </CalculatorInputs>

      <CalculatorVisual>
        <CalculatorDonut
          caption="Future Cost"
          value={formatCurrency(futureValue)}
          percent={currentPct}
          legend={["Today's Cost", "Inflation Impact"]}
          note={`Purchasing power reduced by ${purchasingPowerReducedPct}%`}
        />
      </CalculatorVisual>
    </CalculatorCard>
  );
}
