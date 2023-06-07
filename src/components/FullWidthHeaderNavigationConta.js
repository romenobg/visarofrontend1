import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FullWidthHeaderNavigationConta.css";
const FullWidthHeaderNavigationConta = () => {
  const navigate = useNavigate();

  const onNavigationActionsClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="full-width-header-navigation4">
      <div className="header6">
        <div className="container40">
          <div className="content113">
            <div className="logo9">
              <div className="logo-wrap9">
                <div className="logomark9">
                  <img className="content-icon9" alt="" src="/content1.svg" />
                </div>
                <img className="logotype-icon9" alt="" src="/logotype11.svg" />
              </div>
            </div>
            <div className="navigation2">
              <div className="dropdown-header-navigation-tri10">
                <div className="logo9">
                  <div className="button-base69">
                    <div className="text153">Personal</div>
                    <img
                      className="chevron-down-icon10"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="dropdown-header-navigation-tri10">
                <div className="logo9">
                  <div className="button-base69">
                    <div className="text153">Business</div>
                    <img
                      className="chevron-down-icon10"
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="logo9">
                <div className="button-base71">
                  <div className="text153">Help</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ng-group">
            <img className="ng-icon1" alt="" src="/ng.svg" />
            <button
              className="navigation-actions5"
              autoFocus
              onClick={onNavigationActionsClick}
            >
              <div className="button62">
                <div className="button-base72">
                  <b className="text156">Log in</b>
                </div>
              </div>
              <div className="button63">
                <div className="button-base73">
                  <b className="text157">Book demo</b>
                </div>
              </div>
              <div className="button63">
                <div className="button-base74">
                  <b className="text158">Sign up</b>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthHeaderNavigationConta;
