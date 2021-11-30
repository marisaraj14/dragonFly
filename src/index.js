import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'

async function initClient() {
  // Initializes the client with the API key and the Translate API.
  try {
      const resp = await window.gapi.client.init({
          'clientId': '615661368688-sevov291k3qkk950hq43ugrt8rjnhmt0.apps.googleusercontent.com',
          'apiKey': 'AIzaSyBRhgyvT-uYmKUIPkkOvNDPyI_h_I1ny-Q',
          'discoveryDocs': ['https://script.googleapis.com/$discovery/rest?version=v1'],
          'scope': ' https://www.googleapis.com/auth/spreadsheets'
      })
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
  }
  catch (error) {
      console.log(JSON.stringify(error, null, 2));
  } finally {

  }
}

function updateSigninStatus(isAuthorized) {
  if (isAuthorized) {
      ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );
  } else {
    window.gapi.auth2.getAuthInstance().signIn();
  }
}

window.gapi.load('client:auth2', initClient);

//gapi.auth2.getAuthInstance().signOut();

reportWebVitals();
