import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    text: "",
    email: "",
  });
  const [data, setData] = useState({
    text: "",
    email: "",
  });

  const displayValues = (event) => {
    event.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setForm({
      text: "",
      email: "",
    });
  };

  const updateValue = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const passData = () => {
    setData({ ...data, text: form.text, email: form.email });
  };

  return (
    <div className="contact-page">
      <h4>Insert your contact details below</h4>
      <form onSubmit={onSubmit} className="contact-input-container">
        <div className="text-input-box">
          <input
            className="text-input"
            value={form.text}
            name="text"
            onChange={updateValue}
          />
          <label
            onSubmit={displayValues}
            for="text-input"
            className="input-label"
          >
            Text
          </label>
        </div>
        <div className="email-input-box">
          <input
            className="email-input"
            value={form.email}
            name="email"
            onChange={updateValue}
          />
          <label for="email-input" className="input-label">
            E-mail
          </label>
        </div>

        <button onClick={passData} className="display-button">
          Display
        </button>
      </form>
      <div>
        <div>Text: {data.text}</div>
        <div>Email: {data.email}</div>
      </div>
    </div>
  );
};

export default Contact;
