import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  const navigate = useNavigate();

  const onLoginBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignupBtnClick = useCallback(() => {
    navigate("/country");
  }, [navigate]);

  const onButtonBaseClick = useCallback(() => {
    navigate("/country");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButton1Click = useCallback(() => {
    navigate("/sign-up-for-visaro1");
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="navbar">
        <div className="nav-container">
          <div className="linkscontainer">
            <div className="logo1">
              <div className="logo-wrap1">
                <div className="logomark1">
                  <img className="content-icon1" alt="" src="/content1.svg" />
                </div>
                <img className="logotype-icon1" alt="" src="/logotype1.svg" />
              </div>
            </div>
            <div className="links-nav">
              <div className="dropdown-header-navigation-tri">
                <div className="logo1">
                  <div className="button-base5">
                    <div className="text10">Personal</div>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
              </div>
              <Link
                className="dropdown-header-navigation-tri1"
                to="/business-page"
              >
                <div className="logo1">
                  <div className="button-base5">
                    <div className="text10">Business</div>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
              </Link>
              <div className="logo1">
                <div className="button-base7">
                  <div className="text10">Help</div>
                </div>
              </div>
            </div>
            <img className="icon-menu" alt="" src="/-icon-menu.svg" />
          </div>
          <div className="navigation-actions1">
            <button
              className="loginbtn"
              autoFocus
              id="login-btn"
              onClick={onLoginBtnClick}
            >
              <div className="button-base8">
                <b className="text13">Log in</b>
              </div>
            </button>
            <div className="component">
              <div className="button-base9">
                <b className="text10">Book demo</b>
              </div>
            </div>
            <div className="loginbtn" autoFocus onClick={onSignupBtnClick}>
              <button
                className="button-base10"
                autoFocus
                onClick={onButtonBaseClick}
              >
                <b className="text15">Sign up</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-section">
        <div className="bpmcontainer">
          <div className="content4">
            <div className="heading-and-supporting-text1">
              <div className="heading-and-badge1">
                <div className="badge-group">
                  <button className="badge" autoFocus>
                    <div className="badge-base">
                      <div className="text16">New feature</div>
                    </div>
                  </button>
                  <div className="content5">
                    <div className="message">Check out the *New Feature*</div>
                    <img
                      className="arrow-right-icon"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
                <b className="heading1">Buy. Pay. Manage</b>
              </div>
              <div className="supporting-text1">
                Get started by downloading the app on your phone.
              </div>
            </div>
            <div className="actions1">
              <button className="button8" autoFocus data-animate-on-scroll>
                <div className="button-base11">
                  <img
                    className="smartphone-icon"
                    alt=""
                    src="/smartphone.svg"
                  />
                  <b className="text17">Download app</b>
                </div>
              </button>
              <button className="loginbtn" autoFocus onClick={onButton1Click}>
                <div className="button-base12">
                  <b className="text18">Sign up</b>
                </div>
              </button>
            </div>
          </div>
        </div>
        <img
          className="fiest-container-icon"
          alt=""
          src="/fiest-container@2x.png"
        />
      </div>
      <div className="search-section">
        <div className="content6">
          <div className="icon-and-text">
            <div className="heading-and-supporting-text2">
              <b className="heading2">
                Looking for a hassle-free way to get loans and funding?
              </b>
              <div className="supporting-text2">
                Get access to credit at the point of sales (POS).
              </div>
              <div className="input-field5">
                <div className="input-field-base5">
                  <div className="input-field-base5">
                    <div className="label5">Email</div>
                    <div className="input5">
                      <div className="content7">
                        <img
                          className="chevron-down-icon"
                          alt=""
                          src="/search.svg"
                        />
                        <div className="text19">
                          Hospitals, aviation centers
                        </div>
                      </div>
                      <img
                        className="arrow-right-icon"
                        alt=""
                        src="/arrowright1.svg"
                      />
                    </div>
                  </div>
                  <div className="hint-text5">This is an error message.</div>
                </div>
              </div>
              <div className="actions2">
                <div className="button10">
                  <div className="button-base13">
                    <b className="text20">Register your business now</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content8">
          <img className="content-child" alt="" src="/rectangle-4179@2x.png" />
          <div className="notification-item">
            <div className="content9">
              <div className="avatar-label-group">
                <img className="avatar-icon" alt="" src="/avatar@2x.png" />
                <div className="text-and-supporting-text">
                  <div className="text21">
                    <span className="olivia-rhye">
                      <span className="olivia-rhye1">Olivia Rhye</span>
                      <span>{`                                       `}</span>
                    </span>
                    <span>
                      <span>now</span>
                    </span>
                  </div>
                  <div className="supporting-text3">Fund request accepted!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tailored-soltion">
        <b className="subheading">Products</b>
        <b className="heading3">Solutions tailored for the future</b>
      </div>
      <div className="bnpl-section">
        <div className="container3">
          <div className="content10">
            <img
              className="content-item"
              alt=""
              src="/rectangle-41791@2x.png"
            />
            <div className="notification-item1">
              <div className="text-and-supporting-text">
                <div className="avatar-label-group1">
                  <div className="text-and-supporting-text1">
                    <img className="text-icon" alt="" src="/text.svg" />
                    <img
                      className="supporting-text-icon"
                      alt=""
                      src="/supporting-text.svg"
                    />
                  </div>
                </div>
              </div>
              <img className="ring-icon" alt="" src="/ring.svg" />
            </div>
          </div>
          <div className="content12">
            <div className="icon-and-text1">
              <div className="heading-and-supporting-text3">
                <img className="heading-icon" alt="" src="/heading.svg" />
                <img
                  className="supporting-text-icon1"
                  alt=""
                  src="/supporting-text1.svg"
                />
                <div className="logo1">
                  <div className="logo1">
                    <div className="button-base14">
                      <b className="text22">Buy now, pay later</b>
                      <img
                        className="smartphone-icon"
                        alt=""
                        src="/arrowright2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fin-solution">
        <div className="content13">
          <img className="content-inner" alt="" src="/rectangle-41792.svg" />
          <img className="lock-1-icon" alt="" src="/lock-1@2x.png" />
        </div>
        <div className="content14">
          <div className="icon-and-text2">
            <div className="heading-and-supporting-text4">
              <b className="heading4">Financial Tech Solutions</b>
              <div className="supporting-text4">
                We have services from Digital Wallets, Loans, API Service, Smart
                Cards, E-commerce,, Bills and so much more.
              </div>
              <div className="actions4">
                <div className="logo1">
                  <div className="button-base14">
                    <b className="text22">Learn more</b>
                    <img
                      className="smartphone-icon"
                      alt=""
                      src="/arrowright3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="digital-solution">
        <div className="content15">
          <div className="icon-and-text1">
            <div className="heading-and-supporting-text4">
              <b className="heading4">Digital Solutions</b>
              <div className="supporting-text4">
                There is Digital Transformation, Digital Identity, Biometrics,
                E-governance, Smart City and so on.
              </div>
              <div className="actions5">
                <div className="button13">
                  <div className="button-base16">
                    <b className="text19">Register your business now</b>
                    <img
                      className="smartphone-icon"
                      alt=""
                      src="/arrowright4.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content16">
          <div className="rectangle-div" />
          <img
            className="virtual-city-1-icon"
            alt=""
            src="/virtualcity-1@2x.png"
          />
        </div>
      </div>
      <div className="edtech">
        <div className="content17">
          <img
            className="rectangle-icon"
            alt=""
            src="/rectangle-41793@2x.png"
          />
          <div className="notification-item2">
            <div className="content18">
              <div className="avatar-label-group">
                <img className="avatar-icon" alt="" src="/avatar1@2x.png" />
                <div className="text-and-supporting-text">
                  <div className="text25">
                    <span className="olivia-rhye">
                      <span className="olivia-rhye1">Olivia Rhye</span>
                      <span>{`                                       `}</span>
                    </span>
                    <span>
                      <span>now</span>
                    </span>
                  </div>
                  <div className="supporting-text6">Fund request accepted!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content19">
          <div className="icon-and-text4">
            <div className="heading-and-supporting-text6">
              <b className="heading6">Ed-Tech Solutions</b>
              <div className="supporting-text7">{`E-learning & Distant Learning management services, Web/Portal Designing and Smart Students ID.`}</div>
              <div className="actions6">
                <div className="logo1">
                  <div className="button-base17">
                    <b className="text26">Register your business now</b>
                    <img
                      className="smartphone-icon"
                      alt=""
                      src="/arrowright5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="content20">
          <div className="icon-and-text5">
            <div className="heading-and-supporting-text4">
              <b className="heading4">Agro Services with a difference</b>
              <div className="supporting-text4">
                We also offer end-to-end agricultural solutions.
              </div>
              <div className="actions6">
                <div className="logo1">
                  <div className="button-base14">
                    <b className="text22">Register your business now</b>
                    <img
                      className="smartphone-icon"
                      alt=""
                      src="/arrowright6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content21">
          <img
            className="content-child1"
            alt=""
            src="/rectangle-41794@2x.png"
          />
          <div className="notification-item3">
            <div className="text-and-supporting-text">
              <div className="avatar-label-group1">
                <div className="text-and-supporting-text1">
                  <div className="text28">Pay Later</div>
                  <div className="supporting-text9">
                    3 interest-free payments due every month starting today.
                  </div>
                </div>
              </div>
            </div>
            <div className="progress-circle">
              <div className="ring">
                <div className="background" />
                <div className="line" />
                <div className="text29">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quote-section">
        <div className="quote-and-attribution">
          <b className="quote">
            <span>{`⁩We have over 170 million people without health insurance cover. The idea is to offer `}</span>
            <span className="visaro-pay-bnpl">Visaro Pay (BNPL) service</span>
            <span>{` to customers at the point of their needs: emergencies (Saving Lives). `}</span>
          </b>
          <div className="quote1">
            *Our market fit or strategy is to partner with Health and Aviation
            partners.
          </div>
        </div>
      </div>
      <div className="health-features">
        <div className="phm-container">
          <div className="heading-and-supporting-text1">
            <div className="bpmcontainer">
              <b className="heading8">Partnered Health Merchants</b>
            </div>
            <div className="supporting-text10">
              Most of the time, customers dont have access to health facilities
              unless they have registered with an HMO. In emergency cases, these
              customers may lose loved ones or lost their life due to inability
              to access funds. With our solution, users can sort emergency
              bills, and have the opportunity to pay back later.
            </div>
          </div>
        </div>
        <div className="health-quad">
          <div className="hsection1">
            <div className="row1">
              <div className="feature-text">
                <div className="rectangle-parent">
                  <img
                    className="frame-child"
                    alt=""
                    src="/rectangle-22@2x.png"
                  />
                  <div className="text-and-supporting-text4">
                    <div className="nav-container">
                      <b className="text30">Eve Health Centre</b>
                      <img
                        className="arrow-narrow-up-right-icon"
                        alt=""
                        src="/arrownarrowupright.svg"
                      />
                    </div>
                    <div className="supporting-text11">Ikeja, Lagos</div>
                  </div>
                  <img className="frame-item" alt="" src="/ellipse-14@2x.png" />
                </div>
              </div>
              <div className="feature-text1">
                <div className="rectangle-parent">
                  <img
                    className="frame-child"
                    alt=""
                    src="/rectangle-221@2x.png"
                  />
                  <div className="text-and-supporting-text4">
                    <div className="nav-container">
                      <b className="text30">Loli B Hospital</b>
                      <img
                        className="arrow-narrow-up-right-icon"
                        alt=""
                        src="/arrownarrowupright.svg"
                      />
                    </div>
                    <div className="supporting-text11">Surulere, Lagos</div>
                  </div>
                  <img className="frame-item" alt="" src="/ellipse-15@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="hsection2">
            <div className="row2">
              <div className="feature-text2">
                <div className="rectangle-parent">
                  <img
                    className="frame-child1"
                    alt=""
                    src="/rectangle-222@2x.png"
                  />
                  <div className="text-and-supporting-text4">
                    <div className="nav-container">
                      <b className="text30">{`Living Seed `}</b>
                      <img
                        className="arrow-narrow-up-right-icon"
                        alt=""
                        src="/arrownarrowupright1.svg"
                      />
                    </div>
                    <div className="supporting-text11">Ikoyi, Lagos</div>
                  </div>
                  <img
                    className="frame-child2"
                    alt=""
                    src="/ellipse-151@2x.png"
                  />
                </div>
              </div>
              <div className="feature-text2">
                <div className="rectangle-parent">
                  <img
                    className="frame-child"
                    alt=""
                    src="/rectangle-223@2x.png"
                  />
                  <div className="text-and-supporting-text4">
                    <div className="nav-container">
                      <b className="text33">Maryville Healthcare</b>
                      <img
                        className="arrow-narrow-up-right-icon"
                        alt=""
                        src="/arrownarrowupright1.svg"
                      />
                    </div>
                    <div className="supporting-text11">Bodija, Ibadan</div>
                  </div>
                  <img
                    className="frame-item"
                    alt=""
                    src="/ellipse-141@2x.png"
                  />
                  <img
                    className="frame-child5"
                    alt=""
                    src="/ellipse-152@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aviation-features">
        <div className="phm-container">
          <div className="heading-and-supporting-text1">
            <div className="bpmcontainer">
              <b className="heading8">Partnered Aviation Merchants</b>
            </div>
            <div className="supporting-text15">
              <p className="most-times-flights">
                Most times, flights are canceled without prior notice and this
                makes people miss their flight- keeping them at risk of losing
                business opportunities, appointments and so on.
              </p>
              <p className="with-visaro-pay">
                With Visaro Pay, you can quickly get the next available tickets
                to your destination and pay back later. The system will check
                and verify whether or not these customers had tickets with any
                airlines, before approval. Registered users can also use the
                solution to get tickets.
              </p>
            </div>
          </div>
        </div>
        <div className="air-quad">
          <div className="asection1">
            <div className="row3">
              <div className="feature-text4">
                <div className="rectangle-parent">
                  <img
                    className="frame-child"
                    alt=""
                    src="/rectangle-224@2x.png"
                  />
                  <div className="text-and-supporting-text4">
                    <div className="nav-container">
                      <b className="text30">Arik Airways</b>
                      <img
                        className="arrow-narrow-up-right-icon"
                        alt=""
                        src="/arrownarrowupright2.svg"
                      />
                    </div>
                    <div className="supporting-text16">Ikeja, Lagos</div>
                  </div>
                  <img
                    className="frame-child7"
                    alt=""
                    src="/ellipse-153@2x.png"
                  />
                </div>
              </div>
              <div className="feature-text4">
                <div className="rectangle-parent">
                  <img
                    className="frame-child"
                    alt=""
                    src="/rectangle-225@2x.png"
                  />
                  <div className="text-and-supporting-text4">
                    <div className="text-parent3">
                      <b className="text30">Dana Airways</b>
                      <img
                        className="arrow-narrow-up-right-icon"
                        alt=""
                        src="/arrownarrowupright2.svg"
                      />
                    </div>
                    <div className="supporting-text16">Surulere, Lagos</div>
                  </div>
                  <img
                    className="frame-child7"
                    alt=""
                    src="/ellipse-142@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="asection2">
            <div className="row3">
              <div className="feature-text6">
                <div className="rectangle-parent3">
                  <img
                    className="frame-child"
                    alt=""
                    src="/rectangle-226@2x.png"
                  />
                  <div className="text-and-supporting-text4">
                    <div className="text-parent4">
                      <b className="text30">Rwand Airways</b>
                      <img
                        className="arrow-narrow-up-right-icon"
                        alt=""
                        src="/arrownarrowupright3.svg"
                      />
                    </div>
                    <div className="supporting-text18">Ikoyi, Lagos</div>
                  </div>
                  <img
                    className="frame-child11"
                    alt=""
                    src="/ellipse-143@2x.png"
                  />
                </div>
              </div>
              <div className="feature-text7">
                <div className="rectangle-parent">
                  <img
                    className="frame-child"
                    alt=""
                    src="/rectangle-227@2x.png"
                  />
                  <div className="text-and-supporting-text4">
                    <div className="text-parent5">
                      <b className="text37">Green Africa Airways</b>
                      <img
                        className="arrow-narrow-up-right-icon"
                        alt=""
                        src="/arrownarrowupright4.svg"
                      />
                    </div>
                    <div className="supporting-text16">Bodija, Ibadan</div>
                  </div>
                  <img
                    className="frame-item"
                    alt=""
                    src="/ellipse-144@2x.png"
                  />
                  <img
                    className="frame-child5"
                    alt=""
                    src="/ellipse-154@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="performance-tracking">
        <div className="container4">
          <div className="growth-performance">
            <div className="heading-and-supporting-text10">
              <b className="heading10">Growth performance tracking made easy</b>
              <div className="supporting-text20">
                Start your 30-day free trial today.
              </div>
            </div>
            <div className="actions1">
              <img
                className="mobile-app-store-badge"
                alt=""
                src="/mobile-app-store-badge.svg"
              />
              <img
                className="mobile-app-store-badge1"
                alt=""
                src="/mobile-app-store-badge1.svg"
              />
            </div>
          </div>
          <div className="phone-notifications">
            <img
              className="iphone-12-pro-mockup"
              alt=""
              src="/iphone-12-pro-mockup.svg"
            />
            <div className="notification-queue">
              <div className="notification-item4">
                <div className="content9">
                  <div className="avatar-label-group">
                    <img className="avatar-icon" alt="" src="/avatar2@2x.png" />
                    <div className="text-and-supporting-text">
                      <div className="text21">
                        <span className="olivia-rhye">
                          <span>Olivia Rhye</span>
                        </span>
                        <span className="followed-you">
                          <span className="olivia-rhye">{` `}</span>
                          <span>followed you!</span>
                        </span>
                      </div>
                      <div className="supporting-text3">@oliviarhye</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notification-item4">
                <div className="content9">
                  <div className="avatar-label-group">
                    <img className="avatar-icon" alt="" src="/avatar3@2x.png" />
                    <div className="text-and-supporting-text">
                      <div className="text21">
                        <span className="olivia-rhye">Candice Wu</span>
                        <span className="followed-you">{` and 2 other gave you kudos on `}</span>
                        <span className="olivia-rhye">{`Clubhouse 101 `}</span>
                        <span className="followed-you">post</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notification-item6">
                <div className="content9">
                  <div className="avatar-label-group">
                    <img className="avatar-icon" alt="" src="/avatar4@2x.png" />
                    <div className="text-and-supporting-text">
                      <div className="text21">
                        <span className="olivia-rhye">Phoenix Baker</span>
                        <span className="followed-you">{` joined your team `}</span>
                        <span className="olivia-rhye">
                          Melbourne Startups Growth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notification-item7">
                <div className="content9">
                  <div className="avatar-label-group">
                    <img className="avatar-icon" alt="" src="/avatar5@2x.png" />
                    <div className="text-and-supporting-text">
                      <div className="text21">
                        <span className="olivia-rhye">Lana Steiner Baker</span>
                        <span className="followed-you">{` just launched `}</span>
                        <span className="olivia-rhye">
                          {" "}
                          The 10k users challenge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container5">
          <div className="footer-links">
            <div className="logo-and-links">
              <div className="logo1">
                <div className="logo-wrap1">
                  <div className="logomark1">
                    <img className="content-icon1" alt="" src="/content2.svg" />
                  </div>
                  <img className="logotype-icon1" alt="" src="/logotype2.svg" />
                </div>
              </div>
              <div className="footer-links1">
                <div className="footer-link">
                  <div className="logo1">
                    <div className="button-base7">
                      <b className="text10">Business</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link">
                  <div className="logo1">
                    <div className="button-base7">
                      <b className="text10">Contacts</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link">
                  <div className="logo1">
                    <div className="button-base7">
                      <b className="text10">Fees</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link">
                  <div className="logo1">
                    <div className="button-base7">
                      <b className="text10">Careers</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link">
                  <div className="logo1">
                    <div className="button-base7">
                      <b className="text10">Help</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link">
                  <div className="logo1">
                    <div className="button-base7">
                      <b className="text10">Privacy</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter">
              <b className="text21">Stay up to date</b>
              <div className="email-capture">
                <div className="input-field6">
                  <div className="input-field-base5">
                    <div className="input-field-base5">
                      <div className="label5">Email</div>
                      <div className="input6">
                        <div className="content27">
                          <img className="mail-icon" alt="" src="/mail.svg" />
                          <div className="text48">Enter your email</div>
                        </div>
                        <img
                          className="help-icon"
                          alt=""
                          src="/help-icon.svg"
                        />
                      </div>
                    </div>
                  
                  </div>
                </div>
                <div className="button22">
                  <div className="button-base25">
                    <b className="text10">Subscribe</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-appbtn">
            <div className="content28">
              <div className="text-and-supporting-text">
                <div className="actions9">
                  <img
                    className="mobile-app-store-badge2"
                    alt=""
                    src="/mobile-app-store-badge2.svg"
                  />
                  <img
                    className="mobile-app-store-badge3"
                    alt=""
                    src="/mobile-app-store-badge3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container6">
          <div className="divider" />
          <div className="content29">
            <div className="footer-text">
              © 2023 Visaro LLC All rights reserved.
            </div>
            <div className="social-icons">
              <img className="smartphone-icon" alt="" src="/social-icon4.svg" />
              <img className="smartphone-icon" alt="" src="/social-icon5.svg" />
              <img className="smartphone-icon" alt="" src="/social-icon6.svg" />
              <img className="smartphone-icon" alt="" src="/social-icon7.svg" />
              <img className="smartphone-icon" alt="" src="/social-icon8.svg" />
              <img className="social-icon9" alt="" src="/social-icon9.svg" />
            </div>
            <div className="footer-links2">
              <div className="text10">Terms</div>
              <div className="text10">Privacy</div>
              <div className="text10">Cookies</div>
            </div>
          </div>
          <div className="content30">
            <div className="text48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
