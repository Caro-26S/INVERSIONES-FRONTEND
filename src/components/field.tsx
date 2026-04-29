interface FieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
}

export function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  hint,
}: FieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}{" "}
        {hint && <span className="text-gray-400 font-normal">{hint}</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-xs focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
