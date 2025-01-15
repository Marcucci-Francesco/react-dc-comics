import Digital from '/img/buy-comics-digital-comics.png'
import Merchandise from '/img/buy-comics-merchandise.png'
import Shop from '/img/buy-comics-shop-locator.png'
import Subscriptions from '/img/buy-comics-subscriptions.png'
import Power from '/img/buy-dc-power-visa.svg'

const Main = (props) => {
  const comics = props.comics;
  return (

    <main>

      <div className="text"></div>

      <section className='film'>
        <div className="container-text">

          <button>current series</button>
          <div className='film-list'>
            {comics.map(item => (
              <div key={item.id}>
                <img src={item.thumb} alt={item.series} />
                <span>{item.series}</span>
              </div>
            ))}
          </div>
          <div className='button-main'>
            <button>load more</button>
          </div>

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