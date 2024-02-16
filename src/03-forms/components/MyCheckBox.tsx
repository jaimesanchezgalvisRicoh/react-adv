import { ErrorMessage, useField } from "formik";

interface MyCheckBoxProps {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckBox = ({ label, ...props }: MyCheckBoxProps) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
