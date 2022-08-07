## importing and exporting files

### ES-6 version
write type module below license in package.json

export default name
import name from './...'

export {name, func1}
import {name, func1} from './...'       (precision required)

### CommonJS
module.exports = name;
const eman = require('./..')

module.exports = {name, func1};
const {name, func1} = require('./..')         (now it has to be precise)

`git reset` to unstage your files


### format of code
import bar
initializing bar
logic code

think from perspective of frontend that what will be the http method
think whether frontend is posting or just asking for info. at first place while loading page.

NODEMAILER NOTES::
By default, MongoDB creates an _id property on every document that's of type ObjectId. Many other databases use a numeric id property by default, but in MongoDB and Mongoose, ids are objects by default.

thus Schema.Types.ObjectId is a datatype, a datatype like String, int or float, Boolean

Steps involved:
- Create Transporter to send email
- Create Token model
- Send verification link after sign-up(this is where both come together by import)
- verify link sent by mail

### on may30 update
so we will use App password option instead
- first start 2-step verification
- click on App password below it.

node sendEmail.js, command to run sendEmail.js
npm run speedLight, npm run comes when ..

### to send an email
auth.js needs to run alongwith this google's application usage password needs to be generated and given.

### if someone reaches to the login page before checking their mailbox
- Now still if they clicked on that link present in mail
their `token` should `not exist` anymore and `verified : true` in User collection
pass the login

- If they did come here(login page) before clicking on link provided with mail
their `token` would still `exist` and `verified : false` in User collection.
So checking on both parameters and if these two are present as they are written here then tell them to check their mailbox.

while if `verified : false` and `token` does `not exist` then 
(register again)

in this project i hv thought of all and i know i can implement those features but i won't in this project.. maybe sometime later...
for now, if 
verified : false, check your mailbox
verified : true, let them log-in the system

while on page of link verified or not(verified logo page), place resend mail link
(for above don't set fields on form on frontend to blank instead let them what they were and on clicking of link call the function again as was called by register button also link should appear only after button has been clicked and response has been obtained).

CORS stands for Cross-Origin Resource Sharing . It allows us to relax 
the security applied to an API. This is done by bypassing the 
Access-Control-Allow-Origin headers, which specify which origins can access the API.

### JWT - JSON WEB TOKENS
- first authorization vs authentication
to check that the user who is login in is authenticate legit user or not
while authorization is to check whether this logged in user has access to these files and functionality or not.

for authorization server sends `session Id` to the browser and browser stores these in form of `cookies` but with JWT browser instead of using cookies uses a JSON Web Token.

?
createdAt key
jwt - 
joi - (now can use it follow `https://www.youtube.com/watch?v=u9kxYilQ9l8` but everything is there in documentation `https://joi.dev/api/?v=17.6.0`)

tips:
use fragments rather that using div in frontend for wrapping 
(`https://www.geeksforgeeks.org/why-are-fragments-better-than-container-divs/`)

`:` means `declaring variable`
i.e. :token  means 912797312798217
which is value for token variable in backend, value for which has been sent from frontend.

a user may change their email as well which is threat
since on frontend i won't provide them with the option but they can inject the code in which they will place one more field with its value, email: "...@gmail.com" hence for inputs i will be using `joi` package.

