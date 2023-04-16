import React from 'react';
import { Header } from '../components/Header';
import { IoCalendar } from 'react-icons/io5';
import { MyCalendar } from '../components/Calendar';
import { IUser } from '../models/IUser';
import PhoneCamera from '../components/Camer';

const user: IUser = {
	name: 'Джон Дое',
	age: 22,
	weight: 71,
	height: 175,
	avatar: 'https://cdn3d.iconscout.com/3d/premium/thumb/afro-avatar-6299534-5187866.png'
 }

export const HistoryPage: React.FC = () => {
  return (
  <>
   <Header name={user.name} avatar={user.avatar} />
    <h1><IoCalendar /> История</h1>
    <MyCalendar/>
	 
  </>
  )
}



// export default MainPage;
