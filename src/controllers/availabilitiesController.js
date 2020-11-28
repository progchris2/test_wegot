//@flow
const render = require("../config/render");
const availabilityModel = require("../models/availabilities.modele");

const getTimesheet = async (req, res) => {
    let products = await availabilityModel.findById(
        req.url.substring(req.url.length - 1),
    );
    render(res, 200, products);
};

module.exports = {
    getTimesheet,
};
