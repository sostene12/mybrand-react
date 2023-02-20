import React from "react";
import "./ContactPage.css";
import contactImage from "../../images/contacts-img.png";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import ErrorMessage from "../../components/ErrorMessage";

const ContactPage = () => {
  const signupSchema = Yup.object().shape({
    fullName: Yup.string().min(4).required().label("Full Name"),
    email: Yup.string().email().required().label('Email'),
    message:Yup.string().min(10).required().label('Message')
  });

const formik = useFormik({
  initialValues:{ fullName: "", email: "", message: ""  },
  validationSchema:signupSchema,
  onSubmit:values => console.log(values)
})

  return (
    <section id="contact-section" className="contact-section">
      <div className="contacts">
        <div>
          <h2>Contact Me</h2>
          <form onSubmit={formik.handleSubmit}>
            <label >Names</label>
            <input type="text" placeholder="Full Names"
            {...formik.getFieldProps('fullName')}
             />
            {formik.touched.fullName && <ErrorMessage error={formik.errors.fullName} />}
            <label >Email</label>
            <input type="text" placeholder="Email"
              {...formik.getFieldProps('email')}
             />
            {formik.touched.email && <ErrorMessage error={formik.errors.email} />}
            <label >Message</label>
            <textarea
              id=""
              rows="4"
              className="message"
              {...formik.getFieldProps('message')}
            ></textarea>
            {formik.touched.message && <ErrorMessage error={formik.errors.message} />}
            <button className="button" type="submit" >Submit</button>
          </form>
        </div>
        <div className="image-contact">
          <img src={contactImage} alt="contct img" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
