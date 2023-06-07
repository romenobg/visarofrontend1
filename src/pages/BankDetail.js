import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BankDetail.css";
const BankDetail = () => {
  const navigate = useNavigate();

  const onActionsClick = useCallback(() => {
    navigate("/account-opened");
  }, [navigate]);

  return (
    <div className="bank-detail">
      <div className="hero-header-section2">
        <div className="full-width-header-navigation2">
          <div className="header2">
            <div className="container12">
              <div className="content37">
                <div className="logo5">
                  <div className="logo-wrap5">
                    <div className="logomark5">
                      <img
                        className="content-icon5"
                        alt=""
                        src="/content1.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon5"
                      alt=""
                      src="/logotype1.svg"
                    />
                  </div>
                </div>
                <div className="navigation1">
                  <div className="dropdown-header-navigation-tri4">
                    <div className="logo5">
                      <div className="button-base36">
                        <div className="text68">Personal</div>
                        <img
                          className="chevron-down-icon4"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri4">
                    <div className="logo5">
                      <div className="button-base36">
                        <div className="text68">Business</div>
                        <img
                          className="chevron-down-icon4"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="logo5">
                    <div className="button-base38">
                      <div className="text68">Help</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navigation-actions3">
                <div className="button36">
                  <div className="button-base39">
                    <b className="text68">Log in</b>
                  </div>
                </div>
                <div className="button37">
                  <div className="button-base40">
                    <b className="text68">Book demo</b>
                  </div>
                </div>
                <div className="button38">
                  <div className="button-base41">
                    <b className="text68">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="container13">
            <div className="content38">
              <div className="heading-and-supporting-text13">
                <div className="content38">
                  <b className="heading13">Sign up for Visaro</b>
                </div>
                <div className="supporting-text25">Bank details</div>
              </div>
            </div>
            <div className="container14">
              <div className="content39">
                <div className="content40">
                  <div className="input-field9">
                    <div className="input-field-base9">
                      <div className="input-field-base9">
                        <div className="label9">BVN*</div>
                        <input
                          className="input9"
                          type="text"
                          placeholder="2348082727478"
                          required
                          autoFocus
                        />
                      </div>
                      <div className="hint-text9">
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <div className="input-field10">
                    <div className="input-field-base9">
                      <div className="input-field-base9">
                        <div className="label9">Bank name</div>
                        <input
                          className="input10"
                          type="text"
                          placeholder="Guaranty Trust Bank"
                          required
                          autoFocus
                        />
                      </div>
                      <div className="hint-text9">
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <div className="input-field9">
                    <div className="input-field-base9">
                      <div className="input-field-base9">
                        <div className="label9">Account number*</div>
                        <input
                          className="input11"
                          type="text"
                          placeholder="1082727478"
                          autoFocus
                        />
                      </div>
                      <div className="hint-text9">
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <div className="input-field9">
                    <div className="input-field-base9">
                      <div className="input-field-base9">
                        <div className="label9">Account name*</div>
                        <input
                          className="input9"
                          type="text"
                          placeholder="Olivia Ruth"
                          required
                          autoFocus
                        />
                      </div>
                      <div className="hint-text9">
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <button
                    className="actions12"
                    autoFocus
                    onClick={onActionsClick}
                  >
                    <div className="button39">
                      <div className="button-base42">
                        <b className="text74">Confirm</b>
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

export default BankDetail;
