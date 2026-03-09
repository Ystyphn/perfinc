'use client'
import { Navbar, Navlink } from "@/components/dashboard/navbar";

import "../globals.css";
import { Footer } from "@/components/subcomponents/footer";
import SignupForm from "@/components/signup/SignupForm";
import GoogleAuthButton from "@/components/utils/google_auth_button";
import SignInWithGoogle from "@/functions/signin_with_google";


export default function SignupPage(){
  const navLinks: Navlink[] = [
    {
      linkName: "Home",
      href: "/",
    },
  ]
  const mock = () => {};

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
      <SignupForm>
        <GoogleAuthButton callback={SignInWithGoogle}/>
      </SignupForm>
    </main>

    <footer className="p-4 border-t-1 border-offwhite">
      <Footer />
    </footer>
  </div>
  );
}