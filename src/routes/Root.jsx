import React from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      {/* ! ========== HEADER ============= */}
      <Header />
      {/* ! ========== Main ============= */}
      <Main />
      {/* ! ========== Footer ============= */}
      <Footer />
    </>
  );
}

export default Root;
