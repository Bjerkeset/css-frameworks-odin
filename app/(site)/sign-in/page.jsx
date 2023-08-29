"use client";
import React from "react";
import Example from "components/pages/home/hero";
import SignInForm from "components/forms/SignInForm";

function page() {
  return (
    <main className="flex justify-center items-center">
      <SignInForm />
    </main>
  );
}

export default page;
