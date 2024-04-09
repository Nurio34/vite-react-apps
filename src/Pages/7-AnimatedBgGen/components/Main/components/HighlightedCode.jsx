import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function HighlightedCode({ children }) {
    const codeString = "(num) => num + 1";

    return (
        <div className="HighlightedCode">
            <SyntaxHighlighter language="jsx" style={dark}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

export default HighlightedCode;
