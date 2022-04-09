const fs = require('fs')

const content = 'Some content!'

fs.writeFile(__dirname + '/f.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
