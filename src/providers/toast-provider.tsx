// context/ToastContext.tsx
"use client";

import ToastMessage from "@/components/toast";
import { createContext, useState, ReactNode, useContext } from "react";

interface Toast {
  id: string;
  type: "success" | "error" | "info";
  title: string;
  message: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (toast: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, ...toast }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000); // duração padrão
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div>
        {toasts.map((t) => (
          <ToastMessage
            key={t.id}
            type={t.type}
            title={t.title}
            message={t.message}
            duration={t.duration}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
};
