import { ChildrenProps } from '@/app/interfaces/interface';

interface ErrorProps extends ChildrenProps {}

export default function Error({ children }: ErrorProps) {
  return <h3 className="text-sm text-red-500">{children}</h3>;
}
