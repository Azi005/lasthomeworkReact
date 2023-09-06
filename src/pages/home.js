import React from "react";

export default function App() {
  return(
    <div>
      <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li style={{listStyleType: 'none'}} id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
           <img style={{padding: '20px 0 0 0', height: '570px'}} src="http://carterimaging.smugmug.com/Motorcycles/2005-Yamaha-R1-Raven/i-2nJjvmF/0/L/B84E7292-L.jpg" />
      </div>
    </li>
    <li style={{listStyleType: 'none'}} id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
         <img style={{padding: '20px 0 0 0', height: '570px', width: '800px'}} src="https://paultan.org/image/2017/03/Kawasaki_Ninja_H2R-49.jpg" />
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
         <img style={{padding: '20px 0 0 0', height: '570px', width: '800px'}} src="https://www.cycleworld.com/resizer/cM5rIG4m_ckMKzP8NPXsc4GchCk=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/U3NFNEXQOZHEZPTP23GEUD7NUM.jpg" />
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
                  <img style={{padding: '20px 0 0 0', height: '570px', width: '800px', }} src="https://img2.goodfon.ru/original/2880x1800/a/64/honda-cbr600rr-white-black.jpg" />
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section>
    <p style={{textAlign: 'center'}}>Раньше катались на лошадях, а щас на мотоциклах</p>
  <div className="container">
  <nav>
        <ul className="footer-block" style={{ justifyContent:'space-between'}}>
          <li className="text-page1">
             <a href="https://www.instagram.com/japarowww/?hl=ru"><img className="footer-logo" src="https://webstockreview.net/images/instagram-clipart-black-and-white-8.png" /></a>
          </li>
          <li>
            <a className="link-footer" href="https://www.youtube.com/@java_2geektech30">Channel's <br/> My Teacher</a>
          </li>
          <li className="text-page2">
            <a className="link-footer" href="https://geeks.edu.kg/">register <br/> to course</a>
          </li>
        </ul>
      </nav>
  </div>
    </div>
  )
}
