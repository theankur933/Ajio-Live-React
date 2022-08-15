const Header = (props) => {
  return (
    <>
      <section className="header">
        <div className="guest">
          <ul className="abc">
            <li>
              <a href="http://localhost:3001/">Sign In / Join AJIO</a>
            </li>
            <li>
              <a href="http://localhost:3001/">Customer Care</a>
            </li>
            <li>
              <a href="http://localhost:3001/">Visit AJIOLUXE</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <a href="http://localhost:3001/">
            <img src={props.logo} alt="Logo" />
          </a>
        </div>
        <div className="menu-bar abc">
          <a href="http://localhost:3001/">MEN</a>
          <a href="http://localhost:3001/">WOMEN</a>
          <a href="http://localhost:3001/">KIDS</a>
          <a href="http://localhost:3001/">INDIA</a>
          <a href="http://localhost:3001/">HOME AND KITCHEN</a>
          <input type="text" placeholder="Search AJIO" />
          <a href="http://localhost:3001/">
            <img src={props.wishList} alt="WishList" />
          </a>
        </div>
      </section>
    </>
  );
};
export default Header;
