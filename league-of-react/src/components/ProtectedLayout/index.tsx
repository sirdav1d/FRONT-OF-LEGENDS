import { UseAuth } from '../../context/hooks/UseAuth';
import Login from '../../pages/Login';

export default function ProtectedLayout({
	children,
}: {
	children: JSX.Element;
}) {
	const auth = UseAuth();

	if (!auth.token) {
		return <Login></Login>;
	}

	return <>{children}</>;
}
