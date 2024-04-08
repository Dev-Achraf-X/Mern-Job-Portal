import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext.jsx";

function useLogin() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(null);

  const loginUser = async (formData) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.status === 201) {
        toast.success(data.message);
        login(data.token, data.user);
      } else if (res.status === 404) {
        toast.error(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, loginUser };
}

export default useLogin;
