import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
export default function Contact() {
  return (
    <>
      <Header />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
}
