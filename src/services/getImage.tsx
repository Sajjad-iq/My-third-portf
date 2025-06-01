import erp from '../assets/Icons/img/erp.webp'
import glare from '../assets/Icons/img/glare.webp'
export const getImage = () => {

    function getImageHandler(index: number) {
        switch (index) {
            case 0:
                return erp
            case 1:
                return glare
            default:
                return ""
        }
    }

    return getImageHandler
}
