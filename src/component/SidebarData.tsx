import HomeIcon from '@mui/icons-material/Home';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InputIcon from '@mui/icons-material/Input';
import OutputIcon from '@mui/icons-material/Output';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Exhibit",
        icon: <FmdGoodIcon />,
        link: "/exhibit"
    },
    {
        title: "Entrance",
        icon: <InputIcon />,
        link: "/entrance"
    },
    {
        title: "Exit",
        icon: <OutputIcon />,
        link: "/exit"
    },
    {
        title: "Lost",
        icon: <ConfirmationNumberIcon />,
        link: "/lost"
    }
]