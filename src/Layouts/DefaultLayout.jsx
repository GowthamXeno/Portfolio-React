import React from 'react';
import NavbarComp from '../Components/NavbarComp';
import FooterComp from "../Components/FooterComp";
const DefaultLayout = (WrappedComponent) => (props)=> {
  return (
    <>
    <NavbarComp />
    <WrappedComponent {...props} />
    <FooterComp />
    </>
  )
}

export default DefaultLayout;