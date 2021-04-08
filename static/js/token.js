var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Authorization", "Basic MXRjajI4bjcybTZ1dXU3dHQ4YjhqcDBzdTk6OTk4MW9jcjlhNzNhMGk1bGg3cm51MGhmOG5pYWNtbmxlODF0Z2FtMGkwM2duMHM2M2Jw");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://sandbox.auth.src.apis.discover.com/oauth2/token?grant_type=client_credentials", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));