import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../..";

function Details() {
    const location = useLocation();
    console.log(location);
    const { id } = useGlobalContext();
    console.log(id);

    return <div>Detailss</div>;
}

export default Details;
