interface InputProps extends React.ComponentProps<'input'> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  mx?: string | undefined;
}
export default function Input({ value, onChange, onKeyDown, placeholder, mx }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`${mx} mt-2 w-full rounded-md border-2 border-gray-400 bg-gray-300 px-[6px] py-1 text-black outline-none transition-all duration-300 ease-linear focus:bg-gray-100 xs:px-2`}
    />
  );
}
