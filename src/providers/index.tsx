import { AuthProvider } from "./auth-provider";
import { PreviewProvider } from "./preview-provider";
import { QueryProvider } from "./query-provider";
import { ToastProvider } from "./toast-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <QueryProvider>
          <PreviewProvider>{children}</PreviewProvider>
        </QueryProvider>
      </ToastProvider>
    </AuthProvider>
  );
}
