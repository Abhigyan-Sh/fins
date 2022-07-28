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
