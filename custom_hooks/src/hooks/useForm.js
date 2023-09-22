import { useState } from "react";

export function useForm(initialState = {}, submitHandler) {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        submitHandler(formValues);
    };

    return { formValues, handleChange, handleSubmit };
}
