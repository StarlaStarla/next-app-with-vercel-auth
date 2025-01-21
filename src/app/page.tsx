import './globals.css'
import Login from './login/page'
import { auth0 } from '@/lib/auth0'

export default async function Home() {
  // Fetch the user session
  const session = await auth0.getSession()

  // If no session, show sign-up and login buttons
  if (!session) {
    return <Login></Login>
  }

  // If session exists, show a welcome message and logout button
  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
      <p>
        <a href='/logout'>
          <button>Log out</button>
        </a>
      </p>
    </main>
  )
}
