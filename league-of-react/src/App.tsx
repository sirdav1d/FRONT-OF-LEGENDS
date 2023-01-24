import Home from './pages/Home';
import Navbar from './components/Navbar';
import { GlobalStyle } from './GlobalStyle';
import Footer from './components/Footer';
import ChampionU from './pages/ChampionPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register'
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedLayout from './components/ProtectedLayout';
import { UseAuth } from './context/hooks/UseAuth';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path='/login'
						element={<Login />}></Route>
					<Route
						path='/register'
						element={<Register />}></Route>

					<Route
						path='/'
						element={
							<ProtectedLayout>
								<Home />
							</ProtectedLayout>
						}></Route>
					<Route
						path='/oneChampion'
						element={
							<ProtectedLayout>
								<ChampionU />
							</ProtectedLayout>
						}></Route>
					<Route
						path='/profile'
						element={
							<ProtectedLayout>
								<Profile />
							</ProtectedLayout>
						}></Route>
				</Routes>
				<Footer />
				<GlobalStyle />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
