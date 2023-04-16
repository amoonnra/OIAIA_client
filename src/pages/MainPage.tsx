import React from 'react';
import { IUser } from '../models/IUser';
import { Header } from '../components/Header';
import { MealNoteDisclosure } from '../components/Disclosure';
import { MdOutlineSoupKitchen } from 'react-icons/md'
import { BiShoppingBag } from 'react-icons/bi'
import { IoFastFood, IoCalendar } from 'react-icons/io5'
import { FaChartPie } from 'react-icons/fa'
import { MyCalendar } from '../components/Calendar';
import { ScoreChart } from '../components/charts/ScoreChart';

const user: IUser = {
  name: 'Джон Дое',
  age: 22,
  weight: 71,
  height: 175,
  avatar: 'https://cdn3d.iconscout.com/3d/premium/thumb/afro-avatar-6299534-5187866.png'
}

export const MainPage: React.FC = () => {
  return (
  <>
   <Header name={user.name} avatar={user.avatar} />
    <h1><IoFastFood /> Проверить продукт</h1>
    <MealNoteDisclosure productsType={0} Icon={BiShoppingBag}  title='Я купил' key={0}/>
    <MealNoteDisclosure productsType={1} Icon={MdOutlineSoupKitchen} title='Я приготовил' key={1}/>
    <h1><FaChartPie /> Статистика</h1>
    <div className="noti">
      <span className='good'><i>🎉</i> Джон, в прошлом месяце ты выпил много воды, <b>ты большой молодец!</b></span>
      <span className='bad'><i>🍕</i> Но в следующем месяце рекомендуем есть поменьше <b>пиццы</b></span>
    </div>
    <ScoreChart/>
    <h1><IoCalendar /> История</h1>
    <MyCalendar/>
  </>
  )
}



// export default MainPage;
