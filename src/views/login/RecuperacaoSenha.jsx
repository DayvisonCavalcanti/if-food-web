import React from 'react';
import iffood from "../../assets/iffood.png";
import { useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../validation/RecuperacaoSenhaValidation';



function RecuperacaoSenha() {

    //navegação
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = data => {
        console.log(data);
        navigate('/confirmar-email');
    };

    return (
        <div className="h-screen  flex items-center justify-center">
            <div className="flex w-full max-w-6xl">
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        src={iffood}
                        alt="Placeholder"
                        className="object-contain w-80"
                    />
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center  p-8 rounded-lg shadow-lg">

                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-5xl text-white font-bold mb-8">Recuperaçao de Senha</h2>

                        <div className="mb-8">
                            <label className="block text-white mb-2 text-xl" htmlFor="email">
                                E-mail
                            </label>
                            <input 
                                className="w-full px-3 py-2 border rounded-xl text-xl" 
                                {...register('email')}
                                type="email"
                                id="email"
                                placeholder="Insira seu e-mail"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>




                      
                        <button  style={{ backgroundColor: '#24A645' }} className="w-2/4  text-white py-2 rounded-xl text-xl hover:bg-blue-700" >Enviar</button>
                        

                        <p className="px-3 mt-3 text-white text-xs ">Não tem uma Conta? <a className="underline" href="../cadastro-inicial">Faça seu Cadastro.</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RecuperacaoSenha;
