import { Navbar, Navlink } from "@/components/dashboard/navbar";
import { FcGoogle } from "react-icons/fc";

import "../globals.css";
import { Footer } from "@/components/subcomponents/footer";
import { signIn } from "@/auth";


function SignupForm(){
  const __signIn = async () => {
    'use server'
    await signIn("google", {redirectTo: "/dashboard"});
  }

  return(
  <div 
    className="w-[500px] min-h-[300px] px-6 py-4 border-1 border-teal-600 rounded-2xl shadow-custom-1"
  >
    {/* Header */}
    <div className="w-full p-4 mb-4 font-quantico text-3xl text-center">
      Create Account
    </div>

    {/* Forms */}
    <form
      className="mb-4 flex flex-col gap-4"
    >
      {/* Username */}
      <label className="font-quantico text-md flex flex-col text-cyan-400">
        Username
        <input 
          className="px-3 py-2 border-1 border-cyan-300/50 rounded-2xl"
          type="text" 
          name="username"
          placeholder="(e.g.) Ystyphn"
        />
      </label>

      {/* Email */}
      <label className="font-quantico text-md flex flex-col text-cyan-400">
        Email Address
        <input 
          className="px-3 py-2 border-1 border-cyan-300/50 rounded-2xl"
          type="email" 
          name="email"
          placeholder="(e.g.) bothystyphn@gmail.com "
        />
      </label>

      {/* Password */}
      <label className="font-quantico text-md flex flex-col text-cyan-400">
        Password
        <input 
          className="px-3 py-2 border-1 border-cyan-300/50 rounded-2xl"
          type="password" 
          name="password"
          placeholder="No example needed... right?"
        />
      </label>
      
      {/* Submit Button */}
      <button 
        className="w-full py-1 font-quantico text-lg bg-cyan-500 rounded-2xl cursor-pointer hover:bg-cyan-300"
        type="submit"
      >
        Sign Up
      </button>
    </form>

    {/* Divider */}
    <div className="flex flex-row items-center gap-6">
      <div className="grow-1 h-[1px] bg-linear-to-r from-cyan-300/20 via-cyan-300 to-cyan-300/20"/>
      <div className="font-quantico">or</div>
      <div className="grow-1 h-[1px] bg-linear-to-r from-cyan-300/20 via-cyan-300 to-cyan-300/20"/>
    </div>

    {/* Sign in with Google */}
    <form
      action={__signIn}
    >
      <button className="w-full py-1 mt-3 text-black text-lg text-center bg-white rounded-2xl flex gap-1 items-center justify-center cursor-pointer hover:bg-gray-200">
        Sign in with Google
        <FcGoogle />
      </button>
    </form>
  </div>
  )
}


export default async function SignupPage(){
  const navLinks: Navlink[] = [
    {
      linkName: "Home",
      href: "/",
    },
  ]

  return(
  <div>
    <header>
      <Navbar 
        navLinks = {navLinks}
      />
    </header>

    <main className="w-full px-4 pb-8 mt-16 flex flex-col items-center">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h1 className="font-audiowide text-6xl">
          <span className="gradient-4">
            PerFinc
          </span>
        </h1>
        
        <p className="font-quantico text-md text-cyan-300/75">
          Perfincly manage your finances anywhere
        </p>
      </div>

      {/* Sign up Form */}
      <SignupForm />
    </main>

    <footer className="p-4 border-t-1 border-offwhite">
      <Footer />
    </footer>
  </div>
  );
}