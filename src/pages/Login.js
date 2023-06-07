import { useCallback, useRef, useState, useEffect,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const LOGIN_URL = "http://13.49.243.222:8181/api/v1/lpgin";


const Login = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])


  const onButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODQ3MThkNTZjZTZiYWI2OGFmNDgwZjlmNjA4NTA4NGU5M2NhY2JiMjRmZWU4ZWQzZGE0YTQ4OGQ1ZTRlM2NiN2RlNmRmN2VkYjY5ZjhjZjciLCJpYXQiOjE2NzQzNzg3MjEsIm5iZiI6MTY3NDM3ODcyMSwiZXhwIjoxNzA1OTE0NzIxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d7D4ZXHxRZ8D44noKOOtzkMBlYbd8sDMQLIxwlOHc_RAqG64SbuRHWQzg7DPG9WqlKiBFF53LxLT6lQScmml5uanneTVCB9LKdzMP9WpXDS1OHklepPgdiuXaWbvH5k226uDEl1QfCL3EJoFICRQE7CW-4UCsjpP08XOiIDblc2UnPdJWW6wyWgf0xS5VGAwTRc_PzWNLIWcustebWhT9Od9blVyz_yeyQ9fRKBBScHiWvcOKwfn1dHrMDmtlJsM_B4mR-csxez9Zun05SjyhegQI2Q1Ldi1SWshi4BSBm70DS3CuKBAdP5Py9aoNHjyM-4ow_z57ozbuRqTT3-6qPbNTW85zYSAS0g_VSkla2iyhiRN_GyiLwp7-F1iqvoElU1Os63popaYUo7Dbg3JSXQGbClXlCHMCFwaofDBgfuMmz-qAdiCFoYGqkWb9iZSjz57wRUuH3HoXYpJ7QfP-YwUGKMKdyEYsYdM9wz3jHwgZHUay-2YPQHFPhRwkm3wQwWkGH4C-n4PNprOJrXiTYIJqQ95WowEq0VY8Wljr_0RAb5_cJUtjlwIfafcTrXQkY6ZQ6NFikUlRLpDUDjSl9cDvQIxFoUuzlxwVGfSzy6PL-k4m_kTWABJeYb_lDLlF5AoDVBGum6h472jbhEiIspci9R7srWUw7S";

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({
          email: email,
          password: pwd
        }),
        credentials: 'include'
      });
  
      if (!response.ok) {
        throw new Error('Login Failed');
      }else{
        const data = await response.json();
      }
  
      
      
      
  
      
  
      setEmail('');
      setPwd('');
      setSuccess(true);
  
    } catch (err) {
      if (err.message === 'Login Failed') {
        setErrMsg('Login Failed');
      } else {
        setErrMsg('No Server Response');
      }
      errRef.current.focus();
    }
  };
  

  return (
    <div className="login">
      <div className="log-in">
        <div className="section2">
          <div className="header-navigation">
            <div className="logo3">
              <div className="logo-wrap3">
                <div className="logomark3">
                  <img className="content-icon3" alt="" src="/content1.svg" />
                </div>
                <img className="logotype-icon3" alt="" src="/logotype1.svg" />
              </div>
            </div>
          </div>
          <div className="container7">
            <div className="content32">
              <div className="text-and-supporting-text16">
                <b className="text51">Log in</b>
                <div className="supporting-text23">
                  Welcome back! Please enter your details.
                </div>
              </div>
              <form className="content33">
                <div className="form1">
                  <p  ref={errRef} className={errMsg ? "errmsg" :       "offscreen"}    aria-live="assertive">{errMsg}
                  </p>
                  <div className="input-field7">
                    <div className="input-field-base7">
                      <div className="input-field-base7">
                        <div className="label7">Email</div>
                        <input
                          className="input7"
                          type="email"
                          placeholder="Enter your email"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                      </div>
                      <div className="hint-text7">
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <div className="input-field7">
                    <div className="input-field-base7">
                      <div className="input-field-base7">
                        <div className="label7">Password</div>
                        <input
                          className="input8"
                          type="password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                        />
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="row5">
                  <div className="checkbox">
                    <input className="checkbox1" type="checkbox" autoFocus />
                    <div className="label7">Remember for 30 days</div>
                  </div>
                  <Link
                    className="button24"
                    to="/sign-up-for-visaro2"
                    onClick={onButtonClick}
                  >
                    <div className="button-base27">
                      <b className="text53">Forgot password</b>
                    </div>
                  </Link>
                </div>
                <div className="actions11">
                  <button className="button25" 
                  autoFocus
                  onClick={handleSubmit}
                  >
                    <div className="button-base28">
                      <b className="text54">Sign in</b>
                    </div>
                  </button>
                  <button className="social-button-groups1">
                    <div className="social-button4">
                      <img
                        className="social-icon10"
                        alt=""
                        src="/social-icon10.svg"
                      />
                      <b className="text55">Sign in with Google</b>
                    </div>
                    <div className="social-button5">
                      <img
                        className="social-icon10"
                        alt=""
                        src="/social-icon11.svg"
                      />
                      <b className="text55">Sign in with Facebook</b>
                    </div>
                    <div className="social-button5">
                      <img
                        className="social-icon10"
                        alt=""
                        src="/social-icon12.svg"
                      />
                      <b className="text55">Sign in with Apple</b>
                    </div>
                    <div className="social-button5">
                      <img
                        className="social-icon10"
                        alt=""
                        src="/social-icon13.svg"
                      />
                      <b className="text55">Sign in with Twitter</b>
                    </div>
                  </button>
                </div>
              </form>
              <div className="row6">
                <div className="text59">Don’t have an account?</div>
                <div className="button26">
                  <div className="button-base27">
                    <b className="text59">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer1">
            <div className="text59">© Untitled UI 2023</div>
          </div>
        </div>
        <img className="section-icon" alt="" src="/section.svg" />
      </div>
    </div>
  );
};

export default Login;
