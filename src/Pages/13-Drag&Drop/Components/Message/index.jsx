import { useDragnDropContext } from "../../GlobalApp";

const Message = () => {
    const { status } = useDragnDropContext();

    return (
        Object.keys(status).length !== 0 && (
            <div
                className={` py-1 px-2 text-white
${status.color === "red" ? "bg-red-500" : "bg-green-500"}
`}
            >
                {status.msg}
            </div>
        )
    );
};

export default Message;
