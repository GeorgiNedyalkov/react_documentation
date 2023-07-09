import { useFormInput } from "./hooks/useFormInput";

export default function App() {
  return (
    <div className="m-10">
      <Form />
    </div>
  );
}

export function Form() {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");

  return (
    <div className="flex flex-col">
      <label>
        First name:
        <input type="text" {...firstNameProps} />
      </label>

      <label>
        Last name:
        <input type="text" {...lastNameProps} />
      </label>

      <p></p>
    </div>
  );
}
