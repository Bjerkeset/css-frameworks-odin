"use client";
import React from "react";
import Example from "components/pages/home/hero";
import SignInForm from "components/forms/SignInForm";
import Footer from "@/components/shared/Footer";

function page() {
  return (
    <>
      <main className="flex justify-center items-center">
        <SignInForm />
      </main>

      <>
        <div class="flex flex-col min-h-screen">
          <footer className=" bg-gray-200 p-4 mt-auto ">
            <Footer />
          </footer>
        </div>
      </>
    </>
  );
}

export default page;

