import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Head from "next/head";
const Layout = ({ children }) => {
    return(
        <Container>
            <div className="bg-section">
                <Navbar />
            </div>
            {children}
            <Footer />
        </Container>
    )
}
export default Layout;
