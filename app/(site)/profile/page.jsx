import React from "react";
import Profile from "@/components/pages/profile/ExampleProfile";
import Footer from "@/components/shared/Footer";
import ContactsList from "@/components/pages/profile/ContactsList";

function page() {
  return (
    <>
      <ContactsList />
      <Profile />
    </>
  );
}

export default page;
