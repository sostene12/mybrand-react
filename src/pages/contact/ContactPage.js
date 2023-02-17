import React, { useState } from 'react';
import "./ContactPage.css"
import contactImage from "../../images/contacts-img.png"
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from 'formik';

const ContactPage = () => {
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const [nameError,setNameError] = useState('')
  const [emailError,setEmailError] = useState('')
  const [messageError,setMessageError] = useState('')
  

  const handleForm = async (e) =>{
    e.preventDefault();
    console.log("prevented")
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if (fullName == "") {
      setNameError("Please enter only letters in this field.");
    } else if ((atpos < 1 || dotpos - atpos < 2) && email == "") {
      setEmailError("Invalid email!");
    } else if (message == "") {
      setMessageError("Enter the mesage");
    }else{
      try {
      const res = await axios.post("https://faithful-onesies-dog.cyclic.app/api/contact/create",{
        fullName,email,message});
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section id="contact-section" className="contact-section">
      <div className="contacts">
        <div>
          <h2>Contact Me</h2>
          <form onSubmit={handleForm}>
            <label >Names</label>
            <input type="text" placeholder="Full Names" name="name" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
             />
            {nameError && <span className="nameError">{nameError}</span>}
            <label >Email</label>
            <input type="text" placeholder="Email" name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
            {emailError && <span className="emailError">{}emailError</span>}
            <label >Message</label>
            <textarea
              id=""
              rows="4"
              name="message"
              className="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && <span className="messageError">{messageError}</span>}
            <button className="button">Submit</button>
          </form>
    
        </div>
        <div className="image-contact">
          <img src={contactImage} alt="contct img" />
        </div>
      </div>
    </section>
  )
}

export default ContactPage