import Digital from '../../public/img/buy-comics-digital-comics.png'
import Merchandise from '../../public/img/buy-comics-merchandise.png'
import Shop from '../../public/img/buy-comics-shop-locator.png'
import Subscriptions from '../../public/img/buy-comics-subscriptions.png'
import Power from '../../public/img/buy-dc-power-visa.svg'

const Main = () => {
  return (
    <main>

      <section className="text">
        <div className="container-text">
          <h2><i className="fa-solid fa-arrow-right"></i> Content goes here <i className="fa-solid fa-arrow-left"></i></h2>
        </div>
      </section>

      <section className="icons">
        <div className="container-icons">
          <div className='d-flex'>
            <img src={Digital} alt="" />
            <p>digital comics</p>
          </div>

          <div className='d-flex'>
            <img src={Merchandise} alt="" />
            <p>dc merchandise</p>
          </div>

          <div className='d-flex'>
            <img src={Shop} alt="" />
            <p>subscription</p>
          </div>

          <div className='d-flex'>
            <img src={Subscriptions} alt="" />
            <p>comic shop locator</p>
          </div>

          <div className='d-flex'>
            <img src={Power} alt="" />
            <p>dc power visa</p>
          </div>
        </div>

      </section>

    </main>
  )
}

export default Main