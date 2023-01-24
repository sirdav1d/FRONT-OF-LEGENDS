import styled from 'styled-components';
import {
	BtnSubmit,
	FormItem,
	LoginContainer,
	LoginFormContainer,
} from '../Login/style';

export const RegisterContainer = styled(LoginContainer)`
	padding: 20px 40px;
	height: max-content;
`;

export const RegisterFormItem = styled(FormItem)`

	label {
		font-size: 12px;
	}
	input {
		font-size: 10px;
	}
`;

export const RegisterForm = styled(LoginFormContainer)`
	margin: 0 0 40px;
	
`;

export const RegisterButton = styled(BtnSubmit)`
	width: 100%;
	margin-top: 16px;
	font-size:16px;

	
`;
