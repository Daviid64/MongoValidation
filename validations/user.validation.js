import joi from 'joi';

export const createUserSchema = joi.object({
    name: joi.string().min(3).max(50).required().empty().trim().message({'string.empty': 'Le prénom est requis.'}),
    lastname: joi.string().min(3).max(50).required().empty().trim().message({'string.empty': 'Le nom est requis.'}),
    email: joi.string().min(3).max(50).required().empty().trim().message({'string.empty': 'L\'email est requis.'}),
    password: joi.string().min(3).max(50).required().empty().trim().message({'string.empty': 'Le mot de passe est requis.'}),
    confirmPassword: joi.string().min(3).max(50).required().empty().trim().message({'string.empty': 'Les mots de passes ne correspondent pas.'}),
    role: joi.string(),
    avatar: joi.string(),
})

export const loginSchema = joi.object({
    email: joi.string().min(3).max(50).required().empty().trim().message({'string.empty': 'L\'email est requis.'}),
    password: joi.string().min(3).max(50).required().empty().trim().message({'string.empty': 'Le mot de passe est requis.'}),
})