import { Answers, Data } from "../interface";
import { sendMessage } from "../utils";
const fs = require("fs");
const events = require("events");

class Sync extends events { }

const fileChange: any = new Sync();

export function syncFile(answers: Answers) {
  fs.watch(answers.file, { recursive: true }, (event: string, filename: string) => {
    fileChange.emit("eventForFile", { event, filename });
  });

  fileChange.on("eventForFile", (data: Data) => {
    const filePath = answers.file + "/" + data.filename;
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      const lastLine = Buffer.from(data).toString().split('\n');
      const checkValue = lastLine[lastLine.length - 2];
      console.log(checkValue.trim());
      if (checkValue.trim() === 'Flame Detected') {
        console.log('I was here');
        sendMessage("Fire Fire, go out")
      }
    });
  });
}
