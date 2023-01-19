import React from 'react'
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import ScrollToTop from 'react-scroll-to-top'
import "./about.css"

const About = () => {
  return (
    <>
    <Header title="Обо мне" image={HeaderImage}>
      Так я тоже повторять не буду, иначе не встану. Ваще этот сайт изначально для какого-то зала предназначен, но мне пофигу, он будет обо мне так как я чсв
    </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Я свечуся</h1>
            <p>Оу, ну да. Это я. Лечу навстречу гибели. И стало быть уж хуже некуда. Как я докатился до жизни такой? Чтож ... Не жизнь, а мечта!</p>
            <p>Это из мегамозга, кста, кто не знал. Классный мультик. Советую. Вообще жизнь реально кайфарики, может и вокруг не светится, тогда буду я</p>
            <p></p>
          </div>
        </div>
      </section>


      <section className="about__vision">
        <div className="container about__vision-container">
         
          <div className="about__section-content">
            <h1>Я маньяк </h1>
            <p>Чудище отростило волосы и вышло на охоту. Длинные волосы - интересный опыт. Ни о чём не жалею. Включая покраску. </p>
            <p>Может для кого-то это и является чем-то фрическим, но клал я на того мнение да и всё. Что по кайфу, то и делаю</p>
            
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision Image" />
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission Image" />
          </div>
          <div className="mission__section-content">
            <h1>Я в тележке</h1>
            <p>Блин, это было балдёжно. Тележка в сердце навсегда. Период вуза довольно классный на самом деле. </p>
            <p>Вуз мне нафиг не сдался, по факту, но вот время, проведённое с друзьями реально бесценно. Я б ваще затух если бы их не было</p>
            <p></p>
          </div>
        </div>
      </section>
      <ScrollToTop smooth />
    </>
  )
}

export default About