import React, { useState } from "react";
import Head from "next/head";
import Burger from "./Burger";
import Navigation from "./Navigation";
import SocialList from "./SocialList";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Burger active={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <nav className={`${isOpen ? "open" : ""}`}>
        <Navigation />
        <div>
          <img
            src="/images/avatar.png"
            alt="Jacob"
            width={100}
            height={100}
            className="avatar"
          />
          <SocialList />
        </div>
      </nav>
      <main className={`${isOpen ? "open" : ""}`}>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            box-sizing: border-box;
            height: 100%;
          }
          nav {
            display: flex;
            position: fixed;
            top: 0;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 2rem;
            height: 95vh;
            height: -webkit-fill-available;
            height: -moz-available;        
            height: -webkit-fill-available;  
            height: fill-available;
            background: #d4f1f5;
            width: 150px;
            border-left: 16px solid #73D2DE;
            transform: translateX(-250px);
            transition: transform 0.5s ease-in-out;
          }
          main {
            padding: 2rem 2rem;
            display: flex;
            flex: 1;
            min-height: 100%;
          }
          nav.open {
            transform: translateX(0);
          }
          .avatar {
            border-radius: 50%;
            margin-bottom: 1rem;
            background-color: #fff;  
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 auto;
            }
            main {
              margin-left: 250px;
            }
            nav {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}
