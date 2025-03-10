import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import resumePDF from "../assets/resume.pdf"; 

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({ title: "Check out my Portfolio", url })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(url)
        .then(() => alert("Link copied to clipboard!"))
        .catch((error) => alert(`Share this link: ${url}`));
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Dhruv_Patel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Dhruv &nbsp; <span className="sm:block hidden"> | Patel</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) =>
            nav.title === "Contact" ? (
              <>
                <li
                  key="Resume"
                  className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                  onClick={handleResumeDownload}
                >
                  Resume
                </li>
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              </>
            ) : (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  if (nav.title === "Share") {
                    handleShare();
                  } else {
                    setActive(nav.title);
                  }
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) =>
                nav.title === "Contact" ? (
                  <>
                    <li
                      key="Resume"
                      className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white"
                      onClick={() => {
                        handleResumeDownload();
                        setToggle(false);
                      }}
                    >
                      Resume
                    </li>
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-secondary"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  </>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      if (nav.title === "Share") {
                        handleShare();
                      } else {
                        setToggle(false);
                        setActive(nav.title);
                      }
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
