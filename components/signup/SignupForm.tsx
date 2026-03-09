'use client'
import '@/app/globals.css'


export default function SignupForm({onSubmit, children}: {
  children?: React.ReactElement
  onSubmit?: () => void;
}){
  return (
  <div className="w-1/3 h-fit p-8 bg-black border border-cyan-300 rounded-xl flex flex-col">
    <form 
      className="w-full flex flex-col"
      onSubmit={onSubmit}
      role="form"
    >
      <label 
        className="field-label-1"
        htmlFor="username"
      >
        Username
      </label>
      <input 
        className="text-field-1"
        data-testid="username-field" 
        id="username" 
        placeholder="Example User" 
      />

      <label 
        className="field-label-1"
        htmlFor="email"
      >
        Email
      </label>
      <input 
        className="text-field-1"
        data-testid="email-field" 
        id="email" 
        placeholder="example@domain.com"
      />

      <label 
        className="field-label-1"
        htmlFor="password"
      >
        Password
      </label>
      <input 
        className="text-field-1"
        data-testid="pass-field" 
        id="password" 
        placeholder="Password that's easy to guess"
      />

      <button 
        className="w-full h-fit py-2 font-quantico text-lg bg-cyan-500 rounded-xl cursor-pointer hover:bg-cyan-400 hover:shadow-cyan-sm"
        type="submit"
      >
        Sign Up
      </button>
    </form>
    {/* Divider */}
      <div className="w-full h-fit my-2 flex items-center">
        <div className="h-[1px] bg-linear-to-r from-cyan-400/25 via-cyan-400 to-cyan-400/50 grow-1"/>
        <p className="px-2 font-quantico text-sm text-white">or</p>
        <div className="h-[1px] bg-linear-to-r from-cyan-400/25 via-cyan-400 to-cyan-400/50 grow-1"/>
      </div>

      {/* Extra Children */}
      { children }
  </div>
  );
}