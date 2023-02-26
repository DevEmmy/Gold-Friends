import SignIn from '@/Components/Login'
import MetaTags from '@/Components/MetaTags'
import React from 'react'

const login = () => {
  return (
    <>
    <MetaTags title="Log in" />
    <SignIn />
    </>
  )
}

export default login