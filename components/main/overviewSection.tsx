import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaClock, FaPiggyBank } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { MdMoneyOff, MdOutlineSsidChart } from "react-icons/md";
import { PiTarget } from "react-icons/pi";



interface FeatureObject{
  icon?: LucideIcon | IconType;
  title: string;
  description: string;
}


function FeatureCard({
  icon,
  title,
  description,
}: FeatureObject){
  return (
  <div className="p-8 bg-linear-to-br from-cyan-600/30 to-transparent rounded-2xl">
    {/* Icon Section */}
    {icon && // Only put icon if there was a supplied icon
    <div className="size-fit p-2 mb-4 text-4xl rounded-lg bg-linear-to-br from-cyan-600 to-lime-600">
      {icon}
    </div>
    }

    {/* Title */}
    <h1 className="mb-4 font-audiowide text-2xl">
      {title}
    </h1>

    {/* Description */}
    <p className="font-quantico text-gray-300/75">
      {description}
    </p>
  </div>
  )
}


export function FeaturesOverview() {
  const features: FeatureObject[] = [
    {
      icon: <GiPieChart />,
      title: "Track your Expenses",
      description: "Get hands on feedback on how much you're willing to spend and willing to not spend within a period of time",
    },
    {
      icon: <MdOutlineSsidChart />,
      title: "Visualize your Finances",
      description: "Get graphical insights on how your finances are performing",
    },
    {
      icon: <PiTarget />,
      title: "Invest without Guessing",
      description: "Get insights on whether it's the right moment to start an investment (for property, business and many more)",
    },
    {
      icon: <FaPiggyBank />,
      title: "Plan your Savings",
      description: "Get realistic projection on that 'reward' you're aiming for and check whether it's timely or not",
    },
    {
      icon: <FaClock />,
      title: "Budget Hassle Free",
      description: "Distinguish your daily, monthly, or weekly expenses to match your personal goals without compromising necessities",
    },
    {
      icon: <MdMoneyOff />,
      title: "Free to use",
      description: "Start and use for free forever before upgrading to a version that suits your cause",
    }
  ]

  return (
  <div 
    id="features"
    className="mb-8 flex flex-col items-center"
  >
    {/* Header */}
    <div className="mb-6">
      <h1 className="font-audiowide text-5xl text-center mb-2">
        Make your Personal Finances Easier<br />
        <span className="gradient-2">and more Efficient than ever!</span>
      </h1>
      <p className="font-quantico text-center text-gray-300/75">
        Enjoy various features of PerFinc from your browser and anywhere across the world.
      </p>
    </div>

    {/* Features */}
    <div className="mx-8 grid grid-cols-3 gap-4">
      {features.map((item: FeatureObject, index: number) => (
        <FeatureCard 
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
  )
}