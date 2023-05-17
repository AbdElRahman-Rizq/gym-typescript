import Navbar from"@/pages/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/pages/home";
import Benefits from "@/pages/benefits";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopPage,setTopPage]=useState<boolean>(false);
  useEffect(
    ()=>{
      const handleScroll=()=>{
        if(window.scrollY===0)
        {setTopPage(true);
          setSelectedPage(SelectedPage.Home)
        }
        else 
        setTopPage(false);
      }
      window.addEventListener("scroll",handleScroll);
      return()=>
      window.removeEventListener("scroll",handleScroll);
    },[]
  )

  return (
    <div className="app bg-gray-20">
    <Navbar 
    isTopPage={isTopPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
      <Home />
      <Benefits />
     </div>
  )
}

export default App
