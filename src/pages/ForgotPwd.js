import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPwd.css";
const ForgotPwd = () => {
  const navigate = useNavigate();

  const onNavigationActionsClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onActions1Click = useCallback(() => {
    navigate("/sign-up-for-visaro4");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="forgot-pwd">
      <div className="hero-header-section7">
        <div className="full-width-header-navigation9">
          <div className="header9">
            <div className="container31">
              <div className="content59">
                <div className="logo12">
                  <div className="logo-wrap12">
                    <div className="logomark12">
                      <img
                        className="content-icon12"
                        alt=""
                        src="/content1.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon12"
                      alt=""
                      src="/logotype1.svg"
                    />
                  </div>
                </div>
                <div className="navigation7">
                  <div className="dropdown-header-navigation-tri16">
                    <div className="logo12">
                      <div className="button-base74">
                        <div className="text108">Personal</div>
                        <img
                          className="chevron-down-icon16"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri16">
                    <div className="logo12">
                      <div className="button-base74">
                        <div className="text108">Business</div>
                        <img
                          className="chevron-down-icon16"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="logo12">
                    <div className="button-base76">
                      <div className="text108">Help</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ng-group">
                <img className="ng-icon1" alt="" src="/ng.svg" />
                <button
                  className="navigation-actions8"
                  autoFocus
                  onClick={onNavigationActionsClick}
                >
                  <div className="button74">
                    <div className="button-base77">
                      <b className="text111">Log in</b>
                    </div>
                  </div>
                  <div className="button75">
                    <div className="button-base78">
                      <b className="text112">Book demo</b>
                    </div>
                  </div>
                  <div className="button75">
                    <div className="button-base79">
                      <b className="text113">Sign up</b>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section9">
          <div className="container32">
            <div className="container33">
              <form className="content60">
                <div className="content61">
                  <div className="form6">
                    <div className="form6">
                      <div className="input-field-base17">
                        <div className="input-field-base17">
                          <div className="label17">Email*</div>
                          <input
                            className="input23"
                            type="text"
                            placeholder="Enter your email"
                            required
                            autoFocus
                          />
                        </div>
                        <div className="hint-text19">
                          This is a hint text to help user.
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="actions17"
                    autoFocus
                    onClick={onActions1Click}
                  >
                    <div className="button77">
                      <div className="button-base80">
                        <b className="text113">Confirm</b>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="row7">
                  <div className="text115">Back to</div>
                  <Link
                    className="button78"
                    to="/login"
                    onClick={onButtonClick}
                  >
                    <div className="button-base76">
                      <b className="text116">Log in</b>
                    </div>
                  </Link>
                </div>
              </form>
            </div>
            <div className="content62">
              <div className="heading-and-supporting-text16">
                <div className="content62">
                  <b className="heading16">Forgot password</b>
                </div>
                <div className="supporting-text28">
                  Enter the e-mail used to register your account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider4">
        <div className="container34">
          <img className="divider-icon3" alt="" src="/divider1.svg" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;
