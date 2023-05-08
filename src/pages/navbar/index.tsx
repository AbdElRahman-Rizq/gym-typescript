import useMediaQuery from "@/hooks/media-query"
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/logo.png"
import { useState } from "react";
import ActionButton from "@/shared/actionButton";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"

type Props={
    isTopPage:boolean,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage)=>void;
    }
const Navbar=({selectedPage,setSelectedPage}:Props)=> {
const[isMenuToggled,setMenuToggled]=useState(true);
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
      <nav>
        <div
        className={`${flexBetween} fixed top-0 z-10 w-full py-6`}
        >
            
             <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens?(

                <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                   <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton>
                    Become a Member
                  </ActionButton>
                </div>
                </div>
                </div>
                ):(
                    <button
                    onClick={()=>{setMenuToggled(!isMenuToggled)
                    }}
                    className={"rounded-full bg-secondary-500 p-2"}
                    >
                       <Bars3Icon className="h-6 w-6" />
                       
                    </button>
                    
                )

            }
                
        </div>
        </div>
        </div>
        {/* For Mobile screens */}
        {!isMenuToggled && !isAboveMediumScreens&&
        <div className="fixed right-0 bottom-0 z-40 w-[250px] h-full bg-primary-100">
        <div className="flex justify-end p-12">
          <button onClick={()=>setMenuToggled(!isMenuToggled)}>
          <XMarkIcon className="h-6 text-gray-400"/> 
          </button>
          {/* menu Items */}
          </div>
          <div className="flex flex-col ml-[33%] gap-5 text-1xl">
          <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />

          </div>
          
        </div>
        
        }
      </nav>
    )
  }
  
  export default Navbar