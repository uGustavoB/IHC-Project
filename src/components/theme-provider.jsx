import React, { createContext, useState, useContext } from "react";

// Criando o contexto do tema
const ThemeContext = createContext();

// Componente Provider do tema
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // O estado inicial é "light"

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook customizado para acessar o tema
export const useTheme = () => {
  return useContext(ThemeContext);
};
