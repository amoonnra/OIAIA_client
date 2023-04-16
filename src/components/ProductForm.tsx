import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { TextField } from './ui/TextField';
import { BsPlusLg } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import { TbPhotoSensor2 } from 'react-icons/tb'

interface IProps {
	productsType: 0 | 1
	onSendData: (data: string[]) => void
	setIsOpen: (k: boolean) => void
	isOpen: boolean
}
const ProductForm: React.FC<IProps> = ({onSendData, setIsOpen}) => {
	const [inputFields, setInputFields] = useState([''])

	 const handleChange = (id: number, event:  ChangeEvent<HTMLInputElement>) => {
		let data = [...inputFields];
   	data[id] = event.target.value;
   	setInputFields(data);
	 }

	const handleAddNewInput = () => {
		setInputFields(prev => [...prev, ''])
	}

	const handleRemoveInput = (id: number) => {
		let data = [...inputFields];
		data.splice(id, 1)
		setInputFields(data)
	}

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		onSendData(inputFields)
	}

  return <form className='ProductForm' onSubmit={handleSubmit}>
	{inputFields.map((text, id) => {
		return <div className='textFieldWrap'>
			<TextField name={String(id)} leftLabel={'#' + (id + 1)}  id={String(id)}
		placeholder='Введите название продукта' 
		value={text} 
		key={id + text}
		onChange={(e) => handleChange(id, e)}>
			<button type='button' className='makePhotoButton'  onClick={() => setIsOpen(true)}><TbPhotoSensor2 /></button>
		</TextField>
		
		{id !== 0 && <button className='removeFormInput' type='button' onClick={() => handleRemoveInput(id)}><RxCross1/></button>}
		</div>
	})}
	
	<div className="formButtons">
	<button type='button' className='addNewInputButton'  onClick={handleAddNewInput}><BsPlusLg/></button>
	<button className='submitButton'>Проверить</button>
	</div>
  </form>;
};

export default ProductForm;
