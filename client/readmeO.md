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
(in server.js)
app.use('/image',express.static('assets/profilePic'))
- path to be accessed from frontend, location of folder containing pic
(in frontend.js)
http://localhost:8000/image/user_profile.png

### upload image to node server


### axios script
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000'
})
export default instance

### division in ratios
using grid it was down in portfolio proj.
`grid-template-columns: repeat(2, 1fr)` with grid
`basis-9/12 basis-3/12` with flexbox
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

### using downloaded fonts
- these are of two types .otf(open type font) and .ttf(true type font) with the former one better albeit there is not much of a difference when it comes for a normal day to day user.
- - for google fonts just use embed with html option and you are good enough to go further implementing it,
(in index.css)
- - @layer base {
    h1, h2 {
        font-family: 'Lora, serif';
    }
}
(so yeah! this is how you add css even when you are using tailwindcss)
also @import can be pasted in index.css

or instead what could be even better is:
(in tailwind.config.js)
theme: {
    extend: {
        fontFamily: {
            'lora': 'Lora, serif
        }
    }
}
then use, 'font-lora'
<!--  -->
- now comes using ttf and otf
- - drag the directory having fonts to public folder of vite
- - (in index.css)
@layer base {
    @font-face {
        font-family: 'Myfont';
        font-weight: 700;
        font-style: italic;
        src: url('./path to font-file.otf') format('otf'), 
        url('./path to font-file.otf') format('otf')
    }
    @font-face {
        font-family: 'Charter';
        font-weight: 500;
        src: url('../public/fonts/charter/otf/Charter Regular.otf') format('otf')
    }
}
(in tailwind.config.js)
theme: {
    fontFamily: {
      'charter': ['Charter']
    }
}

- - put google api fonts in one import here i have done 3 its nothing super easy
### don't write image, photo or picture in alt value as you need not to..
### sidebar
<!-- 'from our community'
Jim maella
blog...

clia
blog.. -->

'about me'
 <!-- image -->
 about me

'genres to read from..'
all categories

'FOLLOW ME ON'
twitter github linkedin abhigyanshukla.com

### these `` template strings are a part of javascript not DOM so enter in js mode first before using them ``.

import { useLocation } from 'react-router-dom'

didn't installed react-router-dom

### to bring back

(in Home.js) removed search 
(in Sidebar.js) removed 


instead of padding for a single word line height can be used for the same

### how to edit config file 

### how to add link of another website


### <Redirect to="/" />
{/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}

### &nbsp; is non-breaking space

### Input elements should have autocomplete attributes (suggested: "current-password"
autoComplete = {true}

### window.location.replace('/login') or location.replace("https://www.w3schools.com") both correct syntax..

### 
uselocation() returns an object
pathname and search are its keys thus obj.method or obj.key which equals some value
so either extract them explicitly or go by doing obj.key 

### 
- useEffect()
  - const fetchPost() = async() => {}
    - try {} catch() {}

### 
username 
profilePic 
postPic 
title 
categories 
desc


### custom fonts
index.css and tailwind.config.js

### 
.replace('/') places any url kept within after home pg.

### 
why this right,
onClick={()=> {setUpdateMode(true)}
but this below one is not,
onClick={setUpdateMode(true)}

### how to make one section scrollable while others not on webpage
`sticky top-0`, `h-screen` to Navbar.js ,div container

### 
check presence of empty string for category
###
if onClick has parameter 
onClick={()=>{addToCategories(i)}}

if onClick has no parameters
onClick={addToCategories}

### 
be careful at keys of postSchema

### 
    <!-- _id:'62fe80565ade6124a2f2e2f2', -->
    <!-- email:"pryanshukla0321@gmail.com", -->
    <!-- username:"pryansh", -->
    
    <!-- profilePic:"", -->
    <!-- profession:"dev", -->
    <!-- institute:"college student", -->
    <!-- aboutMe: "", -->
    <!-- lives_in: "", -->

    <!-- verified:true, -->
    <!-- createdAt:'2022-08-18T18:09:26.080+00:00', -->
    <!-- updatedAt:'2022-08-18T18:10:03.460+00:00' -->

### 
to make Settings, AuthenticateModal
### createContext and useContext
- (in NoteContext.js)
import { createContext } from 'react'

export const NoteContext = createContext()

export const NoteState = ({children}) => {
    const state = {
        name: 'michael',
        lives_in: 'Los Santos',
    }
    return (
        <NoteContext.Provider value={state}>
            {children}
        </NoteContext.Provider>
    )
}

- in App.js
import { NoteState } from './context/NoteContext.js'
wrap your app with 
<NoteState></NoteState>

- in Write.js
import { useContext } from 'react'
import { NoteContext } from '../context/NoteContext.js'

const a = useContext(NoteContext)
console.log(a.name)

### used hooks
rules: 
- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional

useState()
useEffect(()=> {},[])
createContext() n useContext()
useRef()
useReducer()

### 
how to change link with clicking on a button without useState and without creating function but rather can it be done using callback function if yes then how?
### To do
all done
### 

import { IconContext } from react-icons/lib'
<IconContext.Provider value= {size:'20', color:'red'}}>
  <HiOutlineLocationMarker/>
</IconContext.Provider>

### 3 ways of saving files
- saving file on your server maybe blob
- saving file's binary data or base64 string data in a database
- AWS buckets..

### multer code
(in server.js)

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/profilePic')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'_'+file.originalname)
    }
})
const upload = multer({storage: fileStorageEngine})
app.post('/api_v1/upload/profilePic', upload.single('image'), (req, res) => {
    res.status(200).send('file has been uploaded successfully!')
})

### not workings
- - navbar and sidebar not fixed
- - build posts
- - req
- - if (!postUser.profilePic) {
    postUser.profilePic = 'user_profile.png'
  }
  n
  user.profilePic
  ERROR
