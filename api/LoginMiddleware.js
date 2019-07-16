let loginMiddleware = (req,res,next)=>{
    console.log(req.method);
    next();
}
module.exports = loginMiddleware