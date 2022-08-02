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
