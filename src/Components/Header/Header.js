import "./Header.css";
import "../../Global.css";
import NavItem from "./NavItem/NavItem";
import HeaderColor from "./AnimateFC/HeaderColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  <HeaderColor />;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="text-white fs-3" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <NavItem
                name="About me"
                id="aboutLink"
                scrolling={411}
                smallPhoneScroll={564}
                phoneScrolling={490}
                tabletScrolling={570}
              />
              <NavItem
                name="Services"
                id="servicesLink"
                scrolling={920}
                smallPhoneScroll={1092}
                phoneScrolling={1108}
                tabletScrolling={1016}
              />
              <NavItem
                name="Projects"
                id="projectsLink"
                scrolling={1500}
                smallPhoneScroll={2292}
                phoneScrolling={2365}
                tabletScrolling={1948}
              />
              <NavItem
                name="Contacts"
                id="contactsLink"
                scrolling={2500}
                smallPhoneScroll={3535}
                phoneScrolling={3741}
                tabletScrolling={3200}
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
