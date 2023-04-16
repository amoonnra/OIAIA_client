import { FC, EventHandler, SyntheticEvent, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import './styles.scss'

interface ButtonProps {
	children?: JSX.Element | string
	mode?: 'primary' | 'secondary'
	size?: 'sm' | 'md'
	margin?: 'left' | 'right'
	isWide?: boolean
	to?: string
	onClick?: EventHandler<SyntheticEvent>
	type?:  'submit' | 'reset' | 'button'
}

export const Button = ({ mode, isWide, onClick, size, to, children, margin, type = 'submit', ...props }: ButtonProps) => {
	const classNames = cx({
		Button,
		sm: size && size === 'sm',
		md: !size || (size && size === 'md'),
		primary: !mode || (mode && mode === 'primary'),
		secondary: mode && mode === 'secondary',
		marginLeft: margin && margin === 'left',
		marginRight: margin && margin === 'right',
		wide: isWide,
	})

	return to ? (
		<Link to={to} className={classNames} {...props}>
			{children}
		</Link>
	) : (
		<button onClick={onClick} className={classNames} type={type} {...props}>
			{children}
		</button>
	)
}
