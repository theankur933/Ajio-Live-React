// CSS File
import "./assets/css/style.css";

// JSX File
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer";

// Header images
import Ajio from "./assets/images/Ajio.svg";
import wishlistIcon from "./assets/images/wishlistIcon.svg";

const App = () => (
  <>
    <Header logo={Ajio} wishList={wishlistIcon} />
    <Content />
    <Footer />
  </>
);
export default App;
