import { Link } from "react-router-dom"
import "./notFound.css"

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Ха ха ха. Лох</h2>
        <Link to="/" className="btn">Вернуться</Link>
      </div>
    </section>
  )
}

export default NotFound