import React from 'react'
import { CTA_block, Hero, Logos, Navbar, Services , Case_Study , Team, Footer, Contact} from './Component//index'
const App = () => {
  return (
    <div className='bg-white px-8 py-4 max-sm:px-3'>
       <Navbar/>
       <Hero/>
       <Logos/>
       <Services/>
       <CTA_block/>
      <Case_Study/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App