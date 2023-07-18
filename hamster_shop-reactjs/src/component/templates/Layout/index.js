import React from 'react'
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const Layout = (props) => {
    const { children } = props;
    return (
        <body>
            <Header />
            <div class="container" style={{ marginTop: "1.5rem", marginBottom: -"1.5rem" }}>
                {children}
            </div>
            <Footer />
        </body>
    )
}

export default Layout