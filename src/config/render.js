module.exports = (res, code, data) => {
    res.writeHead(code, {"Content-type": "application/json"});
    res.end(JSON.stringify(data));
};
