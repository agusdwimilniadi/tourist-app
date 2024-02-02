interface IInputForm extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}
const InputForm = ({ label, name, ...props }: IInputForm) => {
  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <label
          className="text-primary-2 text-xs md:text-base font-normal"
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
      <input
        {...props}
        className={` w-full placeholder:font-light placeholder:italic  bg-secondary p-2 text-xs md:text-base md:p-3 rounded-lg focus-visible:outline-primary-1  ${props.className}`}
        name={name}
        id={name}
      />
    </div>
  );
};

export default InputForm;
