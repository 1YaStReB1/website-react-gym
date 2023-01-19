import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import ScrollToTop from "react-scroll-to-top"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <Header title="Контакты" image={HeaderImage}>
        Эта страница всегда есть на сайтах. Она мне уже надоела. Тут всё равно ничо не работает. Никаких контактов я вам не дам

      </Header>
        <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:nikolaev-dmitrii2001@mail.ru" target="_blank" rel="noreferrer noopener">
              <MdEmail/>
            </a>
            <a href="!#" target="_blank" rel="noreferrer noopener">
              <BsMessenger/>
            </a>
            <a href="!#" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp/>
            </a>
          </div>
        </div>
        </section>
        <ScrollToTop smooth />
    </>
  )
}

export default Contact