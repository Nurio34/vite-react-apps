import { useContactContext } from "../../GlobalApp";
import { form } from "../../form";
import "./index.scss";

function Form() {
    const { currentStep, formData, setFormData } = useContactContext();

    return (
        <form
            className={`grid gap-[0.3vh]  md:pt-[2vw] pt-[1vh] text-white
            ${currentStep === "contact" && " md:gap-0"}
        `}
        >
            {form
                .filter((object) => object.topic === currentStep)
                .map((object) => {
                    return object.names.map((name) => {
                        if (name[1] === "select") {
                            return (
                                <label
                                    key={name[0]}
                                    htmlFor={name[0]}
                                    className="grid justify-self-stretch"
                                >
                                    <span
                                        className="hidden md:block text-white capitalize font-semibold text-lg "
                                        style={{ fontVariant: "small-caps" }}
                                    >
                                        {name[0]}
                                    </span>
                                    <select
                                        name={name[0]}
                                        id={name[0]}
                                        className=" p-[1vh] capitalize bg-[rgba(255,255,255,0.2)]"
                                        onChange={(e) => {
                                            setFormData((pre) => ({
                                                ...pre,
                                                [name[0]]: e.target.value,
                                            }));
                                        }}
                                    >
                                        {name[2].map((reason) => {
                                            return (
                                                <option
                                                    key={reason}
                                                    value={reason}
                                                    className="bg-purple-700"
                                                >
                                                    {reason}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </label>
                            );
                        } else if (name[1] === "textarea") {
                            return (
                                <label key={name[0]} htmlFor={name[0]}>
                                    <span
                                        className="hidden md:block text-white capitalize font-semibold textxl"
                                        style={{ fontVariant: "small-caps" }}
                                    >
                                        {name[0]}
                                    </span>
                                    <textarea
                                        name={name[0]}
                                        id={name[0]}
                                        className=" w-full px-[2vw] bg-[rgba(255,255,255,0.2)]"
                                        onChange={(e) => {
                                            setFormData((pre) => {
                                                return {
                                                    ...pre,
                                                    [name[0]]: e.target.value,
                                                };
                                            });
                                        }}
                                        placeholder={name[0] + " ..."}
                                    ></textarea>
                                </label>
                            );
                        } else if (name[1] === "radio") {
                            return (
                                <div key={name[0]}>
                                    <span
                                        className="hidden md:block text-white capitalize font-semibold text-lg"
                                        style={{ fontVariant: "small-caps" }}
                                    >
                                        {name[0]}
                                    </span>
                                    <div className="flex gap-[1vw]">
                                        {name[2].map((option) => {
                                            return (
                                                <label
                                                    key={option}
                                                    htmlFor={option}
                                                    className=" capitalize flex items-center gap-[1vw] text-white"
                                                >
                                                    {option}
                                                    <input
                                                        type="radio"
                                                        name={name[0]}
                                                        id={option}
                                                        value={option}
                                                        className=" marker:text-red-300"
                                                        onChange={(e) => {
                                                            setFormData(
                                                                (pre) => ({
                                                                    ...pre,
                                                                    [name[0]]:
                                                                        e.target
                                                                            .value,
                                                                }),
                                                            );
                                                        }}
                                                    />
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <label
                                    key={name[0]}
                                    htmlFor={name[0]}
                                    className=" justify-self-stretch"
                                >
                                    <span
                                        className="hidden md:block text-white capitalize font-semibold text-lg"
                                        style={{ fontVariant: "small-caps" }}
                                    >
                                        {name[0]}
                                    </span>
                                    <input
                                        type={name[1]}
                                        name={name[0]}
                                        id={name[0]}
                                        className=" w-full px-[2vw] h-[4vh] bg-[rgba(255,255,255,0.2)]"
                                        placeholder={name[0] + " ..."}
                                        accept={
                                            name[1] === "file"
                                                ? "image/*"
                                                : undefined
                                        }
                                        multiple={name[1] === "file" && true}
                                        onChange={(e) => {
                                            if (name[1] === "file") {
                                                const files = [
                                                    ...e.target.files,
                                                ];
                                                const urls = files.map((file) =>
                                                    URL.createObjectURL(file),
                                                );
                                                setFormData((pre) => ({
                                                    ...pre,
                                                    [name[0]]:
                                                        urls.length === 1
                                                            ? urls[0]
                                                            : urls,
                                                }));
                                                console.log(urls);
                                            } else {
                                                setFormData((pre) => ({
                                                    ...pre,
                                                    [name[0]]: e.target.value,
                                                }));
                                            }
                                        }}
                                    />
                                </label>
                            );
                        }
                    });
                })}
        </form>
    );
}

export default Form;
