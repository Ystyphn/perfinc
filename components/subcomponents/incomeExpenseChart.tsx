'use client'
import * as d3 from "d3";
import { useState, useEffect, useMemo } from "react";


export function IncomeExpenseChart(){
  const [width, setWidth] = useState<number>(0);
  // Get the size of charts container
  const [parentWidth, setParentWidth] = useState<number|undefined>();
  // --------------------------------
  const height: number = 460;
  const margin = ({top: 20, right: 60, left: 60, bottom: 20});
  const endDate: Date = new Date();
  const startDate: Date = new Date(endDate);
  // MOCK PARAMETER ONLY (I WILL CHANGE THIS LATER)
  const currentCash: number = 5000; // In USD

  // Look back 30 days before
  startDate.setDate(endDate.getDate() - 30);
  
  // X axis of chart was the date from the first day of last month to the current day
  const xTicks = useMemo(() => {
    const x = d3.scaleUtc()
      .domain([startDate, endDate])
      .range([margin.left, width - margin.right]);
    
    return x.ticks()
      .map((value) => ({
        value,
        xOffset: Math.round(x(value) * 100) / 100 
      }))
  }, [margin, width]); // Ticks were dependent to screen resize

  // Y axis of chart was the amount of cash from -5000 to + 5000
  const y = d3.scaleLinear()
    .domain([currentCash - 5000, currentCash + 5000])
    .range([height - margin.bottom, margin.top]);
  

  // Sets width
  useEffect(() => {
    // Gets the parent container
    const parentContainer = document.getElementById("chart-container");

    if (parentContainer){
      const resizeObserver = new ResizeObserver(entries => {
        const rect = entries[0].contentRect;
        setParentWidth(rect.width);
      })
      resizeObserver.observe(parentContainer);
      if (parentWidth){
        setWidth(parentWidth > 768 ? parentWidth / 2 : parentWidth); // Occupy the entire space upon screen resize
      }

      return () => resizeObserver.disconnect();
    }
  }, [parentWidth]); // Call this again upon screen resize

  return(
  <svg width={width} height={height + 1}>
    <path d={`M ${margin.left + 0.5} ${height - margin.bottom + 0.5} H ${width - margin.right + 0.5}`} stroke="white"/>
    <path d={`M ${margin.left + 0.5} ${height - margin.bottom + 0.5} V ${margin.top + 0.5}`} stroke="white"/>
    {xTicks.map(({value, xOffset}, index) =>  (// These are the dates at the bottom of the chart
      <g
        key={index}
        transform={`translate(${xOffset}, ${height - margin.bottom + 0.5})`}
      >
        <line 
          y2 = "6"
          stroke="white"
        />
        <text
          key={index}
          className="fill-cyan-300 font-quantico text-2xs text-center -translate-x-[15px] translate-y-[20px]"
        >
          {value.getDate()}/{value.getMonth()+1}
        </text>
      </g>
    ))}
  </svg>
  );
}