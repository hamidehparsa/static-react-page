import logo from "../logo.svg";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-logopart">
        <img src={logo} className="Navbar-logo" alt="logo" />
        <h3 className="Navbar-title">ReactFacts</h3>
      </div>

      <h4 className="Navbar-subtitle">React Course - Project 1</h4>
    </nav>
  );
}
