import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { App } from './app/index.tsx';
import './index.css';

import Navbar from './components/navbar.tsx';
import Header from './components/our-header.tsx';
import Newsletter from './components/newsletter.tsx';
import Footer from './components/footer.tsx';

import Login from './app/routes/auth/login.tsx';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Header />
		<Navbar />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="login" element={<Login />} />
		</Routes>

		<Footer />
	</BrowserRouter>
);
