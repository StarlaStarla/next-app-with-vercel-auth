import { Auth0Client } from '@auth0/nextjs-auth0/server'

export const auth0 = new Auth0Client()

export const globalSession = auth0.getSession()
