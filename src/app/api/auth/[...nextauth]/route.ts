import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add your authentication logic here
        // This is a mock - replace with real database check
        if (credentials?.email === "demo123@gmail.com" && credentials?.password === "demo123") {
          return { 
            id: "1", 
            name: "Demo User", 
            email: "demo123@gmail.com",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          }
        }
        
        // If credentials are invalid
        return null
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client
      if (session.user) {
        session.user.id = token.sub!
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  session: {
    strategy: 'jwt' as const,
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }