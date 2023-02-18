import React from "react";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";

import './styles.css'

const HomePage = () => {
    return(
        <div className="container">
            <HeaderNavigation />
            <div className="centerXY">
                <div className="body__item">
                    <h1 className="home__title">Home Page</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage