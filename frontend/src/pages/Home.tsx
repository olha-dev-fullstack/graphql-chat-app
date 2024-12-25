import AuthOverlay from "../components/AuthOverlay";
import ProfileSettings from "../components/ProfileSettings";
import Sidebar from "../components/Sidebar";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <>
      <AuthOverlay />
        <Sidebar />
        <ProfileSettings />
      </>
    </MainLayout>
  );
}

export default Home;
