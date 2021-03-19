import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import CartIcon from './cart/CartIcon';
import logo from './img/beats13logo.png';

const Header = () => {
    return (
      <header className="container jumbotron">
      {/* <img className="logoMobile" alt="Branded Logo" src='/static/beats13logo-d7cb7e08dc14ce54945a99af60cfd7a5.png' />
        <ul className="mobileSocial mr-4">
          <li className="iconr"><a href="https://www.facebook.com/Beats13-255769345277413/"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
          <li className="iconr"><a href="https://www.youtube.com/beats13"><FontAwesomeIcon icon={faYoutube}/></a></li>
          <li className="iconr"><a href="https://twitter.com/beats_13"><FontAwesomeIcon icon={faTwitterSquare}/></a></li>
          <li className="iconr"><a href="https://www.instagram.com/beatsone3/"><FontAwesomeIcon icon={faInstagram}/></a></li>
        </ul> */}

        <Navbar className="navbar navbar-expand-lg" expand="lg">
        <a className="navbar-brand" href="/"><img className="logoStyle" alt="Branded Logo" src={logo} /></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar navbar-expand-lg navCust">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link href="/store"><a className="nav-link">Store</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/services"><a className="nav-link">Services</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/about"><a className="nav-link">About</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/contact"><a className="nav-link">Contact</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/merch"><a className="nav-link">Merchandise</a></Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
        <ul className="nav navbar-nav navbar-right navCust">
        <li className="iconr"><a className="socialIcons" href="https://www.facebook.com/Beats13-255769345277413/"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
          <li className="iconr"><a className="socialIcons" href="https://www.youtube.com/beats13"><FontAwesomeIcon icon={faYoutube}/></a></li>
          <li className="iconr"><a className="socialIcons" href="https://twitter.com/beats_13"><FontAwesomeIcon icon={faTwitterSquare}/></a></li>
          <li className="iconr"><a className="socialIcons" href="https://www.instagram.com/beatsone3/"><FontAwesomeIcon icon={faInstagram}/></a></li>
          <li className="iconr"><CartIcon /></li>
        </ul>
      </Navbar>
  </header>

    )
}

export default Header;