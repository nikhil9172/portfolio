import React from 'react'
import './Footer.css'
function Footer() {
  const year = new Date().getFullYear();
  return (
   <>
   <div className='footer'>
    <div className='container footer_container d-flex justify-content-around flex-wrap'>
    <div className='first mt-5'>
      <h4>Nikhil Dhakate</h4>
      <p>{year} Nikhil Dhakate All rights reserved</p>
      <p className='d-flex'>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook mx-3"></i>
     
      </p>
    </div>
    <div className='third mt-5'>
<h4> Get In Touch</h4>
<p>hello weicome to my porfolio page if their any query contact me</p>
<p>nikhildhakate19@gmail.com</p>
<i class="fa-brands fa-"></i><span>+9172331098</span>

    </div>

    <div className='third mt-5'> 
    <h4>About</h4>
    <p>resume</p>



    </div>







    </div>







   </div>
   
   
   
   </>
  )
}

export default Footer