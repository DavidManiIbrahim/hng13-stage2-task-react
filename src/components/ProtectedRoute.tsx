import { Navigate } from "react-router-dom";
import { auth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isChecking, setIsChecking] = useState(true);
  const isAuthenticated = auth.isAuthenticated();

  useEffect(() => {
    setIsChecking(false);
    
    if (!isAuthenticated) {
      toast.error("Please sign in to continue");
      return;
    }

    // Check for session expiry warning (1 minute before)
    const timeUntilExpiry = auth.getTimeUntilExpiry();
    const warningTime = timeUntilExpiry - 60000; // 1 minute before

    if (warningTime > 0) {
      const warningTimeout = setTimeout(() => {
        toast.warning("Your session will expire in 1 minute", {
          duration: 10000,
        });
      }, warningTime);

      return () => clearTimeout(warningTimeout);
    }
  }, [isAuthenticated]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
