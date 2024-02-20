import React, { Component } from 'react'

export default class FooterSec extends Component {
  render() {
    return (
      <div>
        <div>

<footer
        className="text-center text-lg-start text-white"
        style={{backgroundColor: "#1c2331"}}
        >
  <section
           className="d-flex justify-content-between p-4"
           style={{backgroundColor: "#6351ce"}}
           >
    <div className="me-5 text-center">
      <h5 >Get connected with us on social networks:</h5>
    </div>

    <div>
      <a href="#/" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#/" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#/" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#/" className="text-white me-4">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://newsapi.org/" className="text-white me-4">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://newsapi.org/" className="text-white me-4">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold">UGN</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px", background: "#7c4dff", height: "2px"}}
              />
          <p>
            we provide the free and Useful facilities / services that you must take advantage of.
            So why are you waiting Let's Explore UGN Hub
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold">Products</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px" , backgroundColor: "#7c4dff", height: "2px"}}
              />
          <p>
            <a href="https://nakadeuttam.github.io/my-react-app/"  className="text-white">Text Manupulator</a>
          </p>
          <p>
            <a href="#!" className="text-white">Calculator</a>
          </p>
          <p>
            <a href="#!" className="text-white">Portfolio</a>
          </p>
          <p>
            <a href="#!" className="text-white"></a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold">Useful links</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px" , backgroundColor: "grey" ,  height: "2px"}}
              />
          <p>
            <a href="#!" className="text-white">Your Account</a>
          </p>
          <p>
            <a href="#!" className="text-white">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!" className="text-white">Shipping Rates</a>
          </p>
          <p>
            <a href="#!" className="text-white">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold">Contact</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
              />
          <p><i className="fas fa-home mr-3"></i> Uttam Nakade, Amravati</p>
          <p><i className="fas fa-envelope mr-3"></i> nakadeuttam66@gmail.com</p>
          <p><i className="fas fa-phone mr-3"></i> +91 879 999 40 952</p>
          <p><i className="fas fa-print mr-3"></i> </p>
        </div>
      </div>
    </div>
  </section>
 

 
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2023 Copyright:
    <a className="text-white" href="/"
       >UGN.com</a>
  </div>

</footer>


</div>
      </div>
    )
  }
}
