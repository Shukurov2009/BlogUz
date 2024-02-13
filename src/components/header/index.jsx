import "./header.css"
import logo from "../../assets/img/bloguzlogo.png"

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <a href="#" className="header-ligo-link">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="header-box">
                            <nav className="header-nav">
                                <ul className="header-list">
                                    <li className="header-item">
                                        <a href="#" className="header-nav-link">
                                            Bosh sahifa
                                        </a>
                                    </li>
                                    <li className="header-item">
                                        <a href="#" className="header-nav-link">
                                            Biz haqimizda
                                        </a>
                                    </li>
                                    <li className="header-item">
                                        <a href="#" className="header-nav-link">
                                            Rasmlar
                                        </a>
                                    </li>
                                    <li className="header-item">
                                        <a href="#" className="header-nav-link">
                                            Savollar
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <button className="header-buuton">
                                bog'lanish
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
