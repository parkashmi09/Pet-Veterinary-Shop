import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Pet Veterinary Shop. All rights
        reserved. Made with ❤️ by{" "}
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your Name
        </a>
      </p>
    </footer>
  );
};

export default Footer;
