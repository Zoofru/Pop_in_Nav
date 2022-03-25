const Nav = () => {
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
        if (btn.classList.contains('animateOpen')) {
            btn.classList.remove('animateOpen')
            btn.classList.add('animateClose')
        } else {
            btn.classList.remove('animateClose')
            btn.classList.add('animateOpen')
        }
    }

    return (
        <nav className='navStyle animateClose' style={Styles.navStyle}>
            <div style={Styles.navContainer}>
                <button className="hideShowNavButton" style={Styles.hideShowNavButton} onClick={animate}>{`\u2B9E`}</button>
            </div>
        </nav>
    )
}

export default Nav