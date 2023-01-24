import { CgProfile } from 'react-icons/cg';
import { FiSettings, FiHome, FiLogOut } from 'react-icons/fi';
import { NavContainer } from './style';
import logo from '../../assets/images/logo.svg';
import { UseAuth } from '../../context/hooks/UseAuth';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const auth = UseAuth();
	const navigate = useNavigate();

	const [active, SetActive] = useState<string>('');

	function LogOut(e: any) {
		e.stopPropagation();
		auth.logout();
		SetActive('home');
		return navigate('/login');
	}
	return (
		<NavContainer>
			<nav>
				<Link to={'/'}>
					<img
						src={logo}
						alt='Logo do LOL'
					/>
				</Link>

				<ul>
					<Link to={'/'}>
						<li
							className={active?.includes('home') ? 'home' : ''}
							onClick={() => SetActive('home')}>
							<FiHome />
						</li>
					</Link>

					<Link to={'/profile'}>
						<li
							className={active?.includes('profile') ? 'profile' : ''}
							onClick={() => SetActive('profile')}>
							<CgProfile />
						</li>
					</Link>
					<li
						className={active?.includes('settings') ? 'settings' : ''}
						onClick={() => SetActive('settings')}>
						<FiSettings />
					</li>
					<li
						{...{ style: { MozUserFocus: 'none' } }}
						onClick={LogOut}>
						<FiLogOut />
					</li>
				</ul>
			</nav>
		</NavContainer>
	);
}
