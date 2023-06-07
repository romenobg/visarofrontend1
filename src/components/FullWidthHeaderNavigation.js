import { useMemo } from "react";
import "./FullWidthHeaderNavigation.css";
const FullWidthHeaderNavigation = ({
  content,
  logotype,
  chevronDown,
  chevronDown1,
  buttonWidth,
  buttonAlignSelf,
  buttonDisplay,
  buttonBaseHeight,
  textWidth,
  textAlignSelf,
  propWidth,
  propJustifyContent,
  propGap,
  propFlex,
  propFlex1,
  propFlex2,
}) => {
  const fullWidthHeaderNavigationStyle = useMemo(() => {
    return {
      width: buttonWidth,
      alignSelf: buttonAlignSelf,
      display: buttonDisplay,
    };
  }, [buttonWidth, buttonAlignSelf, buttonDisplay]);

  const headerStyle = useMemo(() => {
    return {
      height: buttonBaseHeight,
    };
  }, [buttonBaseHeight]);

  const containerStyle = useMemo(() => {
    return {
      width: textWidth,
      alignSelf: textAlignSelf,
    };
  }, [textWidth, textAlignSelf]);

  const navigationStyle = useMemo(() => {
    return {
      width: propWidth,
      justifyContent: propJustifyContent,
      gap: propGap,
    };
  }, [propWidth, propJustifyContent, propGap]);

  const dropdownHeaderNavigationTriStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const dropdownHeaderNavigationTri1Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const buttonStyle = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  return (
    <div
      className="full-width-header-navigation3"
      style={fullWidthHeaderNavigationStyle}
    >
      <div className="header4" style={headerStyle}>
        <div className="container38" style={containerStyle}>
          <div className="content111">
            <div className="logo7">
              <div className="logo-wrap7">
                <div className="logomark7">
                  <img className="content-icon7" alt="" src={content} />
                </div>
                <img className="logotype-icon7" alt="" src={logotype} />
              </div>
            </div>
            <div className="navigation1" style={navigationStyle}>
              <div
                className="dropdown-header-navigation-tri8"
                style={dropdownHeaderNavigationTriStyle}
              >
                <div className="logo7">
                  <div className="button-base63">
                    <div className="text147">Personal</div>
                    <img
                      className="chevron-down-icon8"
                      alt=""
                      src={chevronDown}
                    />
                  </div>
                </div>
              </div>
              <div
                className="dropdown-header-navigation-tri8"
                style={dropdownHeaderNavigationTri1Style}
              >
                <div className="logo7">
                  <div className="button-base63">
                    <div className="text147">Business</div>
                    <img
                      className="chevron-down-icon8"
                      alt=""
                      src={chevronDown1}
                    />
                  </div>
                </div>
              </div>
              <div className="logo7" style={buttonStyle}>
                <div className="button-base65">
                  <div className="text147">Help</div>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-actions4">
            <div className="button56">
              <div className="button-base66">
                <b className="text147">Log in</b>
              </div>
            </div>
            <div className="button57">
              <div className="button-base67">
                <b className="text147">Book demo</b>
              </div>
            </div>
            <div className="button58">
              <div className="button-base68">
                <b className="text147">Sign up</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthHeaderNavigation;
