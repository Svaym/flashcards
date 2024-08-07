import { ChildrenProps } from '@/app/interfaces/interface';

interface ButtonProps extends ChildrenProps {
  type: 'submit' | 'button' | 'reset';
  mt?: string;
  onClick?: () => void;
}

export default function Button({ children, type, mt, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-sky-500 px-2 py-1 ${mt} rounded-md text-white transition-colors duration-300 ease-linear hover:bg-sky-700`}
      type={type}
    >
      {children}
    </button>
  );
}
