const eventPathRouter = require("./route");
const render = require("../render");

const matchingRouter = (req, res) => {
    eventPathRouter(req, (err, controller) => {
        if (err) {
            render(res, 400, {message: "Route Not Found"});
        } else {
            controller(req, res);
        }
    });
};

module.exports = matchingRouter;
