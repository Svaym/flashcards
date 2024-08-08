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
      className={`bg-sky-500 px-[6px] py-1 text-[12px] ${mt} rounded-md text-white transition-colors duration-300 ease-linear hover:bg-sky-700 xxs:text-sm xs:px-2 xs:text-base`}
      type={type}
    >
      {children}
    </button>
  );
}
