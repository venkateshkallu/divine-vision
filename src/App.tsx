import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Index from "./pages/Index";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import LoveProblemSolution from "./pages/LoveProblemSolution";
import MarriageAstrology from "./pages/MarriageAstrology";
import CareerProblem from "./pages/CareerProblem";
import HealthProblem from "./pages/HealthProblem";
import Numerology from "./pages/Numerology";
import Vastu from "./pages/Vastu";
import KundliAnalysis from "./pages/KundliAnalysis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/love-problem-solution" element={<LoveProblemSolution />} />
            <Route path="/marriage-astrology" element={<MarriageAstrology />} />
            <Route path="/career-problem" element={<CareerProblem />} />
            <Route path="/health-problem" element={<HealthProblem />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/vastu" element={<Vastu />} />
            <Route path="/kundli-analysis" element={<KundliAnalysis />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
