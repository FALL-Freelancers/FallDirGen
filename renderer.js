// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {dialog} = require('electron').remote;
var fs = require('fs')
var folderName;
var baseDir;
function folder(){
    folderName = document.getElementById("project").value
    dialog.showOpenDialog({properties:['openDirectory']}, function(Dir){
        baseDir = Dir
    })
}
function mkdir(){
        if(baseDir !== undefined){
            fs.mkdir(baseDir + "/" + folderName)
            console.log(baseDir[0]);
        }
        else{
            console.log("Select a folder")
        }   
}