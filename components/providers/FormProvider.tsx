"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface FormData {
  full_name: string;
  phone_number: string;
}

interface FormContextType {
  form: FormData;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [form, setForm] = useState<FormData>({
    full_name: "",
    phone_number: "",
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/form-state", {
          cache: "no-store",
        });

        if (!res.ok) return;

        const data = await res.json();

        setForm(data);
      } catch (error) {
        console.error("Polling error:", error);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <FormContext.Provider value={{ form }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      "useFormData must be used inside FormProvider"
    );
  }

  return context;
}