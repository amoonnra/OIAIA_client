import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHome, BiUserCircle, BiHistory } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';

const Menu: React.FC = () => {
  return (
	<nav className='BottomNavigation'>
		<NavLink to="/"><BiHome />главная</NavLink>
		<NavLink to="/profile"><BiUserCircle /> профиль</NavLink>
		<NavLink to="/settings"><BsGear /> настройки</NavLink>
		<NavLink to="/history"><BiHistory /> история</NavLink>
	</nav>
  )
};

export default Menu;
