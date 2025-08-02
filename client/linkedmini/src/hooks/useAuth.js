import { useState, useEffect } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
    else setUser(null);
  }, []);

  const isLoggedIn = !!user;

  return { user, isLoggedIn, setUser };
}
