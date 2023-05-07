import Theme from "./theme"

export default function Header() {
  return (
    <header>
      <nav>
        <div className="left-nav-side">
          <div className="logo">
            <span className="main-logo">V</span>
            <span className="rest-logo">iral Nation</span>
          </div>
        </div>
        <div className="right-nav-side">
          <Theme />
        </div>
      </nav>
    </header>
  );
}
