import React from 'react'

const ErrorMessage = ({error}) => {
    if(!error) return null;
  return (
    <span style={{color:'red',fontSize:'13px',padding:'3px 0px'}}>{error}</span>
  )
}

export default ErrorMessage