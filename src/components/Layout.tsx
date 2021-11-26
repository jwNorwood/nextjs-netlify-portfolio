import Head from "next/head";
import Navigation from "./Navigation";
import SocialList from "./SocialList";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
          <Navigation />
          <SocialList />
      </nav>
      <main>{children}</main>
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
            background: #eaeaea;
            width: 150px;
          }
          main {
            padding: 2rem 2rem;
            display: flex;
            flex: 1;
            min-height: 100%;
            margin-left: 100px;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 auto;
            }
            main {
              margin-left: 250px;
            }
          }
        `}
      </style>
    </div>
  );
}
