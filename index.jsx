import "./section.css"

export const Section = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="section-inner">
                        <nav className="nav-box">
                            <h2 className="section-title">
                                Yakliklar
                            </h2>
                            <input type="text" className="section-inp" placeholder="Qidirish..." />
                        </nav>
                        <div className="section-bottom-box">
                            <h3 className="section-bottom-box-kuting">
                                Kuting...
                            </h3>
                            <div className="section-spans">
                                <span className="section-bottom-box-span-1">
                                    Left
                                </span>
                                <span className="section-bottom-box-span-2">
                                    Right
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
