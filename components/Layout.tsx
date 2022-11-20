import Head from "next/head";
import React, { FC } from "react";
import { LayoutProps } from "../types/types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Recipe</title>
        <meta title="My Recipe" />
        <meta name="keywords" content="My Recipe, 和食, 洋食, パン, ケーキ, ちいかわ"></meta>
        <meta name="description" content="My Recipeです。ちいかわちゃんと仲良くクッキング。楽しい！！"></meta>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>
      <div className="relative overflow-hidden">
        <div className="flex flex-col items-center max-w-4xl w-full mx-auto">
          <Navbar />
          <main className="w-full pb-12 px-4">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
