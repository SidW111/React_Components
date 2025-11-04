import { useState, type EventHandler, type FormEventHandler } from "react";

export default function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    if (!name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
    if (password.length < 8)
      newErrors.password = "Password must be greater than 8 characters";

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("sub");
    if (validate()) {
      console.log("submmittedewe");
      alert("Form Submitted successfully");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-sm mx-auto p-4 border rounded-lg"
      >
        <h2 className="text-lg font-semibold">Sign Up</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          className={`px-2 py-1 border rounded ${
            errors.name ? "border-red-500" : ""
          }`}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          className={`px-2 py-1 border rounded ${
            errors.email ? "border-red-500" : ""
          }`}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="password"
          placeholder="password"
          value={password}
          className={`px-2 py-1 border rounded ${
            errors.password ? "border-red-500" : ""
          }`}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!name && !password && !email}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
