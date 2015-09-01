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
$.get('http://localhost:5000?url=XXX', function (response) {});
```

Where `XXX` is the address you wish to perform a get request to

