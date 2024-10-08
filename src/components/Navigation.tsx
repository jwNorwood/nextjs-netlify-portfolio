import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <span
              className={
                router.pathname === "/"
                  ? "active"
                  : null
              }
            >
              About Me
            </span>
          </Link>
        </li>
        <li>
          <Link href="/#work_history">
            <span
              className={
                router.pathname ===
                "/#work_history"
                  ? "active"
                  : null
              }
            >
              Work History
            </span>
          </Link>
        </li>
        <li>
          <Link href="/#design">
            <span
              className={
                router.pathname ===
                "/design"
                  ? "active"
                  : null
              }
            >
              Design Work
            </span>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <span
              className={
                router.pathname ===
                "/#projects"
                  ? "active"
                  : null
              }
            >
              Projects
            </span>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <span
              className={
                router.pathname ===
                "/#contact"
                  ? "active"
                  : null
              }
            >
              Contact
            </span>
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
            font-weight: 700;
          }
          li:last-child {
            margin-bottom: 0;
          }
          span {
            color: #1b5e61;
            text-decoration: none;
          }
          span.active {
            border-bottom: 2px solid
              #8f2d56;
          }
        `}
      </style>
    </>
  );
}
