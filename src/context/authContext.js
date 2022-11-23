import { createContext, useEffect, useState, useContext } from "react";
/*PROPÓSITO:
  Passar dados de um componente para o outro sem uso de localStorage
*/

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [user, setUser] = useState({
    token: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) setUser(JSON.parse(userStorage));
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
