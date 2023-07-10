import { useFormInput } from "../hooks/useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Georgi");
  const lastNameProps = useFormInput("Nedyalkov");

  return (
    <>
      <label>
        First Name:
        <input type="text" className="border ml-1 mr-2" {...firstNameProps} />
      </label>
      <label>
        Last Name:
        <input type="text" className="border ml-1 mr-2" {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
