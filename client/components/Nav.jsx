import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const { logout, loginWithRedirect, user, isLoading } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/profile`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <section className="bg-slate-600 text-white flex justify-between items-center">
        <h1 className="mx-4 font-bold text-2xl">Fruit FTW!</h1>
        <nav className="flex justify-end  gap-4 px-4">
          <Link to="/">Home</Link>
          <IfAuthenticated>
            <Link to="/profile">Profile</Link>
            <Link to="/" onClick={handleLogoff}>
              Log off
            </Link>
            <p>{!isLoading && <span>{user?.email}</span>}</p>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Link to="/" onClick={handleSignIn}>
              Sign In
            </Link>
            <Link to="/" onClick={handleRegister}>
              Register
            </Link>
          </IfNotAuthenticated>
        </nav>
      </section>
    </>
  )
}

export default Nav
