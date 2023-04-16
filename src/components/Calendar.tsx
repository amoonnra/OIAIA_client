import React, { useState, FC } from 'react';
import Calendar, {} from 'react-calendar';
import { useNavigate, useParams } from 'react-router-dom';
import { getDDMMDate } from '../utils';
import useSWR from 'swr'
import axios from 'axios'
import { LooseValue } from 'react-calendar/dist/cjs/shared/types';

export interface IMock {
	[key: string]: number
}
const mock: IMock = {
		'15:4': 5,
		'16:4': 3,
		'17:4': 1,
		'18:4': 2,
		'19:4': 4,
		'20:4': 3,
}
export interface IResponse {
	additive_desc: string | string[]
	additive_name: string | string[]
	allergen_name: string | string[]
	carbonhydrate: number
	date: Date
	energy: number
	fats: number
	grade: number
	protein: number
}
const dict : {[key: string]: string} = {
	'1': 'https://static.openfoodfacts.org/images/attributes/nutriscore-e.svg',
	'2': 'https://static.openfoodfacts.org/images/attributes/nutriscore-d.svg',
	'3': 'https://static.openfoodfacts.org/images/attributes/nutriscore-c.svg',
	'4': 'https://static.openfoodfacts.org/images/attributes/nutriscore-b.svg',
	'5': 'https://static.openfoodfacts.org/images/attributes/nutriscore-a.svg',
}
export const MyCalendar: FC = () => {
	const navigate = useNavigate()
	const [value, setValue] = useState<LooseValue>(new Date())
	const { time } = useParams()
	const fetcher = (url: string) => axios.post<{[key: string]: IResponse}>(url, {username: 'denchi'}).then(res => res.data)
	const { data, error, isLoading } = useSWR('http://100.73.206.37:5000/api/product_properties', fetcher) 
	const [totalObs, setTotalObs] = useState<[string, IResponse][]>([])


	if (isLoading) return <h2>Loading...</h2>
	if (data) {

			const totalObs  = time ? Object.entries(data).filter(([food, ob]) => time === getDDMMDate(new Date(ob.date))) : []

		///////
		const daysGrades: {[key: string]: number[]} = {}
		for (let val of Object.values(data)) {
			const {date, grade} = val
			const normData =  getDDMMDate(new Date(date))
			if (daysGrades[normData]) daysGrades[normData].push(grade)
			else daysGrades[normData] = [grade] 
		}

		const newOb: {[key: string]: number} = {} 
		for (let [key, value] of Object.entries(daysGrades)) {
			newOb[key] = Number((value.reduce((el, num) => el + num, 0) / value.length).toFixed(0))	
		}
		console.log(newOb)
  return (
    <div>

      <Calendar onClickDay={(value) => navigate('/history/' + getDDMMDate(value))} value={value} onChange={setValue} tileContent={({date}) => {
			const item = newOb[getDDMMDate(date)]
			return <div className={'historyDayScore c' + (item || '')}></div>	
		}} /><br/>
				{totalObs && 
				<>
				{new Date().getDate() !== new Date(value as Date).getDate() && <h1>История {String((value as Date)?.toLocaleDateString())}</h1>}
				<div>{totalObs.map((el, id) => <div className='nutri'><div className='headd'><h2><small>#{id + 1}</small> {el[0]}</h2> <img style={{height: '40px'}} src={dict[(el[1].grade)]} /></div>
							<div className="sostav">
								<span><strong>Белки</strong>{el[1].protein} </span>
								<span><strong>Жиры</strong>{el[1].fats} </span>
								<span><strong>Углеводы</strong>{el[1].carbonhydrate} </span>
								<span><strong>Энерг. ценность (Ккал)</strong>{el[1].energy} </span>
								<span><strong>Пищевые добавки</strong>{Array.isArray(el[1].additive_name) ? el[1].additive_name.map((io: string) => <i>{io}, </i>) : <i>{el[1].additive_name}</i>}  </span>
								<span><strong>Аллергены</strong>{Array.isArray(el[1].allergen_name) ? el[1].allergen_name.map((io: string) => <i>{io}, </i> ) : <i>{el[1].allergen_name}</i>}  </span>
							</div>
							</div>)
						}
		</div> </>}
    </div>
  );
	} return <h2>Error...</h2>
}
