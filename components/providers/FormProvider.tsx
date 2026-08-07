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
  updateField: (field: keyof FormData, value: string) => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState<FormData>({
    full_name: "",
    phone_number: "",
  });

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function resetForm() {
    setForm({
      full_name: "",
      phone_number: "",
    });
  }

useEffect(() => {
  console.log("Connecting to SSE...");

  const events = new EventSource("/api/form-events");

  events.onopen = () => {
    console.log("SSE connected");
  };

  events.onmessage = (event) => {
    console.log("SSE message:", event.data);

    if (event.data === "connected") return;

    const data = JSON.parse(event.data);

    setForm((prev) => ({
      ...prev,
      [data.field]: data.value,
    }));
  };

  events.onerror = (err) => {
    console.error("SSE error:", err);
  };

  return () => {
    events.close();
  };
}, []);

  return (
    <FormContext.Provider
      value={{ form, updateField, resetForm }}
    >
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