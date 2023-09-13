import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <Container>
        <Navbar />
        {/* ! ========== HEADER ============= */}
        <Header />
        {/* ! ========== Main ============= */}
        <Main />
        {/* ! ========== Footer ============= */}
        <Footer />
      </Container>
    </>
  );
}

export default Root;
