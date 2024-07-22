const jwt =require('jsonwebtoken');
const genrateTokon=(id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{
        expiresIn:'15d',
    });
}



module.exports = genrateTokon;