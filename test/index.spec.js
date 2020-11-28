const determineAvailabilityPartner = require("../src/services/helpers/determines-Availability-partner");
describe("test input from server", () => {
    it("verification of input1", () => {
        let data = [
            "1 08:45-12:59",
            "2 08:24-10:54",
            "1 14:45-14:47",
            "3 09:56-16:25",
            "5 15:16-16:28",
        ];
        let result = determineAvailabilityPartner(data, 1);
        expect(result).toBeDefined();
        expect(result).toEqual(["1 13:00-13:59"]);
    });
});
