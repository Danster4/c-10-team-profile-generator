const fs = require('fs');
const pageTemplate = require('../src/page-template')

const writeFile = (data) => {
  fs.writeFile('./dist/index.html', pageTemplate(data), err => {
    // if there's an error, reject the promise and send the error to the Promise's '.catch' method
    if (err) {
      reject(err);
      // return out of the function here to make sure the Promise doesn't accidentally execture the resolve function as well
      return;
    }

    // if everything went well, resolve the Promise and send the successful data to the '.then()' method
    else {
      console.log('File created! Inside the "dist" folder, your index.html file was created. Please open and enjoy your Team Profile website!')
    }
  })
}



module.exports = { writeFile };