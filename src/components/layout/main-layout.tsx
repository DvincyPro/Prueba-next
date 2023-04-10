import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ReactNode } from "react";


interface MainLayoutProps {
    children: ReactNode;
  }
const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  );
};

export default MainLayout;
