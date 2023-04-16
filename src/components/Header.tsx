import { IUser } from "../models/IUser"

interface IHeader extends Pick<IUser, 'name' | 'avatar'> {}

export const Header: React.FC<IHeader> = ({avatar, name}) => {
  return (
  <header className="Header">
    <img src={avatar} alt="Аватар пользователя" />
    <h1>Привет,<br/> {name}</h1>
  </header>
  )
}
