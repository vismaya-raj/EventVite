// import React from 'react'
// import {GoogleLogin} from 'react-google-login'

// const clientId = "267021333088-aip70ei1iihpnkvgg7vhrovou1ro3uet.apps.googleusercontent.com";

// function Account() {
//   const responseGoogle = (response) => {
//     console.log(response); // Check the entire response object
//     if (response.accessToken) {
//       console.log(response.accessToken);
//     }
//   };
  
//   return (
//     <div className="App">
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={"single_host_origin"}
//       />
//     </div>
//   );
// }
// export default Account

import React, { useState, useEffect } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from "@mui/material";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script"

// import Icon from "./icon";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
// import Input from './Input';
// import useStyles from "./styles";

function Account() {

useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: '**YOUR_CLIENT_ID**.apps.googleusercontent.com',
            scope: 'email',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);
      
       const googleSuccess = async (res) => {
        console.log(res);
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sing In ha fracasado intentelo denuevo mas tarde");
    };
      
 return (
 
 <GoogleLogin 
                    clientId="267021333088-aip70ei1iihpnkvgg7vhrovou1ro3uet.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button  color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained"
                        >Google Sing in</Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
 
 )
                    }
                    export default Account;