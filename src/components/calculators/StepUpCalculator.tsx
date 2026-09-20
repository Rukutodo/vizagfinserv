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

export default function StepUpCalculator() {
  const [initialSip, setInitialSip] = useState(10000);
  const [stepUp, setStepUp] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
  let totalInvested = 0;
  let totalValue = 0;

  for (let y = 1; y <= years; y++) {
    const p_y = initialSip * Math.pow(1 + stepUp / 100, y - 1);
    totalInvested += p_y * 12;

    // Value from previous years growing for this year
    const s_grown = totalValue * Math.pow(1 + rate / 100, 1); // approximate 1 year growth

    // Value of this year's SIP contributions
    let sip_grown = 0;
    if (i > 0) {
      sip_grown = p_y * ((Math.pow(1 + i, 12) - 1) / i) * (1 + i);
    } else {
      sip_grown = p_y * 12;
    }

    totalValue = s_grown + sip_grown;
  }

  totalValue = Math.round(totalValue);
  totalInvested = Math.round(totalInvested);
  const estReturns = Math.max(0, totalValue - totalInvested);
  const investedPct = totalInvested / (totalValue || 1);

  return (
    <CalculatorCard>
      <CalculatorInputs>
        <SliderField
          label="Monthly Investment (Initial)"
          value={initialSip}
          onChange={setInitialSip}
          min={500}
          max={1000000}
          step={500}
          currency
        />
        <SliderField
          label="Annual Step-up"
          value={stepUp}
          onChange={setStepUp}
          min={1}
          max={50}
          suffix="%"
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
          <ResultRow label="Invested Amount" value={formatCurrency(totalInvested)} />
          <ResultRow label="Est. Returns" value={formatCurrency(estReturns)} />
          <ResultTotal label="Total Value" value={formatCurrency(totalValue)} />
          <CalculatorCta>Start SIP</CalculatorCta>
        </CalculatorResults>
      </CalculatorInputs>

      <CalculatorVisual>
        <CalculatorDonut
          caption="Total Value"
          value={formatCurrency(totalValue)}
          percent={investedPct}
          legend={["Invested", "Returns"]}
        />
      </CalculatorVisual>
    </CalculatorCard>
  );
}
