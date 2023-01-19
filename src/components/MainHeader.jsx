import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../images/main_header.png"

const MainHeader = () => {
  return (
    <header className="main__header">
    <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Почему стоит купить мой сайт (и меня)</h4>
          <h1>BLABLABLAA</h1>
          <p>Я хотел короче вставить себя вместо этой базовой картинки. Но мне кажется если я так сделаю, то больше не выгнусь обратно</p>
          <Link to="/plans" className="btn lg">Цены</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>

        </div>
    </div>

    </header>
  )
}

export default MainHeader