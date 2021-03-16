import xlsx from "xlsx";
import * as fs from "fs";
import * as mkdirp from "mkdirp";

export class CreateExcelFile {
    createDir(dir:string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
        return dir;
    }
  
    timeStamp(){
        const date = new Date()
        const year = date.getFullYear().toString().substr(-2);
        const month = `${date.getMonth() +1}`.padStart(2, '0')
        const day = `${date.getDate() +1}`.padStart(2, '0')
        const hour = `${date.getHours() +1}`.padStart(2, '0')
        const min = `${date.getMinutes() +1}`.padStart(2, '0')
        const sec = `${date.getSeconds() +1}`.padStart(2, '0')
        return `${year}${month}${day}${hour}${min}${sec}`
    }


    createXlFile(data:any, fileName: string){
        // create a new workbook
        const workbook = xlsx.utils.book_new()
        // make a worksheet
        const worksheet = xlsx.utils.json_to_sheet(data);

       // add the worksheet to the workbook 
       xlsx.utils.book_append_sheet(workbook, worksheet)

       xlsx.writeFile(workbook,fileName ) 
    }

}