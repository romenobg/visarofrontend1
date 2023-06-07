import "./AccountOpened.css";
const AccountOpened = () => {
  return (
    <div className="account-opened">
      <div className="hero-header-section1">
        <div className="full-width-header-navigation1">
          <div className="header1">
            <div className="container8">
              <div className="content34">
                <div className="logo4">
                  <div className="logo-wrap4">
                    <div className="logomark4">
                      <img
                        className="content-icon4"
                        alt=""
                        src="/content1.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon4"
                      alt=""
                      src="/logotype1.svg"
                    />
                  </div>
                </div>
                <div className="navigation">
                  <div className="dropdown-header-navigation-tri2">
                    <div className="logo4">
                      <div className="button-base30">
                        <div className="text62">Personal</div>
                        <img
                          className="chevron-down-icon2"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri2">
                    <div className="logo4">
                      <div className="button-base30">
                        <div className="text62">Business</div>
                        <img
                          className="chevron-down-icon2"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="logo4">
                    <div className="button-base32">
                      <div className="text62">Help</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navigation-actions2">
                <div className="button30">
                  <div className="button-base33">
                    <b className="text62">Log in</b>
                  </div>
                </div>
                <div className="button31">
                  <div className="button-base34">
                    <b className="text62">Book demo</b>
                  </div>
                </div>
                <div className="button32">
                  <div className="button-base35">
                    <b className="text62">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="container9">
            <div className="content35">
              <img
                className="successfully-done-1-icon"
                alt=""
                src="/successfullydone-1@2x.png"
              />
              <div className="heading-and-supporting-text12">
                <div className="heading-and-badge4">
                  <b className="heading12">Account Verified</b>
                </div>
                <div className="supporting-text24">
                  Your Unique ID has been sent to your email, please follow
                  instructions on how to use it
                </div>
              </div>
            </div>
            <div className="container10">
              <input
                className="content36"
                type="text"
                placeholder="Login"
                required
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
      <div className="divider1">
        <div className="container11">
          <img className="divider-icon" alt="" src="/divider.svg" />
        </div>
      </div>
    </div>
  );
};

export default AccountOpened;
