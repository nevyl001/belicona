import React from "react";

/**
 * Componente Input reutilizable
 * @param {Object} props - Propiedades del input
 * @param {string} props.type - Tipo de input ('text', 'email', 'password', etc.)
 * @param {string} props.variant - Variante del input ('default', 'filled', 'outlined')
 * @param {string} props.size - Tamaño del input ('sm', 'md', 'lg')
 * @param {boolean} props.disabled - Si el input está deshabilitado
 * @param {boolean} props.error - Si hay un error en el input
 * @param {string} props.label - Etiqueta del input
 * @param {string} props.placeholder - Placeholder del input
 * @param {string} props.helperText - Texto de ayuda
 * @param {string} props.errorMessage - Mensaje de error
 * @param {string} props.className - Clases CSS adicionales
 * @param {Function} props.onChange - Función a ejecutar al cambiar el valor
 * @param {Function} props.onFocus - Función a ejecutar al enfocar
 * @param {Function} props.onBlur - Función a ejecutar al desenfocar
 */
const Input = ({
  type = "text",
  variant = "default",
  size = "md",
  disabled = false,
  error = false,
  label,
  placeholder,
  helperText,
  errorMessage,
  className = "",
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  // Clases base del input
  const baseClasses =
    "w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variantes de estilo
  const variants = {
    default:
      "border-gray-600 focus:border-primary-500 focus:ring-primary-500 bg-gray-800 text-white",
    filled:
      "bg-gray-800 border-gray-600 focus:border-primary-500 focus:ring-primary-500 text-white",
    outlined:
      "border-2 border-gray-600 focus:border-primary-500 focus:ring-primary-500 bg-gray-800 text-white",
  };

  // Tamaños
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  // Estados de error
  const errorClasses = error
    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
    : "";

  // Combinar todas las clases
  const inputClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${errorClasses} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-white mb-1">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />

      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}

      {!error && helperText && (
        <p className="mt-1 text-sm text-gray-400">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
