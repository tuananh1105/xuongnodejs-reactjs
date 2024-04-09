import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().required().trim().messages({
    "any.required": "Username Bắt Buộc",
    "string.empty": "Username không được để trống",
    "string.trim": "Username không được chưa khoảng trắng",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Bắt buộc phải nhập Email",
    "string.email": "Email không đúng định dạng",
    "string.empty": "Email không được để trống",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Password bắt buộc phải nhập",
    "string.empty": "Password không được để trống",
    "string.min": "Password phải có ít nhất 6 ký tự",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "Password không khớp",
    "any.required": "confirmPassword bắt buộc phải nhập",
  }),
  avatar: Joi.string().required().messages({
    "any.required": "Avatar bắt buộc nhập",
    "string.empty": "Avatar không được để trống",
  }),
});
export const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email bắt buộc phải nhập",
    "string.email": "Email không đúng định dạng",
    "string.empty": "Email không được để trống",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Password bắt buộc phải nhập",
    "string.empty": "Password không được để trống",
    "string.min": "Password phải có ít nhất 6 ký tự",
  }),
});
