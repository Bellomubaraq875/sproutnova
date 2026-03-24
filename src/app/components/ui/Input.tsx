// app/components/ui/Input.tsx
import { ReactNode } from "react";

interface InputProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
  className = "",
}: InputProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
}