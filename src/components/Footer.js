import { useMemo } from "react";
import "./Footer.css";
const Footer = ({
  content,
  logotype,
  mail,
  helpIcon,
  mobileAppStoreBadge,
  mobileAppStoreBadge1,
  socialIcon,
  socialIcon1,
  socialIcon2,
  socialIcon3,
  socialIcon4,
  socialIcon5,
  propMarginTop,
}) => {
  const footerStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className="footer1" style={footerStyle}>
      <div className="container35">
        <div className="footer-links">
          <div className="logo-and-links">
            <div className="logo5">
              <div className="logo-wrap5">
                <div className="logomark5">
                  <img className="content-icon5" alt="" src={content} />
                </div>
                <img className="logotype-icon5" alt="" src={logotype} />
              </div>
            </div>
            <div className="footer-links1">
              <div className="footer-link">
                <div className="logo5">
                  <div className="button-base53">
                    <b className="text136">Business</b>
                  </div>
                </div>
              </div>
              <div className="footer-link">
                <div className="logo5">
                  <div className="button-base53">
                    <b className="text136">Contacts</b>
                  </div>
                </div>
              </div>
              <div className="footer-link">
                <div className="logo5">
                  <div className="button-base53">
                    <b className="text136">Fees</b>
                  </div>
                </div>
              </div>
              <div className="footer-link">
                <div className="logo5">
                  <div className="button-base53">
                    <b className="text136">Careers</b>
                  </div>
                </div>
              </div>
              <div className="footer-link">
                <div className="logo5">
                  <div className="button-base53">
                    <b className="text136">Help</b>
                  </div>
                </div>
              </div>
              <div className="footer-link">
                <div className="logo5">
                  <div className="button-base53">
                    <b className="text136">Privacy</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <b className="heading26">Stay up to date</b>
            <div className="email-capture">
              <div className="input-field17">
                <div className="input-field-base17">
                  <div className="input-field-base17">
                    <div className="label18">Email</div>
                    <div className="input24">
                      <div className="content106">
                        <img className="mail-icon" alt="" src={mail} />
                        <div className="text142">Enter your email</div>
                      </div>
                      <img className="help-icon" alt="" src={helpIcon} />
                    </div>
                  </div>
                  <div className="hint-text19">
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className="button49">
                <div className="button-base59">
                  <b className="text136">Subscribe</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-appbtn">
          <div className="content107">
            <div className="app-store-actions">
              <div className="actions27">
                <img
                  className="mobile-app-store-badge2"
                  alt=""
                  src={mobileAppStoreBadge}
                />
                <img
                  className="mobile-app-store-badge3"
                  alt=""
                  src={mobileAppStoreBadge1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container36">
        <div className="divider9" />
        <div className="content108">
          <div className="footer-text">
            © 2023 Visaro LLC All rights reserved.
          </div>
          <div className="social-icons">
            <img className="social-icon8" alt="" src={socialIcon} />
            <img className="social-icon8" alt="" src={socialIcon1} />
            <img className="social-icon8" alt="" src={socialIcon2} />
            <img className="social-icon8" alt="" src={socialIcon3} />
            <img className="social-icon8" alt="" src={socialIcon4} />
            <img className="social-icon13" alt="" src={socialIcon5} />
          </div>
          <div className="footer-links2">
            <div className="text136">Terms</div>
            <div className="text136">Privacy</div>
            <div className="text136">Cookies</div>
          </div>
        </div>
        <div className="content109">
          <div className="text142" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
