export const goodLookingNumber = (num) => {
    if (num) {
        let Num = num.toString().split("").reverse();

        if (num < 0) {
            Num.pop();
        }

        Num = Num.map((num, ind) => {
            if (Num.length > 3) {
                if (ind !== 0 && ind % 3 === 0) {
                    return num + ".";
                }
            }
            return num;
        })
            .reverse()
            .join("");

        if (num < 0) {
            Num = "-" + Num;
        }

        if (Math.abs(Num) === 0) {
            Num = "";
        }
        return Num;
    }
};
