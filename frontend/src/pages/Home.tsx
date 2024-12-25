import AddChatroom from "../components/AddChatroom";
import AuthOverlay from "../components/AuthOverlay";
import ProfileSettings from "../components/ProfileSettings";
import ProtectedRoutes from "../components/ProtectedRoutes";
import RoomList from "../components/RoomList";
import Sidebar from "../components/Sidebar";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <>
        <AuthOverlay />
        <Sidebar />
        <ProfileSettings />
        <ProtectedRoutes>
          <RoomList />
          <AddChatroom />
        </ProtectedRoutes>
      </>
    </MainLayout>
  );
}

export default Home;
