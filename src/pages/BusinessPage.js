import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BusinessPage.css";
const BusinessPage = () => {
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

  return (
    <div className="business-page">
      <div className="hero-header-section10">
        <div className="navbar2">
          <div className="nav-container2">
            <div className="linkscontainer2">
              <div className="logo16">
                <div className="logo-wrap16">
                  <div className="logomark16">
                    <img
                      className="content-icon16"
                      alt=""
                      src="/content1.svg"
                    />
                  </div>
                  <img
                    className="logotype-icon16"
                    alt=""
                    src="/logotype1.svg"
                  />
                </div>
              </div>
              <div className="links-nav2">
                <div className="dropdown-header-navigation-tri22">
                  <div className="logo16">
                    <div className="button-base103">
                      <div className="text153">Personal</div>
                      <img
                        className="chevron-down-icon22"
                        alt=""
                        src="/chevrondown.svg"
                      />
                    </div>
                  </div>
                </div>
                <Link
                  className="dropdown-header-navigation-tri23"
                  to="/business-page"
                >
                  <div className="logo16">
                    <div className="button-base103">
                      <div className="text153">Business</div>
                      <img
                        className="chevron-down-icon22"
                        alt=""
                        src="/chevrondown1.svg"
                      />
                    </div>
                  </div>
                </Link>
                <div className="logo16">
                  <div className="button-base105">
                    <div className="text153">Help</div>
                  </div>
                </div>
              </div>
              <img className="icon-menu2" alt="" src="/-icon-menu.svg" />
            </div>
            <div className="navigation-actions11">
              <button
                className="loginbtn2"
                autoFocus
                id="login-btn"
                onClick={onLoginBtnClick}
              >
                <div className="button-base106">
                  <b className="text156">Log in</b>
                </div>
              </button>
              <div className="component2">
                <div className="button-base107">
                  <b className="text153">Book demo</b>
                </div>
              </div>
              <button
                className="loginbtn2"
                autoFocus
                onClick={onSignupBtnClick}
              >
                <button
                  className="button-base108"
                  autoFocus
                  onClick={onButtonBaseClick}
                >
                  <b className="text158">Sign up</b>
                </button>
              </button>
            </div>
          </div>
        </div>
        <div className="business-section">
          <div className="grow-business">
            <div className="heading-and-supporting-text19">
              <div className="more-pathners">
                <div className="supporting-text34">Visaro for business</div>
                <b className="heading20">Grow your business with Visaro Pay</b>
              </div>
              <div className="supporting-text35">
                Offer flexible payments to your customers now! Visaro for
                Business is the key.
              </div>
            </div>
            <div className="actions-parent">
              <div className="actions21">
                <div className="providerbtn">
                  <div className="button-base109">
                    <b className="text159">Contact Sales</b>
                  </div>
                </div>
                <div className="button101">
                  <div className="button-base110">
                    <b className="text159">Sign up</b>
                  </div>
                </div>
              </div>
              <div className="supporting-text36">
                Talk to an account specialist to get started, +234-13-456-7890.
              </div>
            </div>
            <div className="macbook-pro-16-mockup">
              <img className="v-icon" alt="" src="/v.svg" />
              <img
                className="macbook-pro-16-mockup-child"
                alt=""
                src="/rectangle-41795@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="tailored-business">
          <div className="more-pathners">
            <div className="heading-and-supporting-text20">
              <div className="heading-and-subheading">
                <b className="subheading1">Offerings</b>
                <b className="heading20">
                  Solutions tailored for your business in mind
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="accepts-patments">
          <div className="container41">
            <div className="content74">
              <div className="icon-and-text6">
                <div className="heading-and-supporting-text21">
                  <b className="heading22">
                    Accept payments online and in person
                  </b>
                  <div className="supporting-text37">
                    Offer the most popular ways to pay. Process all major credit
                    and debit cards, too. Your customers don’t even need Visaro
                    to pay.
                  </div>
                  <div className="actions22">
                    <div className="logo16">
                      <div className="button-base111">
                        <b className="text161">Start accepting payments</b>
                        <img
                          className="minus-circle-icon"
                          alt=""
                          src="/arrowright7.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content75">
              <img
                className="content-child2"
                alt=""
                src="/rectangle-41796@2x.png"
              />
              <div className="notification-item8">
                <div className="content76">
                  <div className="avatar-label-group8">
                    <div className="text-and-supporting-text19">
                      <div className="text162">Pay Later</div>
                      <div className="supporting-text38">
                        3 interest-free payments due every month starting today.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-circle1">
                  <div className="ring1">
                    <div className="background1" />
                    <div className="line1" />
                    <div className="text163">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="acess-loans">
          <div className="container42">
            <div className="content77">
              <img
                className="content-child3"
                alt=""
                src="/rectangle-41797@2x.png"
              />
              <div className="notification-item9">
                <div className="content78">
                  <div className="avatar-label-group9">
                    <img
                      className="avatar-icon6"
                      alt=""
                      src="/avatar6@2x.png"
                    />
                    <div className="text-and-supporting-text20">
                      <div className="text162">Visaro Business</div>
                      <div className="supporting-text39">
                        Your business loan has been approved.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content79">
              <div className="icon-and-text7">
                <div className="heading-and-supporting-text22">
                  <b className="heading22">Access to Visaro Business loan</b>
                  <div className="supporting-text37">
                    Meet Visaro Business Loan, a fixed-term small business loan
                    based on your overall business health. Loans range from
                    ₦500,000-₦1,000,000 for first-time borrowers and up to
                    ₦10,000,000 for repeat borrowers.
                  </div>
                  <div className="actions22">
                    <div className="logo16">
                      <div className="button-base111">
                        <b className="text161">Learn more</b>
                        <img
                          className="minus-circle-icon"
                          alt=""
                          src="/arrowright7.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quote-section1">
        <div className="container43">
          <div className="more-pathners">
            <div className="more-pathners">
              <b className="quote2">
                Easily receive payment online, in-person, or on-the-go. Send
                invoices and stay up-to-date with your latest sales. Let's
                continue to grow together.
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="more-value">
        <div className="more-pathners">
          <div className="heading-and-supporting-text23">
            <div className="heading-and-subheading1">
              <b className="quote2">Get more value from through partnerships</b>
            </div>
            <div className="supporting-text41">
              It’s easy to connect your online store to your Visaro Business
              account. And you can connect to other tools like your accounting,
              inventory management, and marketing automation software.
            </div>
          </div>
        </div>
        <div className="logo-colage">
          <div className="grow-business">
            <div className="row8">
              <img className="notion-icon" alt="" src="/notion.svg" />
              <img className="slack-icon" alt="" src="/slack.svg" />
              <img className="notion-icon" alt="" src="/google-drive.svg" />
              <img className="notion-icon" alt="" src="/intercom.svg" />
              <img className="notion-icon" alt="" src="/jira.svg" />
              <img className="slack-icon" alt="" src="/dropbox.svg" />
              <img className="slack-icon" alt="" src="/stripe.svg" />
              <img className="notion-icon" alt="" src="/zapier.svg" />
            </div>
            <div className="row8">
              <img className="notion-icon" alt="" src="/figma.svg" />
              <img className="notion-icon" alt="" src="/confluence.svg" />
              <img className="notion-icon" alt="" src="/mailchimp.svg" />
              <img className="notion-icon" alt="" src="/zendesk.svg" />
              <img className="slack-icon" alt="" src="/gcalendar.svg" />
              <img className="slack-icon" alt="" src="/whatsapp.svg" />
              <img className="slack-icon" alt="" src="/discord.svg" />
              <img className="notion-icon" alt="" src="/bitbucket.svg" />
            </div>
          </div>
        </div>
        <div className="solution-providerbtn">
          <div className="providerbtn">
            <div className="button-base113">
              <b className="text153">Browse all solution providers</b>
            </div>
          </div>
        </div>
      </div>
      <div className="quote-section2">
        <div className="container44">
          <div className="content82">
            <div className="grow-business">
              <div className="quote3">
                Visaro has saved us thousands of hours of work and has unlock
                data insights we never thought possible.
              </div>
              <div className="avatar-and-text">
                <img className="avatar-icon7" alt="" src="/avatar7@2x.png" />
                <div className="text-and-supporting-text21">
                  <div className="text167">Koray Okumus</div>
                  <div className="supporting-text42">CEO, Bakers Inc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-section">
        <div className="container45">
          <div className="more-pathners">
            <div className="heading-and-supporting-text24">
              <b className="heading25">Frequently asked questions</b>
              <div className="supporting-text41">
                Everything you need to know about the product and billing.
              </div>
            </div>
          </div>
        </div>
        <div className="container46">
          <div className="content84">
            <div className="more-pathners">
              <div className="content85">
                <div className="text-and-supporting-text22">
                  <div className="text167">
                    Is there a free trial available?
                  </div>
                  <div className="supporting-text42">
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </div>
                </div>
                <div className="icon-wrap">
                  <img
                    className="minus-circle-icon"
                    alt=""
                    src="/minuscircle.svg"
                  />
                </div>
              </div>
            </div>
            <div className="faq-item1">
              <div className="divider6" />
              <div className="content85">
                <div className="content76">
                  <div className="text167">Can I change my plan later?</div>
                </div>
                <div className="icon-wrap">
                  <img
                    className="minus-circle-icon"
                    alt=""
                    src="/pluscircle.svg"
                  />
                </div>
              </div>
            </div>
            <div className="faq-item1">
              <div className="divider6" />
              <div className="content85">
                <div className="content76">
                  <div className="text167">
                    What is your cancellation policy?
                  </div>
                </div>
                <div className="icon-wrap">
                  <img
                    className="minus-circle-icon"
                    alt=""
                    src="/pluscircle.svg"
                  />
                </div>
              </div>
            </div>
            <div className="faq-item1">
              <div className="divider6" />
              <div className="content85">
                <div className="content76">
                  <div className="text167">
                    Can other info be added to an invoice?
                  </div>
                </div>
                <div className="icon-wrap">
                  <img
                    className="minus-circle-icon"
                    alt=""
                    src="/pluscircle.svg"
                  />
                </div>
              </div>
            </div>
            <div className="faq-item4">
              <div className="divider6" />
              <div className="content85">
                <div className="content76">
                  <div className="supporting-text34">
                    How does billing work?
                  </div>
                </div>
                <div className="icon-wrap">
                  <img
                    className="minus-circle-icon"
                    alt=""
                    src="/pluscircle.svg"
                  />
                </div>
              </div>
            </div>
            <div className="faq-item4">
              <div className="divider6" />
              <div className="content85">
                <div className="content76">
                  <div className="supporting-text34">
                    How do I change my account email?
                  </div>
                </div>
                <div className="icon-wrap">
                  <img
                    className="minus-circle-icon"
                    alt=""
                    src="/pluscircle.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container47">
          <div className="content91">
            <div className="avatar-group">
              <img className="avatar-icon8" alt="" src="/avatar8@2x.png" />
              <img className="avatar-icon9" alt="" src="/avatar9@2x.png" />
              <img className="avatar-icon10" alt="" src="/avatar10@2x.png" />
            </div>
            <div className="heading-and-supporting-text25">
              <div className="supporting-text34">Still have questions?</div>
              <div className="supporting-text45">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </div>
            </div>
            <div className="actions24">
              <div className="providerbtn">
                <div className="button-base114">
                  <b className="text153">Get in touch</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quote-section3">
        <div className="container48">
          <div className="more-pathners">
            <div className="content92">
              <div className="heading-and-supporting-text26">
                <div className="more-pathners">
                  <b className="quote2">
                    We support businesses just like yours
                  </b>
                </div>
                <div className="supporting-text46">
                  Every business needs a reliable partner. From secure payment
                  processing to helpful business insights, we’re here for you.
                </div>
              </div>
              <div className="actions-container">
                <div className="actions21">
                  <div className="providerbtn">
                    <div className="button-base109">
                      <b className="text159">Contact Sales</b>
                    </div>
                  </div>
                  <div className="button101">
                    <div className="button-base110">
                      <b className="text159">Sign up</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer3">
        <div className="container50">
          <div className="footer-links6">
            <div className="logo-and-links2">
              <div className="logo16">
                <div className="logo-wrap16">
                  <div className="logomark16">
                    <img
                      className="content-icon16"
                      alt=""
                      src="/content3.svg"
                    />
                  </div>
                  <img
                    className="logotype-icon16"
                    alt=""
                    src="/logotype1.svg"
                  />
                </div>
              </div>
              <div className="footer-links6">
                <div className="footer-link18">
                  <div className="logo16">
                    <div className="button-base105">
                      <b className="text153">Business</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link18">
                  <div className="logo16">
                    <div className="button-base105">
                      <b className="text153">Contacts</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link18">
                  <div className="logo16">
                    <div className="button-base105">
                      <b className="text153">Fees</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link18">
                  <div className="logo16">
                    <div className="button-base105">
                      <b className="text153">Careers</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link18">
                  <div className="logo16">
                    <div className="button-base105">
                      <b className="text153">Help</b>
                    </div>
                  </div>
                </div>
                <div className="footer-link18">
                  <div className="logo16">
                    <div className="button-base105">
                      <b className="text153">Privacy</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter2">
              <b className="heading28">Stay up to date</b>
              <div className="email-capture2">
                <div className="input-field19">
                  <div className="input-field-base19">
                    <div className="input-field-base19">
                      <div className="label20">Email</div>
                      <div className="input26">
                        <div className="content93">
                          <img className="mail-icon2" alt="" src="/mail2.svg" />
                          <div className="text183">Enter your email</div>
                        </div>
                        <img
                          className="help-icon2"
                          alt=""
                          src="/help-icon2.svg"
                        />
                      </div>
                    </div>
                    <div className="hint-text21">
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <div className="button113">
                  <div className="button-base114">
                    <b className="text153">Subscribe</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-appbtn2">
            <div className="content94">
              <div className="content76">
                <div className="actions26">
                  <img
                    className="mobile-app-store-badge6"
                    alt=""
                    src="/mobile-app-store-badge6.svg"
                  />
                  <img
                    className="mobile-app-store-badge7"
                    alt=""
                    src="/mobile-app-store-badge7.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container51">
          <div className="divider11" />
          <div className="content95">
            <div className="text183">
              © 2023 Visaro LLC All rights reserved.
            </div>
            <div className="social-icons2">
              <img
                className="minus-circle-icon"
                alt=""
                src="/social-icon20.svg"
              />
              <img
                className="minus-circle-icon"
                alt=""
                src="/social-icon21.svg"
              />
              <img
                className="minus-circle-icon"
                alt=""
                src="/social-icon16.svg"
              />
              <img
                className="minus-circle-icon"
                alt=""
                src="/social-icon17.svg"
              />
              <img
                className="minus-circle-icon"
                alt=""
                src="/social-icon22.svg"
              />
              <img className="social-icon25" alt="" src="/social-icon23.svg" />
            </div>
            <div className="footer-links8">
              <div className="text153">Terms</div>
              <div className="text153">Privacy</div>
              <div className="text153">Cookies</div>
            </div>
          </div>
          <div className="avatar-label-group8">
            <div className="text183" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
