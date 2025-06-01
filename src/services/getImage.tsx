import erp from '../assets/Icons/img/erp.webp'
import glare from '../assets/Icons/img/glare.webp'
import animeLibrary from '../assets/Icons/img/animeLib.webp'
export const getImage = () => {

    function getImageHandler(index: number) {
        switch (index) {
            case 0:
                return erp
            case 1:
                return glare
            case 2:
                return animeLibrary
            default:
                return ""
        }
    }

    return getImageHandler
}
