### cmdlets
`Invoke-Item .`
`explorer`

### 
Fragment vs div

###
? for flex division

###
putting default style for links in index.js

###
IconContext.Provider for controlling react-icons color, size, className, style, attr, title.

### prepare pseudo elements
once you use tailwind you can't use css or scss.

### 
text-grey-500, text-7xl
and 
decoration-grey-500 
are different things

### how to display image in frontend from backend
- from blog.controller.js
const config = require('../config')
var multer = require('multer')

exports.getFile = function (req, res) {
    res.download('./blog/uploads/' + req.params.path)
}

- from blog.routes.js
app.get('/blog/getFile/:path', blog.getFile)

- request
http://localhost:8080/blog/getFile/img.png

### upload image to node server


### axios script
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000'
})
export default instance

### division in ratios
using grid it was down in portfolio proj.
`grid-template-columns: repeat(2, 1fr)`

### 
  "proxy": "http://localhost:5000/api/"
or 
axios file creation

### 
server url in axios file is kept with env var

### how to use axios

### the big three
/* Middlewares to be able to use req.body and get away from security error issues */
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

### 
passing down props
mapping through object.. providing unique key (e,i), each and index

### modifying tailwind.config.js
- 
extend: {
      gridTemplateColumns: {
        'sky': '14%  60% 26%'
      }
    },

- 
'grid grid-cols-sky'

### 
study the grids of medium.com

### 