const HexArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

export const randomHexColor = () => {
    const randomHexValue = Array(7)
        .fill("#")
        .map((item, index) => {
            if (index != 0) {
                const random = Math.floor(Math.random() * HexArray.length);
                return HexArray[random];
            }
            return "#";
        })
        .join("");
    return randomHexValue;
};
