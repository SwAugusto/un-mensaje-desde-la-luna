import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ConfigContextType {
  config: Record<string, string> | null;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then(setConfig)
      .catch((err) => console.error("Error cargando config:", err));
  }, []);

  return (
    <ConfigContext.Provider value={{ config }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig debe usarse dentro de ConfigProvider");
  return context;
};
