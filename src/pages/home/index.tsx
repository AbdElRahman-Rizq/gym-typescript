import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "@/shared/actionButton";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/media-query";
import {motion } from "framer-motion";

  
  type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  }
  
  const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
      <section
      id="home"
      className="gap-16 bg-gray-20 py-4 md:h-full md:pb-0 md:py-12">
        {/* header & images */}
        <div className="md:flex mx-auto items-center justify-center w-5/6 md:h-5/6">
          {/* heading */}
          <div className="z-10 mt-32 md:basis-3/5">
              <motion.div className="md:-mt-20"
              initial='hidden'
              whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
              >
              <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext ">
              
              
            <img alt="header-text" src={HomePageText} />
              
              </div>
            </div>
            <p className="mt-8 text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p> 
            </motion.div>
          {/* Action */}
          <div className="flex items-center gap-8 mt-8 md:justify-start text-sm">
            
            <ActionButton setSelectedPage={setSelectedPage}>
              join Now
            </ActionButton>
          <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
              >
              <p>Learn More</p>
            </AnchorLink>
              </div>
              </div>
          {/* images */}
          <div className="flex basis-3/5 md:ml-40 justify-center ">
            <img alt={"home-pageGraohic"} src={HomePageGraphic} />
          </div>
        </div>
        {/* sponsors */}
        {isAboveMediumScreens&&(
        <div className="h-[120px] w-full bg-primary-100 py-8 mt-12">
          <div className="mx-auto w-4/6 flex items-center gap-24">            
          <img alt="sponsor" src={SponsorRedBull} />
          <img alt="sponsor" src={SponsorFortune} />
          <img alt="sponsor" src={SponsorForbes} />
          </div>
        </div>
        )}
      </section>
    )
  }
  
  export default Home