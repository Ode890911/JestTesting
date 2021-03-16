
import { CreateExcelFile } from "../UTIL/createExcelFile";
import fs from 'fs'

let path = require("path");
let excelUtil = new CreateExcelFile();

let dir =  excelUtil.createDir("FilesFolder")
console.log(dir)

test("create excel file",() =>{
    console.log(dir)
    const testData = [
        {
            studentName: "abc",
            dob: "09-02-09",
            grade: "6th",

        },
        {
            studentName: "xyz",
            dob: "09-02-09",
            grade: "6th Grade",
        },
        {
            studentName: "abc",
            dob: "09-02-09",
            grade: "6th Grade",
        }]

     //   excelUtil.createDir(fileFolder)

    // generate an excel file with timestamp
    excelUtil.createXlFile(testData, `${dir}/newFile_${excelUtil.timeStamp()}.xlsx`);
})

test('Retrieve the file in our local', function () {

    //  let fileDir = path.resolve(__dirname, ``);
      let files: string[] = fs.readdirSync(`${dir}`).filter(fn =>
          fn.startsWith("newFile_"));
  
      console.log(files);
      let latestFiles = path.resolve(`${dir}`, files[files.length - 1]); // latest file
  
      console.log(" latest file created is ---" + latestFiles);
  
  
  });

