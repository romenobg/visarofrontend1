import { useCallback, useState  } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AccountType.css";

const AccountType = () => {

  const [selectedNav, setSelectedNav] = useState('');
  
  const handleNavChange = (e) => {
  setSelectedNav(e.target.value);
  };
  
  const handleButtonClick = () => {
    
    if (selectedNav === 'personal') {
      // Navigate to page 1
      window.location.href = '/page1';
    } else if (selectedNav === 'business') {
      // Navigate to page 2
      window.location.href = '/page2';
    }
  };

  const navigate = useNavigate();

  const onLoginBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignupBtnClick = useCallback(() => {
    navigate("/sign-up-for-visaro1");
  }, [navigate]);

  const onButtonBaseClick = useCallback(() => {
    navigate("/sign-up-for-visaro1");
  }, [navigate]);

  const onActionsClick = useCallback(() => {
    navigate("/sign-up-for-visaro6");
  }, [navigate]);

  return (
    <div className="account-type">
      <div className="hero-header-section9">
        <div className="navbar1">
          <div className="nav-container1">
            <div className="linkscontainer1">
              <div className="logo14">
                <div className="logo-wrap14">
                  <div className="logomark14">
                    <img className="content-icon14" alt="" src="/content.svg" />
                  </div>
                  <img className="logotype-icon14" alt="" src="/logotype.svg" />
                </div>
              </div>
              <div className="links-nav1">
                <div className="dropdown-header-navigation-tri20">
                  <div className="logo14">
                    <div className="button-base89">
                      <div className="text124">Personal</div>
                      <img
                        className="chevron-down-icon20"
                        alt=""
                        src="/chevrondown.svg"
                      />
                    </div>
                  </div>
                </div>
                <Link
                  className="dropdown-header-navigation-tri21"
                  to="/business-page"
                >
                  <div className="logo14">
                    <div className="button-base89">
                      <div className="text124">Business</div>
                      <img
                        className="chevron-down-icon20"
                        alt=""
                        src="/chevrondown1.svg"
                      />
                    </div>
                  </div>
                </Link>
                <div className="logo14">
                  <div className="button-base91">
                    <div className="text124">Help</div>
                  </div>
                </div>
              </div>
              <img className="icon-menu1" alt="" src="/-icon-menu.svg" />
            </div>
            <div className="navigation-actions10">
              <button
                className="loginbtn1"
                autoFocus
                id="login-btn"
                onClick={onLoginBtnClick}
              >
                <div className="button-base92">
                  <b className="text127">Log in</b>
                </div>
              </button>
              
              <button
                className="loginbtn1"
                autoFocus
                onClick={onSignupBtnClick}
              >
                <button
                  className="button-base94"
                  autoFocus
                  onClick={onButtonBaseClick}
                >
                  <b className="text129">Sign up</b>
                </button>
              </button>
            </div>
          </div>
        </div>
        <div className="section11">
          <div className="container37">
            <div className="container37">
              <div className="heading-and-supporting-text18">
                <div className="container37">
                  <div className="supporting-text30">Sign up for Visaro</div>
                  <b className="heading18">
                    The secure way to pay and get paid.
                  </b>
                </div>
                <div className="supporting-text31">
                  Offer flexible payments to your customers now! Visaro for
                  Business is the key.
                </div>
              </div>
            </div>
          </div>
          <div className="section12">
            <div className="container38">
              <div className="content66">
                <div className="pricing-tier-card">
                  <div className="header11">
                    <div className="heading-and-price">
                      <div className="heading-and-icon">
                        <input
                          className="checkbox-base"
                          type="radio"
                          name="account"
                          value="personal"
                          checked={selectedNav === 'personal'}
                          onChange={handleNavChange}
                          autoFocus
                        />
                      </div>
                      <b className="price">Personal</b>
                      <div className="supporting-text32">
                        Send, spend, and manage your money. All from one app
                      </div>
                    </div>
                  </div>
                  <div className="content67">
                    <div className="check-items">
                      <div className="check-item-text">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon.svg"
                        />
                        <div className="text-wrap">
                          <div className="text130">
                            Manage money, pay bills and more
                          </div>
                        </div>
                      </div>
                      <div className="check-item-text1">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">
                            Shop online without sharing your info
                          </div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing-tier-card1">
                  <div className="header12">
                    <div className="heading-and-price">
                      <div className="heading-and-icon">
                        <input
                          className="checkbox-base1"
                          type="radio"
                          name="account"
                          value="business"
                          checked={selectedNav === 'business'}
                          onChange={handleNavChange}
                          autoFocus
                        />
                      </div>
                      <b className="price">Business</b>
                      <div className="supporting-text32">
                        Get paid online, in store, or on the go. Help grow your
                        business
                      </div>
                    </div>
                  </div>
                  <div className="content68">
                    <div className="check-items1">
                      <div className="check-item-text7">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">
                            Accept many forms of payment so you don’t miss a
                            sale
                          </div>
                        </div>
                      </div>
                      <div className="check-item-text7">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">
                            Easily integrate with tools to help you run your
                            business
                          </div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                      <div className="check-item-text2">
                        <img
                          className="check-icon"
                          alt=""
                          src="/check-icon1.svg"
                        />
                        <div className="text-wrap1">
                          <div className="text130">Another feature</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="actions-wrapper">
              <button className="actions19" autoFocus onClick={handleButtonClick}>
                <div className="button89">
                  <div className="button-base95">
                    <b className="text144">Get Started</b>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="container39">
          <div className="footer-links3">
            <div className="logo-and-links1">
              <div className="logo14">
                <div className="logo-wrap14">
                  <div className="logomark14">
                    <img className="content-icon14" alt="" src="/content.svg" />
                  </div>
                  <img className="logotype-icon14" alt="" src="/logotype.svg" />
                </div>
              </div>
              <div className="footer-links4">
                <div className="footer-link9">
                  <div className="logo14">
                    <div className="button-base91">
                      <b className="text124">Business</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link9">
                  <div className="logo14">
                    <div className="button-base91">
                      <b className="text124">Contacts</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link9">
                  <div className="logo14">
                    <div className="button-base91">
                      <b className="text124">Fees</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link9">
                  <div className="logo14">
                    <div className="button-base91">
                      <b className="text124">Careers</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link9">
                  <div className="logo14">
                    <div className="button-base91">
                      <b className="text124">Help</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link9">
                  <div className="logo14">
                    <div className="button-base91">
                      <b className="text124">Privacy</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter1">
              <b className="heading19">Stay up to date</b>
              <div className="email-capture1">
                <div className="input-field18">
                  <div className="input-field-base18">
                    <div className="input-field-base18">
                      <div className="label19">Email</div>
                      <div className="input25">
                        <div className="content69">
                          <img className="mail-icon1" alt="" src="/mail1.svg" />
                          <div className="text151">Enter your email</div>
                        </div>
                        <img
                          className="help-icon1"
                          alt=""
                          src="/help-icon1.svg"
                        />
                      </div>
                    </div>
                    <div className="hint-text20">
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <div className="button96">
                  <div className="button-base102">
                    <b className="text124">Subscribe</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-appbtn1">
            <div className="content70">
              <div className="text-wrap1">
                <div className="actions20">
                  <img
                    className="mobile-app-store-badge4"
                    alt=""
                    src="/mobile-app-store-badge4.svg"
                  />
                  <img
                    className="mobile-app-store-badge5"
                    alt=""
                    src="/mobile-app-store-badge5.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container40">
          <div className="divider5" />
          <div className="content71">
            <div className="footer-text2">
              © 2023 Visaro LLC All rights reserved.
            </div>
            <div className="social-icons1">
              <img className="social-icon14" alt="" src="/social-icon14.svg" />
              <img className="social-icon14" alt="" src="/social-icon15.svg" />
              <img className="social-icon14" alt="" src="/social-icon16.svg" />
              <img className="social-icon14" alt="" src="/social-icon17.svg" />
              <img className="social-icon14" alt="" src="/social-icon18.svg" />
              <img className="social-icon19" alt="" src="/social-icon19.svg" />
            </div>
            <div className="footer-links5">
              <div className="text124">Terms</div>
              <div className="text124">Privacy</div>
              <div className="text124">Cookies</div>
            </div>
          </div>
          <div className="content72">
            <div className="text151" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
