import { useState } from "react"
import { validateEmail } from "../utils/helpers"

export default function ContactPage() {
    // Set state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    // Handler for input change
    const handleInputChange = (event) => {
        const { target } = event;
        const inputValue = target.value;
        const inputName = target.name;

        // Update the state as input is added
        if (inputName === "Name") {
            setName(inputValue);
        } else if (inputName === "Email") {
            setEmail(inputValue);
        } else if (inputName === "Message") {
            setMessage(inputValue);
        }
    }

    // Handler for de-focusing on an input field
    const handleBlur = (event) => {
        const { target } = event;
        const inputValue = target.value;
        const inputName = target.name;

        // If the input field is empty, show an error
        if (inputValue === "") {
            setErrorMessage(`${inputName} is required.`);
            return;
        }

        // If the email field is invalid, show an error
        if (inputName === "Email" && !validateEmail(inputValue)) {
            setErrorMessage("Invalid email address.");
            return;
        }

        // If everything's good, show no errors
        setErrorMessage(null);
    }

    // Handler for form submit
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // If there's an error, show error message and return
        if (name === "") {
            setErrorMessage("Name is required.");
            return;
        } else if (email === "") {
            setErrorMessage("Email is required.");
            return;
        } else if (message === "") {
            setErrorMessage("Message is required.");
            return;
        } else if (!validateEmail(email)) {
            setErrorMessage("Invalid email address.");
            return;
        }

        // Else, clear input values and error message
        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage(null);
    }

    return (
        <>
            <h2>Contact</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name:</label>
                    <input value={name} onChange={handleInputChange} onBlur={handleBlur} type="text" className="form-control" name="Name" id="nameInput" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email Address:</label>
                    <input value={email} onChange={handleInputChange} onBlur={handleBlur} type="email" className="form-control" name="Email" id="emailInput" />
                </div>
                <div className="mb-3">
                    <label htmlFor="messageInput" className="form-label" >Message:</label>
                    <input value={message} onChange={handleInputChange} onBlur={handleBlur} type="text" className="form-control" name="Message" id="messageInput" />
                </div>
                {errorMessage && <div className="mb-3">{errorMessage}</div>}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}