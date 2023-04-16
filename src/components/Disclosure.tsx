import { Disclosure, Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import ProductForm from './ProductForm'
import { IconType } from 'react-icons/lib'
import PhoneCamera from './Camer'
import axios from 'axios'
import useSWR from 'swr'
import { IResponse } from './Calendar'
import { Button } from './ui/Button'

interface IProps {
	title: string
	productsType: 0 | 1
	Icon: IconType
}
const dict : {[key: string]: string} = {
	'1': 'https://static.openfoodfacts.org/images/attributes/nutriscore-e.svg',
	'2': 'https://static.openfoodfacts.org/images/attributes/nutriscore-d.svg',
	'3': 'https://static.openfoodfacts.org/images/attributes/nutriscore-c.svg',
	'4': 'https://static.openfoodfacts.org/images/attributes/nutriscore-b.svg',
	'5': 'https://static.openfoodfacts.org/images/attributes/nutriscore-a.svg',
}
interface IMocc {[key: string]: {[key: string]: IResponse}}
export const MealNoteDisclosure: React.FC<IProps> = ({productsType, title, Icon}) => {
	let [isOpen, setIsOpen] = React.useState<boolean>(false)
	const [dataa, setDataa] = useState<any>([])
	const [isLoading, setLoading] = useState(false)
	// useEffect(() => {


	// }, [dataa])

  return (<>
        <Disclosure as="div" className='DisclosureWrapper' defaultOpen={productsType === 0}>
          {({ open }) => {
				
				// const fetcher = (url: string, data: string[]) => axios.post<{[key: string]: IResponse}[]>(url, data).then(res => res.data)

				const sendData = async (datas: string[]) => {
					// setLoading(true)
					setLoading(true)
					const data = await axios.post<IMocc>('http://100.73.206.37:5000/api/search_product', 
					JSON.stringify(datas), {
						headers: {
							'Content-Type': 'application/json'
						}
					}).then(res => res.data)
					// const { data, error, isLoading } = useSWR('http://100.73.206.37:5000/api/search_product', fetcher) 
					if (data) {
						setLoading(false)
						const temp = Object.values(data)
						setDataa(temp)
					}
				}
				return(
            <>
              <Disclosure.Button className='DisclosureButton'>
				  <strong><span className={'icon c' + productsType}>{<Icon/>}</span> {title}</strong>
                <BsChevronDown className='schevron' style={open ? {transform: 'rotate(180deg)'} : {}}/>
              	</Disclosure.Button>
				  	<Transition enter="enter" enterFrom='enterFrom' enterTo='enterTo'>
              	<Disclosure.Panel className='DisclosurePanel'>
						{/* {console.log(dataa)} */}
                {!dataa.length && <ProductForm productsType={productsType} onSendData={sendData} isOpen={isOpen} setIsOpen={setIsOpen}/> }
					{console.log(dataa)}
					 {!!dataa.length && <div>

						{
							dataa.map((el: any) => {
								console.log(el)
								const val = Object.values(el)
								const name = Object.keys(el)[0]
								return {...val, name}
							}).map((el: any, id: number) => <div className='nutri'><h2><small>#{id + 1}</small> {el.name}</h2> <img style={{height: '40px'}} src={dict[(el[0].grade as string)]} />
							<div className="sostav">
								<span><strong>Белки</strong>{el[0].protein} </span>
								<span><strong>Жиры</strong>{el[0].fats} </span>
								<span><strong>Углеводы</strong>{el[0].carbonhydrate} </span>
								<span><strong>Энерг. ценность (Ккал)</strong>{el[0].energy} </span>
								<span><strong>Пищевые добавки</strong>{Array.isArray(el[0].additive_name) ? el[0].additive_name.map((io: string) => <i>{io}, </i>) : <i>{el[0].additive_name}</i>}  </span>
								<span><strong>Аллергены</strong>{Array.isArray(el[0].allergen_name) ? el[0].allergen_name.map((io: string) => <i>{io}, </i> ) : <i>{el[0].allergen_name}</i>}  </span>
							</div>
							</div>)

						}
						<Button isWide type='button' onClick={()=>setDataa([])}>Новыая запись</Button>
						</div>}
              </Disclosure.Panel>
				  </Transition>
            </>
         )}}
        </Disclosure>
		  <PhoneCamera setIsOpen={setIsOpen} isOpen={isOpen}/>
		  </>
  )
}