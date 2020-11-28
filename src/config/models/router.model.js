const AvailabilitiesController = require("../../controllers/availabilitiesController");

module.exports = [
    {
        path: "/api/availability/:id",
        controller: AvailabilitiesController.getTimesheet,
        method: "GET",
    },
];
