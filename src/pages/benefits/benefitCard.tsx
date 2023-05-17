import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../shared/types"
import {motion} from "framer-motion"
type Props = {
    setSelectedPage:(value:SelectedPage)=>void,
    icon:JSX.Element,
    description:string,
    title:string,
}
const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  
const Card = ({icon,title,description,setSelectedPage}: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className="mt-4 px-5 py-14 rounded-md border-2 border-grey-100 text-center">
        <div className="mb-4 flex flex-col justify-center">
            {/* Icon */}
        <div className="rounded-full border-2 border-grey-100 bg-primary-100 p-4 w-1/6 md:w-1/5 mx-auto mb-2">
            {icon}
        </div>
        {/* Title */}
            <h4 className="font-bold">{title}</h4>
            {/* description */}
            <p className="my-3">{description}</p>
            {/* Link */}
            <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
        </div>
    </motion.div>
  )
}

export default Card