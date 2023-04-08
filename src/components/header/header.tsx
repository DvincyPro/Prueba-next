import Link from "next/link";
export const Header = () => (
  <header>
    <h2 className="title_second" >THE ENERGY FITNESS SPECIALIST</h2>
    <h1 className="title">Quantum Fitness</h1>
    <nav className="nav" >
      <Link className="link" href="/" passHref>
        <div>Home</div>
      </Link>
      <Link className="link" href="/events" passHref>
        <div>Servicios</div>
      </Link>
      <Link className="link" href="/about-us" passHref>
        <div>About me</div>
      </Link>
      {/* <a href="">Contacto</a> */}
    </nav>
  </header>
);
