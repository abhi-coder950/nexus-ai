import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

// Auth & Core
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";

// Lazy-loaded pages for code splitting
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Analytics = lazy(() => import("./pages/Analytics"));

// Life & Productivity
const Planner = lazy(() => import("./pages/Planner"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Notes = lazy(() => import("./pages/Notes"));
const Goals = lazy(() => import("./pages/Goals"));
const Habits = lazy(() => import("./pages/Habits"));

// Finance
const Expenses = lazy(() => import("./pages/Expenses"));
const Budget = lazy(() => import("./pages/Budget"));
const Savings = lazy(() => import("./pages/Savings"));
const Bills = lazy(() => import("./pages/Bills"));

// Health & Vault
const MedicineReminder = lazy(() => import("./pages/MedicineReminder"));
const VehicleReminder = lazy(() => import("./pages/VehicleReminder"));
const DocumentVault = lazy(() => import("./pages/DocumentVault"));
const EmergencyContacts = lazy(() => import("./pages/EmergencyContacts"));

// Career & Education
const StudentPlanner = lazy(() => import("./pages/StudentPlanner"));
const CareerPlanner = lazy(() => import("./pages/CareerPlanner"));
const FamilyWorkspace = lazy(() => import("./pages/FamilyWorkspace"));

// Legacy PrepNex tools
const CodingArena = lazy(() => import("./pages/CodingArena"));
const AptitudeArena = lazy(() => import("./pages/AptitudeArena"));
const AptitudeQuiz = lazy(() => import("./pages/AptitudeQuiz"));
const ResumeAnalyzer = lazy(() => import("./pages/ResumeAnalyzer"));
const InterviewPrep = lazy(() => import("./pages/InterviewPrep"));
const PlacementPrep = lazy(() => import("./pages/PlacementPrep"));
const CoursePrep = lazy(() => import("./pages/CoursePrep"));
const TopicPage = lazy(() => import("./pages/TopicPage"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[#070A13] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 animate-pulse" />
      <p className="text-xs text-slate-500">Loading Nexus AI...</p>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          {/* Public */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/analytics" element={<Analytics />} />

            {/* Life & Productivity */}
            <Route path="/planner" element={<Planner />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/habits" element={<Habits />} />

            {/* Finance */}
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/bills" element={<Bills />} />

            {/* Health & Vault */}
            <Route path="/medicine" element={<MedicineReminder />} />
            <Route path="/vehicle" element={<VehicleReminder />} />
            <Route path="/documents" element={<DocumentVault />} />
            <Route path="/emergency" element={<EmergencyContacts />} />

            {/* Career & Education */}
            <Route path="/student" element={<StudentPlanner />} />
            <Route path="/career" element={<CareerPlanner />} />
            <Route path="/family" element={<FamilyWorkspace />} />

            {/* Legacy PrepNex Tools */}
            <Route path="/coding" element={<CodingArena />} />
            <Route path="/aptitude" element={<AptitudeArena />} />
            <Route path="/aptitude/quiz/:category" element={<AptitudeQuiz />} />
            <Route path="/resume" element={<ResumeAnalyzer />} />
            <Route path="/interview" element={<InterviewPrep />} />
            <Route path="/placement" element={<PlacementPrep />} />
            <Route path="/placement/course/:courseId" element={<CoursePrep />} />
            <Route path="/placement/course/:courseId/topic/:topicId" element={<TopicPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
