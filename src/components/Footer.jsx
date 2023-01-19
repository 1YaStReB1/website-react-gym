import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"



const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer logo" />
          </Link>
          <p>Пасиба шо посмотрели. Гляньте и другие страницы. Соцсети не работают</p>
          <div className="footer__socials">
            <a href="!#"  rel ="noreferrer noopener"><FaLinkedin/></a>
            <a href="!#"  rel ="noreferrer noopener"><FaFacebookF/></a>
            <a href="!#"  rel ="noreferrer noopener"><AiOutlineTwitter/></a>
            <a href="!#"  rel ="noreferrer noopener"><AiFillInstagram/></a>
          </div>
        </article>

       
      </div>

      <div className="footer__coopyright">
        <small>2023 DIMASIK &copy; All Right Reseved</small>
      </div>
    </footer>
  )
}

export default Footer