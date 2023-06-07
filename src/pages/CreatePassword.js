import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePassword.css";
const CreatePassword = () => {
  const navigate = useNavigate();

  const onActionsClick = useCallback(() => {
    navigate("/bank-detail");
  }, [navigate]);

  return (
    <div className="create-password">
      <div className="hero-header-section4">
        <div className="full-width-header-navigation4">
          <div className="header4">
            <div className="container19">
              <div className="content45">
                <div className="logo7">
                  <div className="logo-wrap7">
                    <div className="logomark7">
                      <img
                        className="content-icon7"
                        alt=""
                        src="/content1.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon7"
                      alt=""
                      src="/logotype1.svg"
                    />
                  </div>
                </div>
                <div className="navigation3">
                  <div className="dropdown-header-navigation-tri8">
                    <div className="logo7">
                      <div className="button-base50">
                        <div className="text82">Personal</div>
                        <img
                          className="chevron-down-icon8"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri8">
                    <div className="logo7">
                      <div className="button-base50">
                        <div className="text82">Business</div>
                        <img
                          className="chevron-down-icon8"
                          alt=""
                          src="/chevrondown3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="button49">
                    <div className="button-base52">
                      <div className="text82">Help</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navigation-actions5">
                <div className="button50">
                  <div className="button-base53">
                    <b className="text82">Log in</b>
                  </div>
                </div>
                <div className="button51">
                  <div className="button-base54">
                    <b className="text82">Book demo</b>
                  </div>
                </div>
                <div className="button52">
                  <div className="button-base55">
                    <b className="text82">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section6">
          <div className="container20">
            <div className="content46">
              <div className="heading-and-supporting-text15">
                <div className="content46">
                  <b className="heading15">Sign up for Visaro</b>
                </div>
                <div className="supporting-text27">
                  Create a password and keeps your account secure.
                </div>
              </div>
            </div>
            <div className="container21">
              <div className="content47">
                <div className="content48">
                  <div className="form4">
                    <div className="form4">
                      <div className="input-field-base15">
                        <div className="input-field-base15">
                          <div className="label15">Password*</div>
                          <input
                            className="input15"
                            type="password"
                            placeholder="Create a password"
                            required
                            autoFocus
                          />
                        </div>
                        <div className="hint-text15">
                          Must be at least 8 characters.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form4">
                    <div className="form4">
                      <div className="input-field-base15">
                        <div className="input-field-base15">
                          <div className="label15">Confirm Password*</div>
                          <input
                            className="input15"
                            type="text"
                            placeholder="Create a password"
                            required
                            autoFocus
                          />
                        </div>
                        <div className="hint-text15">
                          Must be at least 8 characters.
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="actions14"
                    autoFocus
                    onClick={onActionsClick}
                  >
                    <div className="button53">
                      <div className="button-base56">
                        <b className="text88">Confirm</b>
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

export default CreatePassword;
