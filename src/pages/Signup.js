import { useRef, useState, useEffect, useCallback} from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const baseApiUrl = "http://13.49.243.222:8181/api/v1";

const FULLNAME_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;    
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const EMAIL_REGEX =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


const Signup = () => {

  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  

  const [fullName, setFullName] = useState('');
  const [validFullName, setValidFullName] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  
  const [date, setDate] = useState('');
  const [dateFocus, setDateFocus] = useState(false);
 

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCreateaccount = useCallback(() => {
    navigate("/account-opened");
  }, [navigate]);


  useEffect(() => {
      userRef.current.focus();
  }, [])


  useEffect(() => {
      setValidFullName(FULLNAME_REGEX.test(fullName));
  }, [fullName])

  useEffect(() => {
      setValidPhone(PHONE_REGEX.test(phone));
  }, [phone])

  useEffect(() => {
      setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
   setErrMsg('');
  }, [fullName, email, phone, pwd, matchPwd])

  const baseApiUrl = "http://13.49.243.222:8181/api/v1";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = PWD_REGEX.test(pwd);
    const v2 = EMAIL_REGEX.test(email);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODQ3MThkNTZjZTZiYWI2OGFmNDgwZjlmNjA4NTA4NGU5M2NhY2JiMjRmZWU4ZWQzZGE0YTQ4OGQ1ZTRlM2NiN2RlNmRmN2VkYjY5ZjhjZjciLCJpYXQiOjE2NzQzNzg3MjEsIm5iZiI6MTY3NDM3ODcyMSwiZXhwIjoxNzA1OTE0NzIxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d7D4ZXHxRZ8D44noKOOtzkMBlYbd8sDMQLIxwlOHc_RAqG64SbuRHWQzg7DPG9WqlKiBFF53LxLT6lQScmml5uanneTVCB9LKdzMP9WpXDS1OHklepPgdiuXaWbvH5k226uDEl1QfCL3EJoFICRQE7CW-4UCsjpP08XOiIDblc2UnPdJWW6wyWgf0xS5VGAwTRc_PzWNLIWcustebWhT9Od9blVyz_yeyQ9fRKBBScHiWvcOKwfn1dHrMDmtlJsM_B4mR-csxez9Zun05SjyhegQI2Q1Ldi1SWshi4BSBm70DS3CuKBAdP5Py9aoNHjyM-4ow_z57ozbuRqTT3-6qPbNTW85zYSAS0g_VSkla2iyhiRN_GyiLwp7-F1iqvoElU1Os63popaYUo7Dbg3JSXQGbClXlCHMCFwaofDBgfuMmz-qAdiCFoYGqkWb9iZSjz57wRUuH3HoXYpJ7QfP-YwUGKMKdyEYsYdM9wz3jHwgZHUay-2YPQHFPhRwkm3wQwWkGH4C-n4PNprOJrXiTYIJqQ95WowEq0VY8Wljr_0RAb5_cJUtjlwIfafcTrXQkY6ZQ6NFikUlRLpDUDjSl9cDvQIxFoUuzlxwVGfSzy6PL-k4m_kTWABJeYb_lDLlF5AoDVBGum6h472jbhEiIspci9R7srWUw7S"; 
      const response = await fetch(`${baseApiUrl}/register`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json',
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({ email:email, password: pwd }),

        
      });
  
      if (response.ok) {
        const response = await response.json();
       
        setSuccess(true);
        // Clear state and controlled inputs
        setFullName('');
        setDate('');
        setPhone('');
        setEmail('');
        setPwd('');
        setMatchPwd('');
      } else if (response.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Sign Failed');
      }
    } catch (err) {
      setErrMsg('No Server Response');
      errRef.current.focus();
    }
  };


  return (
    <div className="signup">
      <div className="hero-header-section">
        <div className="full-width-header-navigation">
          <div className="header">
            <div className="container">
              <div className="content">
                <div className="logo">
                  <div className="logo-wrap">
                    <div className="logomark">
                      <img className="content-icon" alt="" src="/content.svg" />
                    </div>
                    <img className="logotype-icon" alt="" src="/logotype.svg" />
                  </div>
                </div>
              </div>
              <div className="ng-parent">
                <img className="ng-icon" alt="" src="/ng.svg" />
                <button className="navigation-actions" autoFocus>
                  <div className="button">
                    <div className="button-base">
                      <b className="text">Log in</b>
                    </div>
                  </div>
                  
                  <div className="button1">
                    <div className="button-base2">
                      <b className="text2">Sign up</b>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container1">
            <div className="content1">
              <div className="heading-and-supporting-text">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className="heading-and-badge">
                  <b className="heading">Sign up for Visaro</b>
                </div>
              </div>
            </div>
            <div className="container2">
              <form onSubmit={handleSubmit} className="content2">
                <div className="content3">
                  <div  className="form">
                    <div className="input-field">
                      <div className="input-field-base">
                        <div className="input-field-base">
                          <div className="label">Name*  <FontAwesomeIcon icon={faCheck} className={validFullName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validFullName || !fullName ? "hide" : "invalid"} /></div>
                          <input
                            className="input"
                            type="text"
                            placeholder="Enter your Full Name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            required
                            aria-invalid={validFullName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setFullNameFocus(true)}
                            onBlur={() => setFullNameFocus(false)}
                          />
                          
                        </div>
                        
                      </div>
                    </div>
                    <div className="input-field">
                      <div className="input-field-base">
                        <div className="input-field-base">
                          <div className="label">Email*  
                            <FontAwesomeIcon icon=   {faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                          </div>
                          <input
                            className="input"
                            type="email"
                            placeholder="Enter your email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                          />
                          <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="input-field">
                      <div className="input-field-base">
                        <div className="input-field-base">
                          <div className="label">Phone number* 
                           <FontAwesomeIcon icon={faCheck} className=  {validPhone ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? "hide" : "invalid"} />
                          </div>
                          <input
                            className="input"
                            type="number"
                            placeholder="+2348082727478"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                            aria-invalid={validPhone ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                          />
                           <p id="uidnote" className={phoneFocus && phone && !validPhone ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            characters.<br />
                            Must numbers, or a special character.
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="input-field">
                      <div className="input-field-base">
                        <div className="input-field-base">
                          <div className="label">Date of birth*</div>
                          <input
                            className="input"
                            type="date"
                            id="date"
                            placeholder="DD/MM/YY"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            required
                            onFocus={() => setDateFocus(true)}
                            onBlur={() => setDateFocus(false)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-field">
                      <div className="input-field-base">
                        <div className="input-field-base">
                          <div className="label">Password* 
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /></div>
                          <input
                            className="input"
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                          />
                          <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                        </div>
                      </div>
                    </div>
                    <div className="input-field">
                      <div className="input-field-base">
                        <div className="input-field-base">
                          <div className="label"> Confirm Password*
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                          </div>
                          <input
                            className="input"
                            type="password"
                            id="password"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                          />
                          <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                        </div>
                        <div className="hint-text4">
                          Must be at least 8 characters.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="actions">
                    <button
                      disabled={ !validPhone || !validPwd || !validMatch ? true : false}
                      className="button-base3"
                      onClick={Signup}
                      
                     > <b className="text3">Create account</b>
                    </button>
                    <button onButtonClick className="social-button-groups" autoFocus>
                      <div className="social-button">
                        <img
                          className="ng-icon"
                          alt=""
                          src="/social-icon.svg"
                        />
                        <b className="text1">Sign up with Google</b>
                      </div>
                      <div className="social-button1">
                        <img
                          className="social-icon1"
                          alt=""
                          src="/social-icon1.svg"
                        />
                        <b className="text5">Sign in with Facebook</b>
                      </div>
                      <div className="social-button2">
                        <img
                          className="social-icon1"
                          alt=""
                          src="/social-icon2.svg"
                        />
                        <b className="text5">Sign in with Apple</b>
                      </div>
                      <div className="social-button3">
                        <img
                          className="social-icon3"
                          alt=""
                          src="/social-icon3.svg"
                        />
                        <b className="text7">Sign in with Twitter</b>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="text8">Already have an account?</div>
                  <a className="button4">
                    <div className="button-base4">
                      <b className="text9">Log in</b>
                    </div>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
