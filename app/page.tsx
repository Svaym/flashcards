'use client';

import { Toaster, toast } from 'sonner';

import SignUpForm from './components/organisms/SignUpForm/SignUpForm';

export default function SignUp() {
  return (
    <>
      <SignUpForm />
      {/* <div>
      <Toaster position="top-right" expand={true} closeButton richColors />
      <button onClick={() => toast.success('Event has been created')}>
        Give me a toast
      </button>
    </div> */}
    </>
  );
}
