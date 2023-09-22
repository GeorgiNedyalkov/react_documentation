import { useForm } from "../hooks/useForm";

// eslint-disable-next-line react/prop-types
export const Form = ({ submitHandler }) => {
    const { formValues, handleChange, handleSubmit } = useForm(
        {
            name: "",
            email: "",
        },
        submitHandler
    );
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    value={formValues.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    value={formValues.email}
                    onChange={handleChange}
                    type="text"
                    name="email"
                    id="email"
                />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
            <div>
                Hello, {formValues.name}, your email is {formValues.email}
            </div>
        </form>
    );
};
