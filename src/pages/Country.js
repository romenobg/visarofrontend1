import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Country.css";
const Country = () => {
  const [countries, setCountries] = useState([]);
  const [countryId, setCountryId] = useState("");
  const navigate = useNavigate();

  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODQ3MThkNTZjZTZiYWI2OGFmNDgwZjlmNjA4NTA4NGU5M2NhY2JiMjRmZWU4ZWQzZGE0YTQ4OGQ1ZTRlM2NiN2RlNmRmN2VkYjY5ZjhjZjciLCJpYXQiOjE2NzQzNzg3MjEsIm5iZiI6MTY3NDM3ODcyMSwiZXhwIjoxNzA1OTE0NzIxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d7D4ZXHxRZ8D44noKOOtzkMBlYbd8sDMQLIxwlOHc_RAqG64SbuRHWQzg7DPG9WqlKiBFF53LxLT6lQScmml5uanneTVCB9LKdzMP9WpXDS1OHklepPgdiuXaWbvH5k226uDEl1QfCL3EJoFICRQE7CW-4UCsjpP08XOiIDblc2UnPdJWW6wyWgf0xS5VGAwTRc_PzWNLIWcustebWhT9Od9blVyz_yeyQ9fRKBBScHiWvcOKwfn1dHrMDmtlJsM_B4mR-csxez9Zun05SjyhegQI2Q1Ldi1SWshi4BSBm70DS3CuKBAdP5Py9aoNHjyM-4ow_z57ozbuRqTT3-6qPbNTW85zYSAS0g_VSkla2iyhiRN_GyiLwp7-F1iqvoElU1Os63popaYUo7Dbg3JSXQGbClXlCHMCFwaofDBgfuMmz-qAdiCFoYGqkWb9iZSjz57wRUuH3HoXYpJ7QfP-YwUGKMKdyEYsYdM9wz3jHwgZHUay-2YPQHFPhRwkm3wQwWkGH4C-n4PNprOJrXiTYIJqQ95WowEq0VY8Wljr_0RAb5_cJUtjlwIfafcTrXQkY6ZQ6NFikUlRLpDUDjSl9cDvQIxFoUuzlxwVGfSzy6PL-k4m_kTWABJeYb_lDLlF5AoDVBGum6h472jbhEiIspci9R7srWUw7S';
const url = 'http://13.48.59.100:8181/api/v1/country_list';

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json', 
    "Accept": 'application/json',
  },
})
  .then(response => {
    if (response.ok) {
      return response.json(); 
    } else {
      throw new Error('Request failed.');
    }
  })
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    
    console.error(error);
  });


  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    setCountryId(selectedCountryId);
  };

  const handleConfirmClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);
 

  
  return (
    <div className="country">
      <div className="hero-header-section8">
        <div className="full-width-header-navigation10">
          <div className="header10">
            <div className="container35">
              <div className="content63">
                <div className="logo13">
                  <div className="logo-wrap13">
                    <div className="logomark13">
                      <img
                        className="content-icon13"
                        alt=""
                        src="/content.svg"
                      />
                    </div>
                    <img
                      className="logotype-icon13"
                      alt=""
                      src="/logotype.svg"
                    />
                  </div>
                </div>
                <div className="navigation8">
                  <div className="dropdown-header-navigation-tri18">
                    <div className="logo13">
                      <div className="button-base82">
                        <div className="text117">Personal</div>
                        <img
                          className="chevron-down-icon18"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-header-navigation-tri18">
                    <div className="logo13">
                      <div className="button-base82">
                        <div className="text117">Business</div>
                        <img
                          className="chevron-down-icon18"
                          alt=""
                          src="/chevrondown3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="button81">
                    <div className="button-base84">
                      <div className="text117">Help</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navigation-actions9">
                <div className="button82">
                  <div className="button-base85">
                    <b className="text117">Log in</b>
                  </div>
                </div>
                
                <div className="button84">
                  <div className="button-base87">
                    <b className="text117">Sign up</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section10">
          <div className="container36">
            <div className="content64">
              <div className="heading-and-supporting-text17">
                <div className="content64">
                  <b className="heading17">Let's get started</b>
                </div>
                <div className="supporting-text29">Where do you live?</div>
              </div>
            </div>
            <form className="input-dropdown">
              <div className="input-dropdown-base">
                <select className="input-with-label20" onChange={(e)=>handleCountryChange(e)}>
                  <option className="label18">Select your Country</option>
                  {
                  countries.map((getcon, id) => (
                    <option key={id} value={getcon.id.description}>{getcon.id.description }</option>
                  ))
                 }

                </select>
              </div>
            </form>
            <button className="actions18" autoFocus onClick={handleConfirmClick}>
              <div className="button85">
                <div className="button-base88">
                  <b className="text123">Confirm</b>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
