import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  const [inputvalue , setinputvalue]=useState({
    fname:"",
    lname:"",
    email:"",
    number:"",
    massage:""
  });

  

  console.log(inputvalue);
const getvalue=(e)=>{
  const {name , value} =e.target;
  setinputvalue(()=>{
    return{
      ...inputvalue,[name]:value
    }
  })
 

}

  return (
    <div className='container mb-3 contact'>

     <h2 className='text-center'>Contact Us</h2>

     <div className='container mt-3'>
      
     <Form className='row mt-2'>
      <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='fname'  onChange={getvalue}/>
       
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
        <Form.Label>Last Name </Form.Label>
        <Form.Control type="text" name='lname'  onChange={getvalue}/>
       
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email'  onChange={getvalue}/>
       
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" name='number'  onChange={getvalue}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Massage</Form.Label>
        <Form.Control as="textarea" rows={5} name='massage' onChange={getvalue} />
      </Form.Group>

      <div className='d-flex justify-content-center'>
      <Button variant="primary" className='col-lg-6 mt-3' type="submit">
        Submit
      </Button>
      </div>
    </Form>




     </div>










    </div>
  )
}

export default Contact