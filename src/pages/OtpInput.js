import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpInput.css";
const OtpInput = () => {
  const navigate = useNavigate();

  const onContentContainer3Click = useCallback(() => {
    navigate("/create-password");
  }, [navigate]);

  return (
    <div className="otp-input">
      <div className="hero-header-section6">
        <div className="full-width-header-navigation7">
          <div className="header7">
            <div className="container27">
              <div className="arrow-left-circle-container">
                <img
                  className="arrow-left-circle-icon1"
                  alt=""
                  src="/arrowleftcircle.svg"
                />
              </div>
              <div className="arrow-left-circle-container">
                <div className="logo10">
                  <div className="logo-wrap10">
                    <div className="logomark10">
                      <img
                        className="content-icon10"
                        alt=""
                        src="/content1.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon10"
                      alt=""
                      src="/logotype1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-width-header-navigation8">
          <div className="header8">
            <div className="container28">
              <div className="content55">
                <div className="logo10">
                  <div className="logo-wrap10">
                    <div className="logomark10">
                      <img
                        className="content-icon10"
                        alt=""
                        src="/content.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon10"
                      alt=""
                      src="/logotype.svg"
                    />
                  </div>
                </div>
                <div className="navigation6">
                  <div className="dropdown-header-navigation-tri14">
                    <div className="logo10">
                      <div className="button-base67">
                        <div className="text100">Personal</div>
                        <img
                          className="chevron-down-icon14"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri14">
                    <div className="logo10">
                      <div className="button-base67">
                        <div className="text100">Business</div>
                        <img
                          className="chevron-down-icon14"
                          alt=""
                          src="/chevrondown3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="button66">
                    <div className="button-base69">
                      <div className="text100">Help</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navigation-actions7">
                <div className="button67">
                  <div className="button-base70">
                    <b className="text100">Log in</b>
                  </div>
                </div>
                <div className="button68">
                  <div className="button-base71">
                    <b className="text100">Book demo</b>
                  </div>
                </div>
                <div className="button69">
                  <div className="button-base72">
                    <b className="text100">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section8">
          <div className="container29">
            <div className="container30">
              <div className="content56">
                <div className="content57">
                  <img
                    className="featured-icon1"
                    alt=""
                    src="/featured-icon.svg"
                  />
                  <div className="text-and-supporting-text18">
                    <b className="text106">Please check your email.</b>
                    <div className="weve-sent-a-container1">
                      <span>{`We've sent a code to `}</span>
                      <b>olivia@gmail.com</b>
                    </div>
                  </div>
                  <div className="input21">
                    <div className="verification-code-input-field1">
                      <div className="input-with-label18">
                        <div className="input22">
                          <input
                            className="mega-input-field-base4"
                            type="number"
                            placeholder="3"
                            required
                            autoFocus
                          />
                          <input
                            className="mega-input-field-base4"
                            type="number"
                            placeholder="0"
                            required
                            autoFocus
                          />
                          <input
                            className="mega-input-field-base4"
                            type="number"
                            placeholder="6"
                            required
                            autoFocus
                          />
                          <input
                            className="mega-input-field-base7"
                            type="text"
                            placeholder="6"
                            required
                            autoFocus
                          />
                        </div>
                      </div>
                      <a className="hint-text18">
                        Didn’t get a code? Click to resend.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content58" onClick={onContentContainer3Click}>
                  <button className="actions16" autoFocus>
                    <div className="button70">
                      <div className="button-base73">
                        <b className="text107">Create account</b>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpInput;
