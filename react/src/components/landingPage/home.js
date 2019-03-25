import React from 'react';
import './style.css';
import langImage from './land.png'
import illustration from './img/illustration-1.svg'
import Steps from './steps.png'
import footerImage from './img/logo-footer.svg'
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container"><a href="./" className="navbar-brand"><img src="img/logo.svg" alt="" className="img-fluid" /></a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">Menu<i className="fa fa-bars ml-2"></i></button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
            </ul><Link to="/login" className="btn btn-primary navbar-btn ml-0 ml-lg-3">Login </Link>
          </div>
        </div>
      </nav>
    </header>
   
    <section className="hero">
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-heading mb-0">Deploy website <br /> quick.</h1>
            <div className="row">
              <div className="col-lg-10">
                <p className="lead text-muted mt-4 mb-4">Upload your UI sketch and deploy your own website in 5 steps.</p>
              </div>
            </div>
            <Link to='/dashboard'><button className="btn btn-primary">Get Started</button></Link>
          </div>
          <div className="col-lg-6"><img src={langImage} alt="..." className="hero-image img-fluid d-none d-lg-block" /></div>
        </div>
      </div>
    </section>
        <section>
      <div className="container">
        <div className="text-center">
          <h2>Anyone can deploy websites. </h2>
          <p className="lead text-muted mt-2">No technical skill or knowledge required to get your website up and running.</p><a href="#" className="btn btn-primary">Learn More</a>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto mt-5"><img src={illustration} alt="..." className="intro-image img-fluid" /></div>
        </div>
      </div>
    </section>
 
    <section className="bg-primary text">
      <div className="container">
        <div className="text-center">
          <h2>Intelligent, Fast and Simple</h2>
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <p className="lead text mt-2">We use complex AI and Deep Learning models combined with stunning User Interface to makes thing <strong>simple</strong> for you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section>
      <div className="container">
        <div className="text-center">
          <h2>Step</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead text-muted mt-2">Just 5 simple steps to get your website online.</p>
                <img src={Steps} width="900px" />
            </div>
          </div>
        </div>
        
       
      </div>
    </section>
  
    <section>
      <div className="container">
        <div className="text-center">
          <h2>Discover Magic</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead text-muted mt-2">Uses AI to create websites out of sketch files.</p><br />
                <iframe frameBorder="0"  width="100%" height="600px" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=654c8bb4-4d99-11e9-8106-0edaf8f81e27"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="bg-gray">
      <div className="container text-center text-lg-left">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h2 className="divider-heading">One-Click Deployment</h2>
            <div className="row">
              <div className="col-lg-10">
                <p className="lead divider-subtitle mt-2 text-muted">Customize your website and then deploy it on server with just one click.</p>
              </div>
            </div><a href="#" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0"><img src="img/illustration-2.svg" alt="" className="divider-image img-fluid" /></div>
        </div>
      </div>
    </section>
    
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="footer-logo"><img src={footerImage} alt="..." className="img-fluid" /></div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <h5 className="footer-heading">Site pages</h5>
            <ul className="list-unstyled">
              <li> <a href="index.html" className="footer-link">Home</a></li>
              <li> <a href="faq.html" className="footer-link">FAQ</a></li>
              <li> <a href="contact.html" className="footer-link">Contact</a></li>
              <li> <a href="text.html" className="footer-link">Text Page</a></li>
            </ul>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <h5 className="footer-heading">Product</h5>
            <ul className="list-unstyled">
              <li> <a href="#" className="footer-link">Why Appton?</a></li>
              <li> <a href="#" className="footer-link">Enterprise</a></li>
              <li> <a href="#" className="footer-link">Blog</a></li>
              <li> <a href="#" className="footer-link">Pricing</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="footer-heading">Resources</h5>
            <ul className="list-unstyled">
              <li> <a href="#" className="footer-link">Download</a></li>
              <li> <a href="#" className="footer-link">Help Center</a></li>
              <li> <a href="#" className="footer-link">Guides</a></li>
              <li> <a href="#" className="footer-link">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left">
              <p className="copyrights-text mb-3 mb-lg-0">&copy; All rights reserved WeBase.</p>
             
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <ul className="list-inline social mb-0">
                <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook"></i></a><a href="#" className="social-link"><i className="fa fa-twitter"></i></a><a href="#" className="social-link"><i className="fa fa-youtube-play"></i></a><a href="#" className="social-link"><i className="fa fa-vimeo"></i></a><a href="#" className="social-link"><i className="fa fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Home;
