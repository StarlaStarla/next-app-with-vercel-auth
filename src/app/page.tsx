// import { useRouter } from 'next/navigation'
import './globals.css'
// // import { globalSession } from '@/lib/auth0'
// import { use } from 'react'
// import { SessionData } from '@auth0/nextjs-auth0/types'
import { auth0 } from '@/lib/auth0'
import Login from './login/page'

export default async function Home() {
  // const router = useRouter()

  const session = await auth0.getSession()
  return <Login></Login>
  // const session = use<SessionData | null>(globalSession)
  // If no session, show login buttons
  // if (!session) {
  // router.push('/login')
  // }
  // router.push('/dashboard')
}
