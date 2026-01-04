import { Navigate } from "react-router-dom";
import { type ReactNode } from "react"; // FIXED: Added 'type'

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("auth_token");
  return token ? <>{children}</> : <Navigate to="/" replace />;
}
