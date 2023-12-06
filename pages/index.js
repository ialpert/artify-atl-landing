import Wrapper from "../layout/wrapper";

import Seo from "../components/common/Seo";
import ContactForm from "../components/home-page/home-1/ContactForm";
import Link from "next/link";

import Image from "next/image";

import { useState, useEffect } from "react";

const MainRoot = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 10) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", changeBackground);
      return () => {
        window.removeEventListener("scroll", changeBackground);
      };
    }, []);


  return (
    <Wrapper> 
      <Seo pageTitle="" />
      <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
                
   <Image
                src="/images/artify-transparent.png"
                alt="logo"
         width={235}
                height={60}
              /> 
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">

          </div>
          {/* /.right-widget */}

        </div>
      </div>
      {/* /.inner-content */}
    </header>

      <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
              Together, let&apos;s <span>Artify Atlanta!</span>
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
            We connect artists of Atlanta, collect resources on creative and ethical AI, and research AI&apos;s impact on community.
            </p>

            <div
        className="fancy-short-banner-thirteen mt-130 lg-mt-100 lg-pt-80 lg-pb-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
       
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Let’s talk with expereince advisors.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        eiusmod tempor incididunt. Ut enim mim veniam, quis
                        nostrud elit lorem dolor.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Fill the <br />
              form
            </div>
            <img
              src="/images/shape/shape_90.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
              layout="intrinsic"
            />
            <img
              src="/images/shape/shape_91.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
              layout="intrinsic"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>Join us in this exciting journey curated by Yana Alpert.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={494}
        height={997}
        src="/images/right.jpg"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
      <Image
        width={528}
        height={997}
        src="/images/left.jpg"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      />
    </div>
    </Wrapper>
  );
};

export default MainRoot;
