import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LogoComponent } from "../dashboard/navbar";



export function Footer(){
  return(
  <div className="w-full grid grid-cols-4">
    {/* Column 1 Footer */}
    <div>
      {/* Logo Section */}
      <div className="mb-3">
        <LogoComponent />
      </div>
      <p className="mb-6">Lorem ipsum sit dolor mit amet. Consectetur adepscing.</p>
      {/* Social Links*/}
      <div className="text-4xl grid grid-cols-4 gap-4">
        <FaSquareXTwitter />
        <FaGithub />
        <FaLinkedin />
        <MdOutlineEmail />
      </div>
    </div>
  </div>
  )
}