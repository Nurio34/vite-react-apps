import { useEffect, useRef } from "react";
import { setHeader } from "../Store/components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const HeaderEl = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (HeaderEl.current) {
            dispatch(setHeader(HeaderEl.current));
        }
    }, []);

    return (
        <header
            className=" bg-gray-100 flex justify-between padding"
            ref={HeaderEl}
        >
            <Link to="/react_projects">MyProjects</Link>
            <button>Login</button>
        </header>
    );
}

export default Header;
