import React from 'react'
import googlePlusImg from '../assets/Icons/img/GoogleProject.webp'
import myPortfolio from '../assets/Icons/img/PortfProject.webp'
export const getImage = () => {

    function getImageHandler(index: number) {
        switch (index) {
            case 0:
                return googlePlusImg
            case 1:
                return myPortfolio
            default:
                return ""
        }
    }

    return getImageHandler
}
