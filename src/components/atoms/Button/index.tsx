interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...props }: IButton) => {
  return (
    <button
      className="w-full bg-primary-1 text-white text-sm md:text-base p-2 md:p-3 rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
