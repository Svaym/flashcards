import { ChildrenProps } from '@/app/interfaces/interface';

interface TitleProps extends ChildrenProps {}
export default function Title({ children }: TitleProps) {
  return (
    <h2 className="line-clamp-1 cursor-pointer text-ellipsis text-center font-medium transition-all duration-300 ease-linear hover:text-indigo-500">
      {children}
    </h2>
  );
}
