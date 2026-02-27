import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import userValidator from "./app/utilities/userValidator";

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],

  callbacks: {
    async signIn({user, account}) {
      const provider: string = account?.provider ?? "standard";
      const email: string = user.email ?? "";
      const username: string = user.name ?? "";
      
      
      return await userValidator({
        email: email,
        authStrategy: provider,
        userName: username,
      });
    },
  }
})