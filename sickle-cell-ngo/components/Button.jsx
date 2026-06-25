import Link from "next/link";

export default function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-red-700 text-white hover:bg-red-800 shadow-lg shadow-red-900/20",
    secondary: "bg-white text-red-700 hover:bg-red-50 border border-red-200",
    dark: "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border border-white/70 text-white hover:bg-white hover:text-red-800",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
