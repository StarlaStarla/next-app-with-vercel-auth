'use client'

import { useRouter } from 'next/navigation'
import './globals.css'
import { globalSession } from '@/lib/auth0'
import { use } from 'react'
import { SessionData } from '@auth0/nextjs-auth0/types'

export default function Home() {
  const router = useRouter()
  const session = use<SessionData | null>(globalSession)

  // If no session, show login buttons
  if (!session) {
    router.push('/login')
  }

  // If session exists, show a welcome message and logout button
  router.push('/dashboard')
}
