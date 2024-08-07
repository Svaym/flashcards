import { ChildrenProps } from '@/app/interfaces/interface';

interface DescriptionProps extends ChildrenProps {}
export default function Description({ children }: DescriptionProps) {
  return <p className="font-light">{children}</p>;
}
