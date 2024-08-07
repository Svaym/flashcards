import { ChildrenProps } from '@/app/interfaces/interface';

interface MainTitleProps extends ChildrenProps {}
export default function MainTitle({ children }: MainTitleProps) {
  return <h1 className="text-center text-2xl font-bold">{children}</h1>;
}
