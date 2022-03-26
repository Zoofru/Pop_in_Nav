import { useState } from "react"
import NavItem from "./NavItem"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Nav = () => {
    const [open, setOpen] = useState(false)
    const [close, setClose] = useState(true)

    const Styles = {
        navStyle: {
            width: '2.5vw',
            height: '100vh',
            borderRight: '.5px solid lightgray'
        },
        hideShowNavButton: {
            width: '2.5vw',
            height: '3vh',
            border: 'none',
            float: 'right'
        },
        navContainer: {
            paddingTop: '1vh'
        },
        iconStyle : {
            width: '100%'
        }
    }

    const animate = () => {
        const btn = document.querySelector('.navStyle')

        if (btn.classList.contains('animateOpen')) {
            btn.classList.remove('animateOpen')
            btn.classList.add('animateClose')
            setClose(true)
            setOpen(false)
        } else {
            btn.classList.remove('animateClose')
            btn.classList.add('animateOpen')
            setClose(false)
            setOpen(true)
        }
    }

    return (
        <nav className='navStyle animateClose' style={Styles.navStyle}>
            <div style={Styles.navContainer}>
                {close ? <button className="hideShowNavButton" style={Styles.hideShowNavButton} onClick={animate}>{`\u2B9E`}</button> : null}
                {open ? <button className="hideShowNavButton" style={Styles.hideShowNavButton} onClick={animate}>{`\u2B9C`}</button> : null}
            </div>
            {close ? <HomeOutlinedIcon className="item" style={Styles.iconStyle}/> : <NavItem label='Home'></NavItem>}
            {close ? <CalendarMonthOutlinedIcon className="item" style={Styles.iconStyle} /> : <NavItem label='Calendar'></NavItem>}
            {close ? <MessageOutlinedIcon className="item" style={Styles.iconStyle} /> : <NavItem label='Messages'></NavItem>}
            {close ? <BusinessCenterOutlinedIcon className="item" style={Styles.iconStyle} /> : <NavItem label='Projects'></NavItem>}
            {close ? <BarChartOutlinedIcon className="item" style={Styles.iconStyle} /> : <NavItem label='Progress'></NavItem>}
            {close ? <ModeStandbyOutlinedIcon className="item" style={Styles.iconStyle} /> : <NavItem label='Goals'></NavItem>}
            {close ? <NotificationsOutlinedIcon className="item" style={Styles.iconStyle} /> : <NavItem label='Notifications'></NavItem>}
            {close ? <SettingsOutlinedIcon className="item" style={Styles.iconStyle} /> : <NavItem label='Settings'></NavItem>}
        </nav>
    )
}

export default Nav