import Subject from "./Subject";

const Subjects = () => {
    const subjects = [
        {
            label: "html",
        },
        {
            label: "css",
        },
        {
            label: "javascript",
        },
        {
            label: "react",
        },
    ];

    return (
        <div className=" col-span-2 flex gap-1">
            {subjects.map((subject, index) => {
                return <Subject key={index} subject={subject} />;
            })}
        </div>
    );
};

export default Subjects;
