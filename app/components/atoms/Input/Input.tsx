interface InputProps extends React.ComponentProps<'input'> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  mx?: string | undefined;
}
export default function Input({ value, onChange, placeholder, mx }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${mx} mt-2 rounded-md border-2 border-gray-400 bg-gray-300 px-2 py-1 text-black outline-none transition-all duration-300 ease-linear focus:bg-gray-100`}
    />
  );
}
