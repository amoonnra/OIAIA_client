import {useState} from 'react';
import { TextField } from '../components/ui/TextField';
import { Button } from '../components/ui/Button';

interface ILoginPageProps {
}

const LoginPage: React.FC<ILoginPageProps> = (props) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleChange = () => {

	}

	// const handleSubmit: React.EventHandler<HTMLFormElement> = () => {

	// }

  return <div>
	<h1>Авторизация</h1>
  <form action="">
	<TextField name='username' id='username' onChange={handleChange} value={username} labelText='Введите свой никнейм' />
	<TextField name='password' id='password' onChange={handleChange} value={password} labelText='Введите свой пароль' />
	<Button isWide>Войти</Button>
  </form>
  </div>
};

export default LoginPage;
