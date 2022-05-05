import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <main className="Layout">
      <Nav />

      {children}

      <Footer />
    </main>
  );
}

export default Layout;
