import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';

function Home() {
  return (
   <>
   <div className='container home_container'>
<div className='home_innerdiv'>
<div className='left_div'>
    <h2>Welcome to <span style={{color:"#6c63ff"}}>Nikhil Dhakate</span></h2>
<p style={{color:"#666" ,letterSpacing:"1px" , marginTop:2}}>jhbhbud hbhdbebdbeid bhbhbdhe</p>
<div className='btn_div mt-4'>
    <Button variant="success" style={{letterSpacing:"1px" ,border:"none" , borderRadius:"4", background:"#2f2d69" }}>Projects</Button>

</div>

</div>
<div className='right_div'>
    <h2>Welcome to <span style={{color:"#6c63ff"}}>Nikhil Dhakate</span></h2>
<p style={{color:"#666" ,letterSpacing:"1px" , marginTop:2}}>jhbhbud hbhdbebdbeid bhbhbdhe</p>
</div>
</div>
   </div>
   </>
  )
}

export default Home