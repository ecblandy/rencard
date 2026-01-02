import { AuthProvider } from "./auth-provider";
import { PreviewProvider } from "./preview-provider";
import { ToastProvider } from "./toast-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <PreviewProvider>{children}</PreviewProvider>
      </ToastProvider>
    </AuthProvider>
  );
}
