#!/usr/bin/env node
const util =require('util')
const  exec  = util.promisify(require('child_process').exec)
const rename = util.promisify(require('fs').rename);

const program = require('commander');
const ErrorHandle = (error) => console.log(error);
async function gitAndRename (string){
   try{
        await exec(
            'git clone https://github.com/Gemisheresy/ReactBoiler.git'
            )
        await rename(
        './ReactBolier',
        `./${string}`
    )
   }
   catch (error){
        ErrorHandle(error)
   }
}
function echoFunction(string){
    console.log(string)

}
program
    .version('0.1.0')
    .command("init <string>")
    .action(gitAndRename);


program.parse(process.argv);