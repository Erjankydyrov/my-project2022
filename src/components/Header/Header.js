import "./Header.css";

function Header({ image, title, children }) {
  return (
    <header className="Header container">
      <div className="headerBg">
        <img src={image} alt={title} />
        <section>
          <h1>{title}</h1>
          <p>{children}</p>
        </section>
        <div className="box">
          <h1>{title}</h1>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
