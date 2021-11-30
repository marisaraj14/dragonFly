var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button'); 
function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
}

function initClient() {
    // Initializes the client with the API key and the Translate API.
    gapi.client.init({
        'clientId': '615661368688-sevov291k3qkk950hq43ugrt8rjnhmt0.apps.googleusercontent.com',
        'apiKey': 'AIzaSyBRhgyvT-uYmKUIPkkOvNDPyI_h_I1ny-Q',
        'discoveryDocs': ['https://script.googleapis.com/$discovery/rest?version=v1'],
        'scope': ' https://www.googleapis.com/auth/spreadsheets'
    }).then(function () {

        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;

    }, function (error) {
        console.log(JSON.stringify(error, null, 2));
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        callAppsScript();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

function callAppsScript() {
    gapi.client.script.scripts.run({
        'scriptId': 'AKfycbx-PHA4kWR0404h9KA0Ct8zrI41NHQ_3z0ibaqSxI4',
        'resource': {
            'function': 'getSummary'
        }
    }).then(function (resp) {
        var result = resp.result;
        if (result.error) {
            console.log('Error: ' + result.error.message);
            return
        }
        console.log(result.response.result);
    }, function (error) {
        console.log(JSON.stringify(error, null, 2));
    });
}

function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}