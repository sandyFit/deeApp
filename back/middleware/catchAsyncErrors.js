// To catch errors from async promises
module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)