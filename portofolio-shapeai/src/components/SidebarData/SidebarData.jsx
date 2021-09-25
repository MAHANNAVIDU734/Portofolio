import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: "Home",
        to: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Contacts",
        to: "/Contact",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text",
    },
    {
        title: "My Projects",
        to: "/Myprojects",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text",
    },

]