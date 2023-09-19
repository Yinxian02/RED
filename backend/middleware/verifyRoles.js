const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log(req.query.roles)
        const rolesQuery = req.query.roles
        if (!req?.query.roles) {
            console.log("verification failed");
            return res.sendStatus(401);
        }
        var rolesNums = rolesQuery.map(function(str) {
            return parseInt(str); })
        const rolesArray = [...allowedRoles];
        console.log(rolesArray)
        const result = rolesNums.map(role => rolesArray.includes(role)).find(val => val === true);''
        console.log(result)
        if (!result) {
            console.log("verification failed - no result")
            return res.sendStatus(401);
        }
        next();
    }
}

module.exports = verifyRoles