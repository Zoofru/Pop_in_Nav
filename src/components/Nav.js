import { useState } from "react"
import NavItem from "./NavItem"

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
        }
    }

    const animate = () => {
        const btn = document.querySelector('.navStyle')
        const navItems = document.querySelectorAll('.item')
        if (btn.classList.contains('animateOpen')) {
            btn.classList.remove('animateOpen')
            btn.classList.add('animateClose')
            navItems.forEach(item => {
                item.style.display = 'none'
            })
            setClose(true)
            setOpen(false)
        } else {
            btn.classList.remove('animateClose')
            btn.classList.add('animateOpen')
            navItems.forEach(item => {
                item.style.display = 'block'
            })
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
            <NavItem label='Home'></NavItem>
            <NavItem label='Calendar'></NavItem>
            <NavItem label='Messages'></NavItem>
            <NavItem label='Projects'></NavItem>
            <NavItem label='Progress'></NavItem>
            <NavItem label='Goals'></NavItem>
            <NavItem label='Notifications'></NavItem>
            <NavItem label='Settings'></NavItem>
        </nav>
    )
}

export default Nav