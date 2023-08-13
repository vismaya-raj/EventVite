import React from 'react'
import {GoogleLogin} from 'react-google-login'

const clientId = "267021333088-aip70ei1iihpnkvgg7vhrovou1ro3uet.apps.googleusercontent.com";

function Account() {
  const responseGoogle = (response) => {
    console.log(response.accessToken);
  };
  return (
    <div className="App">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
export default Account