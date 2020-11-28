module.exports = {
    authorization: (req) => {
        if (req.headers.accept !== "application/json") {
            throw new Error("verifier vos entêtes");
        }

        if (!req.headers.authorization) {
            throw new Error("verifier vos entêtes");
        }
    },
};
