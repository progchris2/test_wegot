const path = require("path");
const {createReadStream} = require("fs");

const readDataFile = (callback) => {
    let data = [];
    let readStream = "";
    let rootPath = path.resolve(
        path.dirname(path.dirname(path.dirname(__dirname))),
    );
    const pathFile = [
        `${rootPath}/data/input1.txt`,
        `${rootPath}/data/input2.txt`,
        `${rootPath}/data/input3.txt`,
        `${rootPath}/data/input4.txt`,
        `${rootPath}/data/input5.txt`,
    ];
    pathFile.forEach((item, i) => {
        readStream = createReadStream(item);
        readStream.on("data", (chunk) => {
            data = [
                ...data,
                {[`partner${i + 1}`]: chunk.toString().split("\n")},
            ];
        });
    });
    readStream.on("error", (err) => {
        throw new Error(`Error: ${err.message}`);
    });
    readStream.on("end", () => {
        callback(data);
        readStream.close();
    });
};

module.exports = readDataFile;
