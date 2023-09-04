"use client";
import React from "react";
import Example from "components/pages/home/hero";
import Footer from "@/components/shared/Footer";
import FormTabs from "@/components/forms/FormTabs";
function page() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <FormTabs />
    </main>
  );
}

export default page;
