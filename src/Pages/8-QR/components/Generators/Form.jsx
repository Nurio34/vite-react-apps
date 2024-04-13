import { useQR } from "../../GlobalApp";

function Form() {
    const { category, body, setBody } = useQR();

    const heading = category === "url" ? "Your URL" : "";

    return (
        <fieldset>
            <legend className=" font1 " style={{ fontVariant: "small-caps" }}>
                {heading}
            </legend>
            {category === "url" ? (
                <input
                    type="url"
                    name="url"
                    id="url"
                    className=" padding2 w-full bg-orange-500 rounded-md placeholder:text-white"
                    placeholder="https://example.com"
                    onBlur={(e) =>
                        setBody((pre) => ({ ...pre, url: e.target.value }))
                    }
                />
            ) : (
                ""
            )}
        </fieldset>
    );
}

export default Form;
