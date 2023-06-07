import { useCallback } from "react";
import "./ResetPWD.css";
const ResetPWD = () => {
  const onActionsClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className="reset-pwd">
      <div className="divider2">
        <div className="container15">
          <img className="divider-icon1" alt="" src="/divider1.svg" />
        </div>
      </div>
      <div className="hero-header-section3">
        <div className="full-width-header-navigation3">
          <div className="header3">
            <div className="container16">
              <div className="content41">
                <div className="logo6">
                  <div className="logo-wrap6">
                    <div className="logomark6">
                      <img
                        className="content-icon6"
                        alt=""
                        src="/content1.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon6"
                      alt=""
                      src="/logotype1.svg"
                    />
                  </div>
                </div>
                <div className="navigation2">
                  <div className="dropdown-header-navigation-tri6">
                    <div className="logo6">
                      <div className="button-base43">
                        <div className="text75">Personal</div>
                        <img
                          className="chevron-down-icon6"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri6">
                    <div className="logo6">
                      <div className="button-base43">
                        <div className="text75">Business</div>
                        <img
                          className="chevron-down-icon6"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="logo6">
                    <div className="button-base45">
                      <div className="text75">Help</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navigation-actions4">
                <div className="button43">
                  <div className="button-base46">
                    <b className="text75">Log in</b>
                  </div>
                </div>
                <div className="button44">
                  <div className="button-base47">
                    <b className="text75">Book demo</b>
                  </div>
                </div>
                <div className="button45">
                  <div className="button-base48">
                    <b className="text75">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="container17">
            <div className="content42">
              <div className="heading-and-supporting-text14">
                <div className="heading-and-badge6">
                  <b className="heading14">Set new password</b>
                </div>
                <div className="supporting-text26">
                  Try not to misplace it this time and keeps your account
                  secure.
                </div>
              </div>
            </div>
            <div className="container18">
              <div className="content43">
                <div className="content44">
                  <div className="form2">
                    <div className="form2">
                      <div className="input-field-base13">
                        <div className="input-field-base13">
                          <div className="label13">Password*</div>
                          <input
                            className="input13"
                            type="text"
                            placeholder="Create a password"
                            required
                            autoFocus
                          />
                        </div>
                        <div className="hint-text13">
                          Must be at least 8 characters.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form2">
                    <div className="form2">
                      <div className="input-field-base13">
                        <div className="input-field-base13">
                          <div className="label13">Confirm Password*</div>
                          <input
                            className="input13"
                            type="text"
                            placeholder="Create a password"
                            required
                            autoFocus
                          />
                        </div>
                        <div className="hint-text13">
                          Must be at least 8 characters.
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="actions13"
                    autoFocus
                    onClick={onActionsClick}
                  >
                    <div className="button46">
                      <div className="button-base49">
                        <b className="text81">Confirm</b>
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

export default ResetPWD;
