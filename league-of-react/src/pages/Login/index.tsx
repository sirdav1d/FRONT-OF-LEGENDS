import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { UseAuth } from '../../context/hooks/UseAuth';
import {
	BtnSubmit,
	FormItem,
	LoginContainer,
	LoginFormContainer,
	LoginTitle,
} from './style';

export default function Login() {
	const auth = UseAuth();
	
	const navigate = useNavigate();
	const [loginState, setLoginState] = useState({
		email: '',
		password: '',
	});

	const [isLoading, SetIsLoading] = useState(false);

	async function onFinish(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const email = loginState.email;
		const password = loginState.password;
		try {
			setTimeout(() => {
				SetIsLoading(true);
			}, 100);

			await auth.authenticate(email, password);
			navigate('/');

		} catch (error) {
			SetIsLoading(false);
			window.alert('Usuário ou senha inválidos');
			console.log(error);
			setLoginState({
				email: '',
				password: '',
			});
		}
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const values = { ...loginState, [e.target.name]: e.target.value };
		setLoginState(values);
	}

	function isDisabled() {
		if (!loginState.email || !loginState.password) {
			return true;
		}

		if (loginState.password.length < 8) {
			return true;
		}

		if (isLoading) {
			return true;
		}

		return false;
	}

	return (
		<>
			{isLoading && <Loader />}
			<LoginContainer>
				<LoginTitle>League of ReactJS</LoginTitle>
				<LoginFormContainer onSubmit={onFinish}>
					<FormItem>
						<label htmlFor='email'>E-mail:</label>
						<input
							type='email'
							name='email'
							id='email'
							value={loginState.email}
							onChange={handleChange}
						/>
					</FormItem>
					<FormItem>
						<label htmlFor='password'>Senha:</label>
						<input
							type='password'
							name='password'
							id='password'
							value={loginState.password}
							onChange={handleChange}
						/>
					</FormItem>

					<BtnSubmit
						type='submit'
						disabled={isDisabled()}>
						Entrar
					</BtnSubmit>
					<Link to={'/register'}>Cadastrar</Link>
				</LoginFormContainer>
			</LoginContainer>
		</>
	);
}
