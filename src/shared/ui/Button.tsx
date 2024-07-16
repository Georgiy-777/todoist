import React from 'react';
interface IButton {
  text?: string;
  onClick?: () => void;
  type: "submit" | "reset" | "button" | undefined
}
const Button: React.FC<IButton> = ({type, text, onClick, }) => {
  return (
      <button type={type} className='w-[100%] p-1 rounded-lg bg-red-500 hover:bg-red-400 font-bold text-white text-lg' onClick={onClick}>{text}</button>
  );
};

export default Button;