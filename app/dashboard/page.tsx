import { Navbar } from "@/components/dashboard/navbar"
import { Overview } from "@/components/dashboard/overview"
import { auth } from "@/auth"
import type { Navlink } from "@/components/dashboard/navbar"
import TransactionHistoryOverview from "@/components/dashboard/transactionOverview"
import "@/app/globals.css"


function ForbiddenError(){
  return(
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h5 className="font-audiowide text-red-400 text-5xl text-center text-shadow-red-glow">
        403 Error: Forbidden!
      </h5>
      <p className="font-quantico text-offwhite/75 text-md text-center">
        You are not signed in to view this page
      </p>
    </div>
  )
}


export default async function Dashboard() {
  const navlinks: Navlink[] = [
    {
      icon: "wallet",
      linkName: "Dashboard",
      href: "#",
    },
    {
      icon: "trendingUp", 
      linkName: "Analytics",
      href: "#",
    },
    {
      icon: "creditCard",
      linkName: "Transactions",
      href: "#",
    },
    {
      icon: "chartPie",
      linkName: "Budget",
      href: "#",
    },
  ]
  const session = await auth();

  if (session && session.user){ // This will be a problem if a gmail account has no user which somehow won't make sense I believe
    const username: string = session.user.name ? session.user.name : "User";
    const profileImage: string = session.user.image ? session.user.image : ""

    return (
      <div className="w-full min-h-full overflow-hidden">
        <header>
          <Navbar 
            navLinks={navlinks}
            image={profileImage}
          />
        </header>
        <main className="w-full min-h-screen px-6 py-4">
          <Overview 
            user={username}
          />
          <TransactionHistoryOverview />
        </main>
      </div>
    );
  } else { // 403 Error Forbidden
    return <ForbiddenError />
  }
}