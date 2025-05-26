import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
// Import tempo routes
import routes from "tempo-routes";

const queryClient = new QueryClient();

const App = () => {
  // Get tempo routes if VITE_TEMPO is true
  const tempoRoutes = import.meta.env.VITE_TEMPO ? routes : [];

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Render Tempo routes first if enabled */}
            {import.meta.env.VITE_TEMPO &&
              tempoRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            {/* App routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            {/* Allow Tempo to capture routes before the catchall */}
            {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
