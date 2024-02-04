interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}
const Button = ({ children, variant = 'primary', ...props }: IButton) => {
  return variant === 'primary' ? (
    <button
      className={`w-full bg-primary-1 text-white text-sm md:text-base p-2 md:p-3 rounded-lg ${props.className}`}
      {...props}
    >
      {children}
    </button>
  ) : variant === 'danger' ? (
    <button
      className={`w-full bg-red-500 text-white text-sm md:text-base p-2 md:p-3 rounded-lg ${props.className}`}
      {...props}
    >
      {children}
    </button>
  ) : (
    <button
      className={`w-full bg-white text-primary-2 text-sm md:text-base px-8 py-2 rounded-full ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
