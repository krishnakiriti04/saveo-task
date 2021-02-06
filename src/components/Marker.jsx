import { FaMapMarkerAlt } from 'react-icons/fa';

function Marker({lat,lng}) {
    return (
        <div>
            <span ><FaMapMarkerAlt size="3em"/></span>
        </div>
    )
}

export default Marker;