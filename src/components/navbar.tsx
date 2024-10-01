import { SiGithub } from "react-icons/si";

export default function Navbar() {
  const styles = {
    display: "unset"
  }
    return (
        <nav className="font-semibold font-mona text-neutral-200 text-[1.25vw] p-[1.25vw]" style={styles}>
              <ul className="flex gap-[1vw] mx-auto w-fit sticky backdrop-blur-xl">
                <li><a href="/about">About Us</a></li>
                <li><a href="combatwombats.vercel.app/docs">Docs</a></li>
                <li className="font-bold"><a href="'/">Ace</a></li>
                <li><a href="/sponsors">Sponsors</a></li>
                <li><a href="/outreach">Outreach</a></li>
              </ul>
        </nav>
    )
}