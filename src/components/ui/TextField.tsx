import { FC, ChangeEvent } from 'react'
import './styles.scss'

interface TextFieldProps {
	name: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	type?: React.HTMLInputTypeAttribute
	id?: string
	labelText?: string
	placeholder?: string
	value?: string | number,
	leftLabel?: string
  autoFocus?: boolean
  children?: React.ReactNode
}

export const TextField: FC<TextFieldProps> = ({
	name,
	id = name,
	labelText,
	leftLabel,
	type = 'text',
	children,
	...rest
}) => {
	return (
		<div className='TextField'>
			<label>
				{leftLabel && <span className='labelTextLeft'>{leftLabel}</span>}
				{labelText && <span className='labelText'>{labelText}</span>}
				<input type={type} id={id} name={name} autoFocus {...rest} />
			</label>
			{children}
		</div>
	)
}
