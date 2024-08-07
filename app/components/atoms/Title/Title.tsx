import { ChildrenProps } from '@/app/interfaces/interface';

interface TitleProps extends ChildrenProps {}
export default function Title({ children }: TitleProps) {
  return <h2 className="line-clamp-1 text-ellipsis text-center font-medium">{children}</h2>;
}
