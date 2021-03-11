const request = require('request');
const fs      = require('fs');
const args    = process.argv.slice(2);

const url = args[0];
const fileName = args[1];

const getPage = (url,localPath) => { 
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      return;
    }
    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log('There is an error with localPath: ', localPath);
      } else {
        console.log(`File size ${body.length} has been created to ${localPath}`);
      };
    });
  });
};

if (!url || !fileName) {
  console.log("This script requires url and filepath/name to work");
} else {
  getPage(url,fileName);
}

