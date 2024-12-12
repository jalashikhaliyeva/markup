import React from 'react'
import Header from '../Header'
import Hero from '../Hero'

function Gradient() {
  return (
    <div
    style={{
      background: `
        linear-gradient(
          to right, 
          white 0%, 
          #FFFEFD 40%, 
          #DAE1FE 95%
        ),
        linear-gradient(
          to top, 
          rgba(255, 255, 255, 1) 0%, 
          rgba(245, 247, 255, 0.8) 20%, 
          rgba(218, 225, 254, 0.6) 100%
        )
      `,
      backgroundBlendMode: "lighten",
      // minHeight: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Header />
    <Hero />
  </div>
  )
}

export default Gradient