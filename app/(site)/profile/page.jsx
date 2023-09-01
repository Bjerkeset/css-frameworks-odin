import React from "react";
import Profile from "@/components/pages/profile/Profile";
import Footer from "@/components/shared/Footer";

function page() {
  return (
    <>
      <section className="flex justify-around">
        <Profile />
      </section>
    </>
  );
}

export default page;
