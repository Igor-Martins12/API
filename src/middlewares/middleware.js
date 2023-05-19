exports.middlewareGlobal = (req, res, next) => {
        next();
};               


exports.chekCsrfError = (err, req, res, next) =>{
        if(err && 'EBADCSRFTOKEN' === err.code) {
                return res.render('404.ejs');
        }
};

exports.csrfMiddleware = (req, res, next) => {
res.locals.csrfToken = req.csrfToken();
next();
}
