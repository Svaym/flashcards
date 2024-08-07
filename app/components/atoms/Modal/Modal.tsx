import { X } from 'lucide-react';

import { ChildrenProps } from '@/app/interfaces/interface';

interface ModalProps extends ChildrenProps {
  opened: boolean;
  close: () => void;
}
export default function Modal({ children, opened, close }: ModalProps) {
  if (!opened) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
      <div className="fixed left-1/2 top-1/2 z-50 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-200 p-5">
        <X onClick={close} />
        {children}
      </div>
    </div>
  );
}
