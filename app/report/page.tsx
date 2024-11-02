"use client";

import React from "react";

import Image from "next/image";

import Icon from "../../public/images/dm-skate-icon.png";

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
      {/* <PieChartComponent {...data} /> */}
    </div>
  );
}
