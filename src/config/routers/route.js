const routes = require("../models/router.model");

const eventPathRouter = (req, callback) => {
    const pathFilter = routes.filter((item) => {
        return (
            (item.path === req.url ||
                (item.path.includes(":") &&
                    req.url.substring(req.url.length - 1).match(/[0-9]+/) !==
                        null)) &&
            item.method === req.method
        );
    });

    pathFilter.length
        ? callback(null, pathFilter[0].controller)
        : callback(true, []);
};

module.exports = eventPathRouter;
