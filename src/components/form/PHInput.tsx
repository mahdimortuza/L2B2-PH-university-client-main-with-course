import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null} <br />
      <Controller
        name={name}
        render={({ field }) => <input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
