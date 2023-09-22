import { Form } from "./compnents/Form";
import "./App.css";

function App() {
    const submitHandler = (values) => {
        console.log(`Hello, ${values.name}, your email is ${values.email}`);
    };

    return (
        <>
            <Form submitHandler={submitHandler} />
        </>
    );
}

export default App;
