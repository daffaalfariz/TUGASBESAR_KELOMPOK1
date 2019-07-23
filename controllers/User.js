const User = require('../Models/User');

module.exports.postRegister = (req,res) =>{

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    User 
        .findOrCreate({
            where:{
               username: req.body.username
            },
            defaults:{
                username: req.body.username,
                password: hash,
                roles: req.body.roles
            }
        })
        .then((user)=>{
            res.json(user);
        })
        .catch((error)=>{
            console.log(error);
        })
}


