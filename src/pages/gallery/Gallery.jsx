import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_3.jpg"
import ScrollToTop from "react-scroll-to-top"
import "./gallery.css"


const Gallery = () => {
  const galerreyLength = 15;
  const images = [];

  for(let i =1; i<= galerreyLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
      <Header title="Мемы" image={HeaderImage}>
        Тут просто наборчик мемов. Почему бы и нет. Вы их видели, возможно, но посмотрите ещё раз
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image,index) =>{
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
      <ScrollToTop smooth />
    </>
  )
}

export default Gallery