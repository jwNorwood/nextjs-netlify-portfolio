import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a
              className={
                router.pathname === "/"
                  ? "active"
                  : null
              }
            >
              About Me
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#work_history">
            <a
              className={
                router.pathname ===
                "/#work_history"
                  ? "active"
                  : null
              }
            >
              Work History
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#design">
            <a
              className={
                router.pathname ===
                "/design"
                  ? "active"
                  : null
              }
            >
              Design Work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a
              className={
                router.pathname ===
                "/#projects"
                  ? "active"
                  : null
              }
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a
              className={
                router.pathname ===
                "/#contact"
                  ? "active"
                  : null
              }
            >
              Contact
            </a>
          </Link>
        </li>
        {/* <li>
            <Link href="/side-projects">
              <a className={router.pathname === "/side-projects" ? "active" : null}>Side Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                blog
              </a>
            </Link>
          </li> */}
      </ul>
      <style jsx>
        {`
          ul {
            opacity: 1;
            width: 100%;
            text-align: right;
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 1;
          }
          li {
            margin-bottom: 1.75rem;
            font-size: 1rem;
            color: #73d2de;
            font-weight: 700;
          }
          li:last-child {
            margin-bottom: 0;
          }
          .active {
            color: #8f2d56;
          }
        `}
      </style>
    </>
  );
}
