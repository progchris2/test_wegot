const readDataFile = require("../services/helpers/read-file");
const determineAvailabilityPartner = require("../services/helpers/determines-Availability-partner");

const findById = (id = "cool") => {
    try {
        readDataFile((data) => {
            console.log(data);
            data.forEach((item, i) =>
                determineAvailabilityPartner(item[Object.keys(item)[0]], id),
            );
        });
    } catch (e) {
        throw new Error("Article Not Found");
    }
};

module.exports = {
    findById,
};
