import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    graduation: "",
    percentage: "",
    phone: "",
    email: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("https://altocumulus-backend.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Thank you! We'll contact you soon." });
        setFormData({
          name: "",
          graduation: "",
          percentage: "",
          phone: "",
          email: "",
        });
      } else {
        setMessage({ type: "error", text: data.message || "Something went wrong" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to send. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center py-16 px-6">
      <p className="text-3xl font-semibold text-white">
        Contact Us for Our Services
      </p>

      <p className="text-gray-500 mt-3">
        Fill in your details and our team will get in touch with you.
      </p>

      {message.text && (
        <div
          className={`mt-4 p-4 rounded-md ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <form
        onSubmit={onSubmitHandler}
        className="mt-8 grid grid-cols-1 gap-5 text-left"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-md outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded-md outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded-md outline-none"
        />

        <input
          type="text"
          name="graduation"
          placeholder="Graduation Details (B.Tech / MCA / Degree etc.)"
          required
          value={formData.graduation}
          onChange={handleChange}
          className="border p-3 rounded-md outline-none"
        />

        <input
          type="text"
          name="percentage"
          placeholder="Percentage / CGPA"
          required
          value={formData.percentage}
          onChange={handleChange}
          className="border p-3 rounded-md outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;