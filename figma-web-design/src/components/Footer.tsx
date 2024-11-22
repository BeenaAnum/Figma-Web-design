import Link from "next/link";

export default function Footer() {
    return (
      <footer className="footer">
        <div className="social-icons">
          <Link href=""><img src="fb.jpg" alt="facebook" /></Link>
          <Link href=""><img src="insta.jpg" alt="instagram" /></Link>
          <Link href=""><img src="twitter.jpg" alt="twitter" /></Link>
          <Link href=""><img src="Linkedin.jpg" alt="linkedin" /></Link>
        </div>
        <p>Copyright ©2020 All rights reserved</p>
      </footer>
    );
  }