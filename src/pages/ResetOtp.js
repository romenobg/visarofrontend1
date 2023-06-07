import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetOtp.css";
const ResetOtp = () => {
  const navigate = useNavigate();

  const onContentClick = useCallback(() => {
    navigate("/sign-up-for-visaro3");
  }, [navigate]);

  return (
    <div className="reset-otp">
      <div className="hero-header-section5">
        <div className="full-width-header-navigation5">
          <div className="header5">
            <div className="container22">
              <div className="arrow-left-circle-wrapper">
                <img
                  className="arrow-left-circle-icon"
                  alt=""
                  src="/arrowleftcircle.svg"
                />
              </div>
              <div className="content49">
                <div className="logo8">
                  <div className="logo-wrap8">
                    <div className="logomark8">
                      <img
                        className="content-icon8"
                        alt=""
                        src="/content1.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon8"
                      alt=""
                      src="/logotype1.svg"
                    />
                  </div>
                </div>
                <div className="navigation4">
                  <div className="dropdown-header-navigation-tri10">
                    <div className="logo8">
                      <div className="button-base57">
                        <div className="text89">Personal</div>
                        <img
                          className="chevron-down-icon10"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri10">
                    <div className="logo8">
                      <div className="button-base57">
                        <div className="text89">Business</div>
                        <img
                          className="chevron-down-icon10"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="logo8">
                    <div className="button-base59">
                      <div className="text89">Help</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-width-header-navigation6">
          <div className="header5">
            <div className="container23">
              <div className="content49">
                <div className="logo8">
                  <div className="logo-wrap8">
                    <div className="logomark8">
                      <img
                        className="content-icon8"
                        alt=""
                        src="/content1.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon8"
                      alt=""
                      src="/logotype1.svg"
                    />
                  </div>
                </div>
                <div className="navigation4">
                  <div className="dropdown-header-navigation-tri10">
                    <div className="logo8">
                      <div className="button-base57">
                        <div className="text89">Personal</div>
                        <img
                          className="chevron-down-icon10"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri10">
                    <div className="logo8">
                      <div className="button-base57">
                        <div className="text89">Business</div>
                        <img
                          className="chevron-down-icon10"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="logo8">
                    <div className="button-base59">
                      <div className="text89">Help</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navigation-actions6">
                <div className="button60">
                  <div className="button-base63">
                    <b className="text89">Log in</b>
                  </div>
                </div>
                <div className="button61">
                  <div className="button-base64">
                    <b className="text89">Book demo</b>
                  </div>
                </div>
                <div className="button62">
                  <div className="button-base65">
                    <b className="text89">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section7">
          <div className="container24">
            <div className="container25">
              <div className="content51">
                <div className="content52">
                  <img
                    className="featured-icon"
                    alt=""
                    src="/featured-icon.svg"
                  />
                  <div className="text-and-supporting-text17">
                    <b className="text98">Please confirm account.</b>
                    <div className="weve-sent-a-container">
                      <span>{`We've sent a code to `}</span>
                      <b>olivia@gmail.com</b>
                    </div>
                  </div>
                  <div className="input17">
                    <div className="verification-code-input-field">
                      <div className="input-with-label17">
                        <div className="input18">
                          <input
                            className="mega-input-field-base"
                            type="text"
                            placeholder="3"
                            required
                            autoFocus
                          />
                          <input
                            className="mega-input-field-base"
                            type="text"
                            placeholder="0"
                            required
                            autoFocus
                          />
                          <div className="mega-input-field-base2">
                            <input
                              className="input19"
                              type="text"
                              placeholder="6"
                              required
                              autoFocus
                            />
                          </div>
                          <div className="mega-input-field-base3">
                            <input
                              className="input19"
                              type="text"
                              placeholder="6"
                              required
                              autoFocus
                            />
                          </div>
                        </div>
                      </div>
                      <div className="hint-text17">
                        Didn’t get a code? Click to resend.
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="content53"
                  autoFocus
                  onClick={onContentClick}
                >
                  <button className="actions15" autoFocus>
                    <div className="button63">
                      <div className="button-base66">
                        <b className="text99">Verify</b>
                      </div>
                    </div>
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider3">
        <div className="container26">
          <img className="divider-icon2" alt="" src="/divider1.svg" />
        </div>
      </div>
    </div>
  );
};

export default ResetOtp;
