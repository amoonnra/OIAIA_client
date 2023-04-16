import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'

const RootLayout = () => (
	<div className='RootLayout'>
		<Outlet />
		<Menu />
	</div>
)

export default RootLayout