import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Section from "@/components/global/Section";
import contact from "@/assets/elements/contact.gif";

const ContactSection = () => {
  return (
    <Section className={"relative z-20 min-h-screen py-10"}>
      <div className="text-center py-10 mobile-lg:w-9/12 mx-auto">
        <h1>Contact</h1>
        <p>Get in touch with me. I'd love to hear from you!</p>
      </div>
      <div className="flex gap-2 max-tablet-lg:flex-col">
        <div className="basis-2/3">
          <ContactForm />
        </div>
        <div className="basis-1/3 p-4 border-border rounded-xl">
          <img src={contact} alt="Contact" className="w-[80%] mx-auto" />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
