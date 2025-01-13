import LogoFooter from '../../public/img/dc-logo-bg.png'
import Facebook from '../../public/img/footer-facebook.png'
import Periscope from '../../public/img/footer-periscope.png'
import Pinterest from '../../public/img/footer-pinterest.png'
import Twitter from '../../public/img/footer-twitter.png'
import Youtube from '../../public/img/footer-youtube.png'


const Footer = () => {
  return (
    <footer>
      <section className="list">
        <div className="container-list d-flex">
          <div>
            <div>
              <h3>dc comics</h3>
              <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
            </div>

            <div>
              <h3>shop</h3>
              <ul>
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>
          </div>

          <div className="dc-list">
            <h3>dc</h3>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy policy (New)</li>
              <li>Ad Choise</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshps</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>COntact Us</li>
            </ul>
          </div>

          <div className="dc-list">
            <h3>sites</h3>
            <ul>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>

          <img src={LogoFooter} alt="" />

        </div>
      </section>

      <section className='social-icons'>
        <div className='d-flex container-social'>
          <button>SIGN-UP NOW!</button>
          <div className='d-flex social'>
            <p>FOLLOW US</p>
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Youtube} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Periscope} alt="" />
          </div>
        </div>

      </section>
    </footer>
  )
}

export default Footer