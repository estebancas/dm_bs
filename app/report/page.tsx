'use client'

import React, { useEffect, useState } from "react";

import Image from "next/image";

import Icon from "../../public/images/dm-skate-icon.png";
import { PieChartComponent } from "@/components/pie-chart";

const data = {
  title: 'dsadsa',
  caption: 'dasdas',
  chartData: [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
  ],
  chartConfig: {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  }
}

export default function Report() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center flex flex-col items-center mb-4">
        <Image
          className="rounded border-[2px] border-primary mb-8"
          src={Icon}
          alt="icon"
          width={150}
          height={150}
        />
        <h2 className="text-2xl mb-4 font-bold">Veamos los resultados</h2>
        <p>Esto fue lo que la gente votó</p>
      </div>
      <PieChartComponent {...data} />
    </div>
  );
}
