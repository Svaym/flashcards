import { ChildrenProps } from '@/app/interfaces/interface';

interface TitleProps extends ChildrenProps {
  onClick: () => void;
}
export default function Title({ children, onClick }: TitleProps) {
  return (
    <h2
      onClick={onClick}
      className="line-clamp-1 cursor-pointer text-ellipsis text-center font-medium transition-all duration-300 ease-linear hover:text-indigo-500"
    >
      {children}
    </h2>
  );
}
