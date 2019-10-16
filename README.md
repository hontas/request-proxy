# request-proxy
Getting around the 'Access-Control-Allow-Origin' problem of some API's

## Install
```bash
git clone https://github.com/hontas/request-proxy.git
cd request-proxy
npm install && npm start
```

## Use
```html
fetch('http://localhost:5000?url=XXX')
  .then((response) => /* handle response */)
  .catch((error) => /* handle error */);
```

Where `XXX` is the address you wish to perform a get request to

