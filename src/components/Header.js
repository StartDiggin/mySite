import React from 'react';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true,
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        })
    }

    render() {
        return (
            <header id="header">
                <div id="company">
                    <h2>Intelesite, LLC</h2>
                </div>
                <nav>
                    <a id="links" href="/">Home</a>
                    <a id="links" href="/about">About</a>
                    <a id="links" href="/services">Services</a>
                    <a id="links" href="/contact">Contact</a>
                    <button id="consult"><a id="btnLink" href="/contact">Free Consult</a></button>

                    <button id="menu" onClick={this.showMenu}>Menu</button>
                    {
                        this.state.showMenu
                        ?(
                            <div className="menu">
                                <ul>
                                    <li id="alinks"><button><a href="/">Home</a></button></li>
                                    <li id="alinks"><button><a href="/about">About</a></button></li>
                                    <li id="alinks"><button><a href="/services">Services</a></button></li>
                                    <li id="alinks"><button><a href="/contact">Contact</a></button></li>
                                </ul>
                            </div>
                        )
                        :(
                            null
                        )
                    }
                </nav>
            </header>
        )
    }
};

export default Header;