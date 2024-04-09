import { useState } from "react";

function useThemeChange() {
    const [isThemeLight, setIsThemeLight] = useState(true);

    return { isThemeLight, setIsThemeLight };
}

export default useThemeChange;
