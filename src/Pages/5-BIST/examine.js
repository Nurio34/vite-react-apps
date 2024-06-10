export const examine_increments = (stocks, category, year) => {
    let sales = stocks.map((obj) => {
        return {
            id: obj.id,
            name: obj.name,
            // todo burda kaldım - name'i dahil et

            [category]: obj.financials
                .filter((obj, ind) => ind <= year)
                .map((obj) => obj[category]),
        };
    });

    sales = sales.map((obj) => {
        return {
            id: obj.id,
            name: obj.name,

            [category]: obj[category].filter((num, ind) => {
                if (ind === 0 || ind === obj[category].length - 1) {
                    return num;
                }
            }),
        };
    });

    sales = sales.map((obj) => {
        return {
            id: obj.id,
            name: obj.name,

            // [category]: (
            //     (obj[category][0] / obj[category][1]) * 100 -
            //     100
            // ).toFixed(2),

            [category]: (
                ((obj[category][0] - obj[category][1]) /
                    Math.abs(obj[category][1])) *
                100
            ).toFixed(2),
        };
    });
    return { data: sales };
};
