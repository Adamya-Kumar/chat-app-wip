const pageNotFound=(req,res,next)=>{
    const error =new Error(`No Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

module.exports = pageNotFound;