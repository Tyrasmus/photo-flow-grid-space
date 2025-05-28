
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RocketIconProvider } from "./contexts/RocketIconContext";
import Index from "./pages/Index";
import Fab from "./pages/Fab";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get the base URL from the environment to ensure consistent routing
const getBasename = () => {
  return import.meta.env.DEV ? '/' : '/photo-flow-grid-space/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RocketIconProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={getBasename()}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fab" element={<Fab />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </RocketIconProvider>
  </QueryClientProvider>
);

export default App;
