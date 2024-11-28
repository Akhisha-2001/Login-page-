function Validation(req,res,next){
    if(req.token){
        console.log("approved");
        next();
        return;
    }
    console.log("No Token");
    res.send("No Auth");
}

module.exports = Validation;
