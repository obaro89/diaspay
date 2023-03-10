interface ButtonProperties {
	title: string
	size?: string
	primary?: boolean
}

const Button = ({ title }: ButtonProperties) => {
	return (
		<button className='w-full bg-blue text-white px-2 py-4'>{title}</button>
	)
}

export default Button
