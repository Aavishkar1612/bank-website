import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TopBar from "./components/layout/TopBar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Top Info Bar */}
      <TopBar />

      {/* Main Navigation */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
