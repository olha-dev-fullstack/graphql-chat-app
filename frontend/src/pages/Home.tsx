import AuthOverlay from "../components/AuthOverlay";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Sidebar from "../components/Sidebar";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <>
      <AuthOverlay />
        <Sidebar />
        <>Home page</>
      </>
    </MainLayout>
  );
}

export default Home;
