import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const AuthPage = () => {
   
  const [activeTab, setActivetab]= useState("sigin");
   
  const handleTabChange=(value)=>{
    setActivetab(value);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b-2">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="h-64 w-18 mr-4" />
          <span className="font-extrabold">Course Management</span>
        </Link>
      </header>

      <div className="flex item-center justify-center min-h-screen ">
        <Tabs defaultValue="sigin" className="w-full max-w-md" onValueChange={handleTabChange} value={activeTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            
          </TabsList>
          <TabsContent value="signin">
            this is signindsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdaaaaaaaaasdaaaaaaaaaaa  
          </TabsContent>
          <TabsContent value="signup">this is signout</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
