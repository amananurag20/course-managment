import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b-2">
        <Link to={"/"} className="flex items-center justify-center">
        <GraduationCap className="h-64 w-18 mr-4"/>
        <span className="font-extrabold">Course Management</span>
        </Link>
      </header>

      <div className="flex item-center justify-center min-h-screen bg-red-900"></div>
    </div>
  );
};

export default AuthPage;
