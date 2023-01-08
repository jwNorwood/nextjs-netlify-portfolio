import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/design">
              <a className={router.pathname === "/design" ? "active" : null}>Design Work</a>
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
              color: #73D2DE;
              font-weight: 400;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #8F2D56;
            }
          `}
        </style>
    </>
  );
}
