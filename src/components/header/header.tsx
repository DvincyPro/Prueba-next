import Link from "next/link";
import Image from "next/image";
export const Header = () => (
  <header>
    <h1 className="title">Quantum Fitness</h1>
    <div className="panel">
      <Image alt='logo' src={'/quantum.png'} width={200} height={100}/>
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
    </div>

  </header>
);
