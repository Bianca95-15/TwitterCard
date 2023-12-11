import React from 'react'
import { TwitterFollowCard } from './assets/TwitterFollowCard'

  export function App () {
    const formatUserName= (userName) => `@${userName}`
    return(
    <section className='App'>
      
    <TwitterFollowCard   userName={"TomTheCat"}>
    Tom The Cat
    </TwitterFollowCard>

    <TwitterFollowCard   userName={"TomTheCat"}>
    Tom The Cat
    </TwitterFollowCard>
    </section>
  )
  }
export default App
