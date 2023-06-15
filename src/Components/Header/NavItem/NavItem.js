function NavItem(props) {
  const handleClick = () => {
    var scrolling;
    var phoneScrolling = props.phoneScrolling;
    var tabletScrolling = props.tabletScrolling;
    var smallPhoneScroll = props.smallPhoneScroll;
    if (window.innerWidth <= 412 && window.innerWidth < 425) {
      scrolling = smallPhoneScroll;
    } else if (window.innerWidth >= 425 && window.innerWidth < 768) {
      scrolling = phoneScrolling;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      scrolling = tabletScrolling;
    } else if (window.innerWidth >= 1024) {
      scrolling = props.scrolling;
    }
    window.scrollTo({ top: scrolling, behavior: "smooth" });
  };
  return (
    <li className="nav-item mx-auto" id={props.id}>
      <span className="nav-links" onClick={handleClick}>
        {props.name}
      </span>
    </li>
  );
}

export default NavItem;
