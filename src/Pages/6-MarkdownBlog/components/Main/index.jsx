import { compiler } from "markdown-to-jsx";
import { useEffect, useMemo, useState } from "react";
import { useGlobalContext } from "../../GlobalApp";

function index() {
    return (
        <article>
            <h2>Posts</h2>
            {compiler("Hello world", {
                forceBlock: true,
                wrapper: "article",
                disableParsingRawHTML: true,
            })}
        </article>
    );
}

export default index;
