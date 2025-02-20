import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="w-full flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  );
}
