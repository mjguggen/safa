import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Link from "next/link";


//Assets
import mainbg from '../assets/mainbg.png'
import img4 from '../assets/img4.png'

//Components
import AboutUs from '../components/aboutUs'

//Packages
import {Carousel} from 'react-responsive-carousel'

const Index = (props) => {
  useEffect(() => {
    const fadeIn = document.querySelectorAll(".fade-in")
    const fadeInDelay = document.querySelectorAll(".fade-in-delay")
    const slideLeft = document.querySelectorAll(".slide-in-left")
    const slideRight = document.querySelectorAll(".slide-in-right")
    const slideRightDelay = document.querySelectorAll(".slide-in-right-delay")

    const fadeInOps = {
        root: null,
        threshold: 0,
        rootMargin: "-100px"
    }

    const scrollFadeIn = new IntersectionObserver(function(entries, scrollFade){
        entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear')
            scrollFade.unobserve(entry.target)
        }
        })
    }, fadeInOps)

    fadeIn.forEach(fader => {
        scrollFadeIn.observe(fader)
    });

    fadeInDelay.forEach(fader => {
        scrollFadeIn.observe(fader)
    });

    slideLeft.forEach(fader => {
        scrollFadeIn.observe(fader)
    });

    slideRight.forEach(fader => {
        scrollFadeIn.observe(fader)
    });

    slideRightDelay.forEach(fader => {
        scrollFadeIn.observe(fader)
    });
  }, [])

  return (
    <div className="screen home">
      <div className="main-container">
        <img  
          src={mainbg}
          alt="plant" 
          className="main-bg-img"
        />
        <div className="main-bg-overlay"/>
        <div className="main-title-container">
          <div className="main-title-wrap">
            <div className="main-title">
              {props.language ? 
                "Locally Grown, Organic Produce"
              : 
                'Deegaanku wuu koray, wax soo saarka noolaha'
              }
            </div>
            <div className="title-description">
              {
                props.language ? 
                  'We support immigrant families in Minnesota with an emphasis on Somali and African immigrants by providing regenerative, indigenous farming training and education.'
                : 
                  'Waxaan ku taageernaa qoysaska muhaajiriinta ah ee ku nool gobolka Minnesota xooga la saarayo soogalootiga Soomaalida iyo Afrikaanka ah iyadoo la siinayo dib u soo nooleyn, tabobarro tacliimeed oo u dhashay wadaniga ah iyo waxbarasho.'
              }
              
            </div>

            <div className="main-btn-container">
              <Link href='/about' >
                <div className="btn">
                  {props.language ?
                    "About Us"
                  : 
                    "Nagu saabsan"
                  }
                </div>
              </Link>

              <Link href='/donate' >
                <div className="btn btn-alt">
                  {props.language ?
                    "Donate"
                  :
                    "Ku deeqo"
                  }
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="section-title fade-in">About Us</div>
          <div className="divider"/>
          <div className="fade-in">
            <AboutUs/>
          </div>
        </div>
      </div>

      <div className="container containerDark">
        <div className="split-container">
          <div className="split-left slide-in-left">
            <div className="headline-container">
              <div className="headline">
                Why You'll Love Us
              </div>
            </div>

            <img 
              className="split-left-img fade-in" 
              alt="image"
              src={img4}
            />
            <div className="img-overlay"/>
            <div className="img-overlay3"/>
          </div>
          <div className="split-right fade-in">
            <div className="split-subContainer">
              <div className="sub-headline slide-in-right fade-in">
                There is never been a better time to eat organic. Organic means working with nature.
              </div>
            </div>

            <div  className="split-subContainer slide-in-right fade-in">
              <ul>
                <li>Delicious</li>
                <li>Ethical</li>
                <li>Sustainable</li>
                <li>Seasonal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="section-title fade-in">News</div>
          <div className="divider"/>
          <div className="fade-in">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              background="transparent"
              classname="carousel"
              style={{
                background: 'transparent'
              }}
            >
              <div className="article">
                <div className="title">
                  Article 1 Title
                </div>
                <div className="img-container">
                  <img src={img4} className="img"/>
                </div>
              </div>

              <div className="article">
                <div className="title">
                  Article 2 Title
                </div>
                <div className="img-container">
                  <img src={img4} className="img"/>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  language: state.language.language
})

export default connect(mapStateToProps, {

})(Index)