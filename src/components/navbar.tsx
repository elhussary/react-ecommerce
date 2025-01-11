import { useState } from 'react';

import Logo from '@/assets/logo.png';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { AlignRight, Search, ShoppingBag, User, X } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<nav className="pt-20 md:pt-16 fixed w-full z-40 border-b bg-white">
			<section className="flex flex-col justify-between container space-y-4 lg:flex-row lg:space-y-0">
				<div className="flex justify-between my-2.5">
					{/* LOGO */}
					<a href="#">
						<img src={Logo} alt="LOGO" />
					</a>

					{/* Hamburger Menu (Small Screens) */}
					<button className="lg:hidden" onClick={toggleMenu}>
						{menuOpen ? <X /> : <AlignRight />}
					</button>
				</div>

				<ul
					className={`${
						menuOpen ? 'flex' : 'hidden'
					} flex-col gap-6 lg:flex lg:flex-row lg:items-center lg:gap-12`}
				>
					<li>
						<NavLink to={'/'}>Home</NavLink>
					</li>

					<li>
						<a href="#">Categories</a>
					</li>

					<li>
						<a href="#">About</a>
					</li>

					<li>
						<a href="#">Contact</a>
					</li>
				</ul>

				<div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:items-center gap-2`}>
					<form className="relative">
						<Input placeholder="Search products" className="lg:w-64 py-5 pl-8" />
						<Search className=" absolute top-2.5 left-2 text-muted-foreground" size={20} />
					</form>

					<div className="flex">
						<Button size={'icon'} variant={'ghost'}>
							<ShoppingBag />
						</Button>

						<NavLink to={'/login'}>
							<Button size={'icon'} variant={'ghost'}>
								<User />
							</Button>
						</NavLink>
					</div>
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
