const determineAvailabilityPartner = (data, id) => {
    let filter = data.filter((item) => item.split(" ").includes(id.toString()));
    return filter;
};

module.exports = determineAvailabilityPartner;
