import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './data';
import Spinner from 'react-bootstrap/Spinner';

function Project() {
  const [spin , setspin] = useState(true)

useEffect(()=>{
  setTimeout(() => {
    setspin(false)
  },1100);
})

  return (
    <>
    {
      spin ? <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}><Spinner animation="border" variant="danger" /> &nbsp; &nbsp; Loading...</div>:
    
<div className='container'>
   <h2 className='text-center mt-2' >Project</h2>

     <div className='card-div'>

          <div className='row d-flex justify-content-around align-item-center'>
{
projectData.map((ele , index)=>{
return(

<Card style={{ width: '20rem', height:"22rem" }} className='mt-4 mb-4'>
      <Card.Img style={{ width: '20rem', height:"18rem" , marginLeft:"-0.8rem"}}  variant="top" src={ele.imgsrc} />
      <Card.Body className='d-flex justify-content-center flex-column mb-2'>
        <Card.Title  className='text-center mb-2'>{ele.projectName}</Card.Title>
        
        <Button variant="primary"><p href={ele.demo} target="_blank" className='text-decoration-none text-light '> Click</p></Button>
      </Card.Body>
    </Card>

)

  
})



}
  

      </div>
   </div>
</div>
}
    </>
  )
  
}

export default Project