import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const fullName = firstName + " " + lastName;

  return (
    <>
      <label>
        First Name:
        <input
          type="text"
          className="border ml-1 mr-2"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          className="border ml-1 mr-2"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        <b>Welcome home {fullName}</b>
      </p>
    </>
  );
}
