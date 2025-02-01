import { useState } from "react";
import Swal from "sweetalert2";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent("Job Application");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Open email client
    window.location.href = `mailto:maghanimmarketing@gmail.com?subject=${subject}&body=${body}`;

    // Show success message
    Swal.fire({
      icon: "success",
      title: "Email Sent!",
      text: "Your message has been sent successfully.",
      confirmButtonColor: "#007bff",
    });

    // Clear form fields
    setFormData({ name: "", email: "", message: "", file: null });
  };

  return (
    <div className="containerF">
      <h2>Reach Out to Us!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Your Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>

        <label>
          Upload CV:
          <input type="file" name="file" onChange={handleChange} accept=".pdf" required />
        </label>

        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}
