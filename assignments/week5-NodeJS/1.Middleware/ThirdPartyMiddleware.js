// Third-party middleware

// Use third-party middleware to add functionality to Express apps.
// Install the Node.js module for the required functionality, then load it in app at the application level or at the router level.
// installing and loading the cookie-parsing middleware function cookie-parser.

 //$ npm install cookie-parser



let express = require('express')
let cookieParser = require('cookie-parser')

let app = express()
app.use(cookieParser())

app.get('/', (req, res)=> {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(1998)

/*output:
  -------
  Cookies:  { io: 'DRCOnufkemelLG2qAAAB' }
Signed Cookies:  {}
*/