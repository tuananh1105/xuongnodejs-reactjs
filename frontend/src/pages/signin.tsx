import { useLocalStorage } from '@/hooks/useStorage';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form'

const signinSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).min(3).required(),
    password: Joi.string().min(6).required(),
})

const Signin = () => {
    const [, setUser] = useLocalStorage('user', {});
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            resolver: joiResolver(signinSchema),
            email: "",
            password: "",
        }
    });

    const { mutate } = useMutation({
        mutationFn: async (fromData: { email: string; password: string }) => {
            const { data } = await axios.post('http://localhost:8080/api/signin', fromData);
            return data;
        },

        onSuccess: (data) => setUser(data),
        onError: (error) => console.log(error),

    })
    const onSubmit = (fromData: { email: string; password: string }) => {
        mutate(fromData);
        console.log(fromData);
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className='form-lable'>Email</label>
                    <input type="text" className='form-control' placeholder='email' {...register("email", { required: true, minLength: 3 })} />
                    {errors.email && <p className='tex-danger'>{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='form-lable'>Mật Khẩu</label>
                    <input type="password" className='form-control' placeholder='mật khẩu' {...register("password", { required: true, minLength: 6 })} />
                    {errors.password && <p className='tex-danger'>{errors.password.message}</p>}
                </div>
                <button className='btn btn-primary'>Đăng Nhập</button>
            </form >
        </div >
    )
}

export default Signin