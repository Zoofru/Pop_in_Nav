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
            border: 'none'
        },
        navContainer: {
            paddingTop: '5%'
        }
    }

    return (
        <nav style={Styles.navStyle}>
            <div style={Styles.navContainer}>
                <button className="hideShowNavButton" style={Styles.hideShowNavButton}>{`\u2B9E`}</button>
            </div>
        </nav>
    )
}

export default Nav