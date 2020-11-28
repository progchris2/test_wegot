const http = require("http");
const matchingRouter = require("./config/routers");
const middleware = require("./middlewares");
const render = require("./config/render");

const server = http.createServer((req, res) => {
    try {
        middleware.authorization(req, res);
        matchingRouter(req, res);
    } catch (err) {
        render(res, 401, {error: err.message});
    }
});

const port = +process.env.PORT || 8080;

server.listen(port, () =>
    console.log(`serveur bien démarré sur http://localhost:${port}`),
);
