import React from 'react';
import LandingPage from './landingPage/LandingPage';
import ContactPage from './contact/ContactPage';
import BlogPage from './blog/BlogPage';
const AllPages = () => {
  return (
    <div>
      <LandingPage />
      <ContactPage />
        <BlogPage />
    </div>
  );
}


export default AllPages
