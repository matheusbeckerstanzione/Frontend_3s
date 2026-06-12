import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const salvo = JSON.parse(localStorage.getItem("gmail") || "null");
    return salvo === "" ? null : salvo;
  });

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;