// importation email-validator
const emailValidator = require('email-validator');

emailValidator.validate("test@email.com"); // true

module.exports = (req, res, next) => {
    if(emailValidator.validate(req.body.email)) {
        next()
    }else{
        return res.status(400).json({error : "Merci de renseigner une adresse e-mail valide."})
    }
}