"use client";
import React from "react";
import Example from "components/pages/home/hero";
import SignInForm from "components/forms/SignInForm";
import Footer from "@/components/shared/Footer";

function page() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <SignInForm />
    </main>
  );
}

export default page;
