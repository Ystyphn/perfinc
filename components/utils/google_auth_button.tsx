import { FcGoogle } from "react-icons/fc";


export default function GoogleAuthButton({className = "w-full h-fit py-2 bg-white text-black text-lg rounded-xl cursor-pointer hover:bg-gray-300", callback}: {
  className?: string;
  callback?: () => void;
}) {
  return (
  <form action={callback}>
    <button 
      type="submit"
      className={className}
    >
      <span className="flex items-center justify-center gap-2">Sign in with Google <FcGoogle /></span>
    </button>
  </form>
  );
}