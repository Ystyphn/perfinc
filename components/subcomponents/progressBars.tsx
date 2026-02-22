

export function ProgressBarSmall({percentFill}:{
  percentFill?: number;
}){
  const translateX: number = percentFill ? 100 - percentFill : 100;

  return(
  <div className="progressbar-sm overflow-hidden">
    <div 
      style={{
        transform: `translateX(-${translateX}%)`
      }}
      className="size-full bg-cyan-300"
    />
  </div>
  )
}