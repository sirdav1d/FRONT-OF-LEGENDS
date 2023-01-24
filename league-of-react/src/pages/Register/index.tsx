import { ChangeEvent, FormEvent, useState } from 'react';
import { MutationObserverErrorResult, useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { isDisabledRegister, registerUser } from '../../context/utils/utils';
import {
	RegisterButton,
	RegisterContainer,
	RegisterForm,
	RegisterFormItem,
} from './style';

type RegisterUser = {
	name: string;
	nickname: string;
	imageUrl: string;
	email: string;
	password: string;
	confirmPass: string;
};

export default function index() {
	const navigate = useNavigate();

	const [registerState, setRegisterState] = useState<RegisterUser>({
		name: '',
		nickname: '',
		imageUrl: '',
		email: '',
		password: '',
		confirmPass: '',
	});

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const values = { ...registerState, [e.target.name]: e.target.value };
		setRegisterState(values);
	}

	const register = useMutation(
		(data: RegisterUser) => {
			return registerUser(
				data.name,
				data.nickname,
				data.imageUrl,
				data.email,
				data.password,
			);
		},
		{
			onSuccess: () => {
				console.log('Criado com Sucesso');
			},
			onError: (error: MutationObserverErrorResult) => {
				console.log(error);
			},
			onMutate: () => {
				console.log('mutando');
			},
		},
	);

	async function onFinish(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			register.mutate(registerState);
			navigate('/login');
			return;
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<RegisterContainer>
				<RegisterForm onSubmit={onFinish}>
					<RegisterFormItem>
						<label htmlFor='name'>Nome:</label>
						<input
							type='text'
							id='name'
							name='name'
							value={registerState.name}
							onChange={handleChange}
						/>
					</RegisterFormItem>
					<RegisterFormItem>
						<label htmlFor='nickname'>Apelido:</label>
						<input
							type='text'
							id='nickname'
							name='nickname'
							value={registerState.nickname}
							onChange={handleChange}
						/>
					</RegisterFormItem>

					<RegisterFormItem>
						<label htmlFor='imageUrl'>Foto (URL):</label>
						<input
							type='text'
							id='imageUrl'
							name='imageUrl'
							value={registerState.imageUrl}
							onChange={handleChange}
						/>
					</RegisterFormItem>
					<RegisterFormItem>
						<label htmlFor='email'>E-mail:</label>
						<input
							type='email'
							id='email'
							name='email'
							value={registerState.email}
							onChange={handleChange}
						/>
					</RegisterFormItem>
					<RegisterFormItem>
						<label htmlFor='pass'>Senha:</label>
						<input
							minLength={8}
							type='password'
							id='password'
							name='password'
							value={registerState.password}
							onChange={handleChange}
						/>
					</RegisterFormItem>
					<RegisterFormItem>
						<label htmlFor='confirmPass'>Confirmaçaõ de senha:</label>
						<input
							minLength={8}
							type='password'
							id='confirmPass'
							name='confirmPass'
							value={registerState.confirmPass}
							onChange={handleChange}
						/>
					</RegisterFormItem>
					<RegisterButton
						type='submit'
						disabled={isDisabledRegister(registerState)}>
						Cadastrar
					</RegisterButton>
					<Link to={'/login'}>Voltar</Link>
				</RegisterForm>
			</RegisterContainer>
		</>
	);
}
