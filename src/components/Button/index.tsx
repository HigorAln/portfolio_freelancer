import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Content } from './styles';

interface ButtonPrimaryProp extends ButtonHTMLAttributes<HTMLButtonElement> {
	width?: string;
	children?: ReactNode;
}

export function Button({ children, width, ...rest }: ButtonPrimaryProp) {
	return <Content {...rest}>{children}</Content>;
}
