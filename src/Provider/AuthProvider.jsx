import { createContext, useEffect, useState } from "react";
import axiosInstance from "../hook/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
  const fetchUser = async () => {
    try {
      const res = await axiosInstance.get("/me");
      setUser(res.data);
      setLoading(false)
    } catch (err) {
      setUser(null);
      setLoading(false)

    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (data) => {
    try {
     const res= await axiosInstance.post("/login", data);
      await fetchUser();

    
    } catch (err) {
      
      throw new Error(err.response?.data?.error || "Login failed");
    }
  };

  const logout = async () => {
    await axiosInstance.post("/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,logout, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
