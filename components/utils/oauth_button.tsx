/* 
##################################################
This button is for authentication using external 
authentication services such as signing in with
Google, GitHub, LinkedIn and much more
##################################################
*/


export default function OAuthButton({name, className, callback}: {
  name: string;
  authProvider?: 'google';
  className?: string;
  callback?: () => void;
}){

  return(
  <button 
    onClick={callback}
    className={className}
  >
    { name }
  </button>
  )
}