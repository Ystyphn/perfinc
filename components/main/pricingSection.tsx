'use client'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";


interface PricingProps{
  title: string;
  subtitle?: string;
  ctaHref: string;
  price: number;
  includedFeatures: string[];
}


// Pricing card
// ---------------------
// It's best to keep the includedFeatures less than 10 items
function PricingCard({
  title,
  subtitle,
  ctaHref,
  price,
  includedFeatures,
}: PricingProps){
  const href: string = ctaHref.replace(/\//g, "").trim(); // Make sure link was in desired format to be used
  const router: AppRouterInstance = useRouter();

  return (
  <div className="p-8 rounded-xl bg-gray-700/25">
    {/* Header */}
    <div className="mb-8">
      <h1 className="mb-2 font-audiowide text-3xl">
        <span className="gradient-1">
          {title}
        </span>
      </h1>
      {subtitle && <p className="mb-2 font-quantico text-gray-300/75">{subtitle}</p>}
    </div>

    {/* Price + CTA */}
    <div>
      <h2 className="mb-4 font-audiowide text-6xl">
        <span className="gradient-2">
          {price > 0 ? "$" + price.toString() : "Free"}
        </span>
      </h2>

      <button
        className="w-full h-[45px] mb-8 font-quantico text-xl rounded-lg bg-gray-400/20 cursor-pointer"
        onClick={() => {router.push(href)}}
      >
        Get started
      </button>
    </div>

    {/* Included Features */}
    <div>
      <ul>
      {includedFeatures.map((value: string, index: number) => (
        <li key={index} className="mb-4 font-quantico text-lg flex items-center gap-3">
          <span className="text-lime-300"><FaCheckCircle/></span> {value}
        </li>
      ))}
      </ul>
    </div>
  </div>
  )
}


export function PricingSection(){
  const pricesData: PricingProps[] = [
    {
      title: "Standard",
      subtitle: "Utilize helpful functions and tools of PerFinc",
      ctaHref: "#",
      price: 0,
      includedFeatures: [
        "Budget Allocation",
        "Transaction History Tracker",
        "Organizable Wallets",
        "Visual Charts",
      ]
    }
  ]
  
  return(
  <div className="w-full px-8">
    {/* Header */}
    <div className="w-full text-center">
      <h1 className="mb-1 font-audiowide text-5xl gradient-3">
        Choose Plan
      </h1>
      <p className="font-quantico text-gray-300/75">
        Start for free. <span className="gradient-1"><b>NO CREDIT CARD</b></span> needed.
      </p>
    </div>

    {/* Pricing Section */}
    <div className="grid grid-cols-3 max-md:grid-cols-1">
      {pricesData.map((price: PricingProps, index: number) => (
        <PricingCard 
          key={index}
          title={price.title}
          subtitle={price.subtitle}
          price={price.price}
          ctaHref={price.ctaHref}
          includedFeatures={price.includedFeatures}
        />
      ))}
    </div>
  </div>
  );
}