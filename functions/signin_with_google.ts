'use server'
import { signIn } from '@/auth'


export default async function SignInWithGoogle() {
  console.log("Sign in with Google was called");
  await signIn('google');
}