
import Navber from "../component/Navber";
import Footer from "../component/Footer";
import { Outlet, useNavigation } from "react-router-dom";



const MainLayOuts = () => {
  
  const navigation = useNavigation();
  return (
    <div>
        
      <nav>
        <Navber />
      </nav>
      <main className=" max-w-11/12 mx-auto  min-h-[calc(100vh-360px)]  ">
       
        {navigation.state === "loading" ? (
          <span className="loading loading-ring loading-xl"></span>
        ) : (
            
          <Outlet />
        )}
      </main>
      <footer className="mt-[170px]">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayOuts;
