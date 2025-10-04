import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import MainComp from "../components/maincomp";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-col text-white">
      
      {/* Navbar */}
      <div className="flex-none h-20 bg-gray-800/20">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-50 flex-none bg-gray-800/30">
          <Sidebar />
        </div>

        {/* Main Component */}
        <div className="flex-1 overflow-auto p-4">
          <MainComp />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
