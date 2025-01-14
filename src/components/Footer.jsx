import LogoFooter from '../../public/img/dc-logo-bg.png'
import Facebook from '../../public/img/footer-facebook.png'
import Periscope from '../../public/img/footer-periscope.png'
import Pinterest from '../../public/img/footer-pinterest.png'
import Twitter from '../../public/img/footer-twitter.png'
import Youtube from '../../public/img/footer-youtube.png'


const Footer = (props) => {

  const listFooter = props.listFooter;

  return (
    <footer>
      <section className="list">
        <div className="container-list d-flex">
          <div>
            <div>
              <h3>dc comics</h3>
              <ul>
                {listFooter.dcComics.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>shop</h3>
              <ul>
                {listFooter.shop.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dc-list">
            <h3>dc</h3>
            <ul>
              {listFooter.dc.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dc-list">
            <h3>sites</h3>
            <ul>
              {listFooter.sites.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <img id='logo-footer' src={LogoFooter} alt="" />
          </div>

        </div>
      </section>

      <section className='social-icons'>
        <div className='d-flex container-social'>
          <button>SIGN-UP NOW!</button>
          <div className='d-flex social'>
            <p>FOLLOW US</p>
            <img id='social' src={Facebook} alt="" />
            <img id='social' src={Twitter} alt="" />
            <img id='social' src={Youtube} alt="" />
            <img id='social' src={Pinterest} alt="" />
            <img id='social' src={Periscope} alt="" />
          </div>
        </div>

      </section>
    </footer>
  )
}

export default Footer