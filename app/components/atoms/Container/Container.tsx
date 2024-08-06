import { ChildrenProps } from '@/app/interfaces/interface';

interface ContainerProps extends ChildrenProps{}

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-full max-w-7xl px-2 sm:px-3 lg:px-4 xl:px-7">{children}</div>;
}
