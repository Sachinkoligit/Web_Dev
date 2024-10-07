
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'
inquirer
  .prompt([{
      message:"Type in Your URL: ",
      name:"URL"
  }
  ])
  .then((answers) => {
    console.log(answers['URL'])
    const url=answers['URL']

    fs.writeFile("url1.txt",url,(err)=>{
        if(err) throw err;
        console.log("URL is saved.")
    })

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });