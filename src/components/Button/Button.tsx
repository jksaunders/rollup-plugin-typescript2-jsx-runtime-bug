import { FC } from 'react';

interface ButtonProps {
  color: string;
  children?: never;
}

const Button: FC<ButtonProps> = ({ color }) => (
  <button>test button</button>
);

export default Button;
