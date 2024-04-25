import { useFilesContext } from "../GlobalApp";

function Status() {
    const { msg } = useFilesContext();
    return <div>{msg}</div>;
}

export default Status;
