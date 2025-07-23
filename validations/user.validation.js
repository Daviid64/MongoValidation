import joi from 'joi';

export const createUserSchema = joi.object({
    name: joi.string()
    .min(3)
    .max(50)
    .required()
    .empty()
    .trim()
    .messages({ 
        'string.empty': 'Le prénom est vide.',
        'any.required': `Le prénom est requis`
     }),
    lastname: joi.string().min(3).max(50).required().empty().trim().messages({ 'string.empty': 'Le nom est vide.','any.required': `Le nom est requis` }),
    email: joi.string().min(3).max(50).required().empty().trim().messages({ 'string.empty': 'L\'email est vide.','any.required': `L'email est requis` }),
    password: joi.string().min(3).max(50).required().empty().trim().messages({ 'string.empty': 'Le mot de passe est vide.','any.required': `Le mot de passe est requis` }),

    confirmPassword: joi.string().min(3).max(50).required().empty().trim().messages({ 'string.empty': 'Les mots de passes ne correspondent pas.','any.required': `La confirmation du mot de passe est requise` }),
    role: joi.string(),
    avatar: joi.string(),

})

export const loginSchema = joi.object({
    email: joi.string().min(3).max(50).required().empty().trim().messages({ 'string.empty': 'L\'email est requis.' }),
    password: joi.string().min(3).max(50).required().empty().trim().messages({ 'string.empty': 'Le mot de passe est requis.' }),
})  