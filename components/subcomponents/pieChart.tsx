import * as d3 from "d3";
import * as math from "mathjs"


// Test version of the BudgetingPieChart
export function BudgetingPieChart(){
  const arcDatum: d3.DefaultArcObject = {
    innerRadius: 0,
    outerRadius: 25 ,
    startAngle: 0,
    endAngle: math.unit(300.0, 'deg').toNumber('rad'),
  };
  const arcDatum2: d3.DefaultArcObject = {
    innerRadius: 0,
    outerRadius: 25,
    startAngle: math.unit(300.0, 'deg').toNumber('rad'),
    endAngle: math.unit(360.0, 'deg').toNumber('rad'),
  }
  const arc = d3.arc();

  return (
  <svg
    viewBox="0 0 100 60"
    className="w-full min-h-[200px]"
  >
    <g transform={`translate(${100/2}, ${60/2})`}>
      <path d={`${arc(arcDatum)}`} className="fill-cyan-600/60 transition-[fill] duration-700 hover:fill-cyan-300"/>
      <path d={`${arc(arcDatum2)}`} className="fill-lime-600/60 transition-[fill] duration-700 hover:fill-lime-300"/>
    </g>
  </svg>
  )
}