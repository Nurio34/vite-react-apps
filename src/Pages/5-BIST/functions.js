const finansallar = [...document.querySelectorAll(`#finanslar table tbody tr`)]
    .filter((row) => {
        if ([...row.children][0].innerText.split("/")[1] === "12") {
            return row;
        }
    })
    .map((item, index) => {
        const children = item.children;
        return [...children]
            .filter((child, index) => {
                if (
                    index == 0 ||
                    index == 2 ||
                    index == 4 ||
                    index == 8 ||
                    index == 12 ||
                    index == 13
                ) {
                    return child;
                }
            })
            .map((i) => i.innerText);
    })
    .map((item, index) => {
        return {
            year: +item[0].split("/")[0],
            net_sales: +item[1].split(",").join("") || null,
            ebidta: +item[2].split(",").join("") || null,
            net_profit: +item[3].split(",").join("") || null,
            equity: +item[4].split(",").join("") || null,
            total_assets: +item[5].split(",").join("") || null,
        };
    });

const karlılık = [...document.querySelectorAll(`#karlilik table tbody tr`)]
    .filter((row) => {
        if ([...row.children][0].innerText.split("/")[1] === "12") {
            return row;
        }
    })
    .map((item, index) => {
        const children = item.children;
        return [...children]
            .filter((child, index) => {
                if (
                    index == 0 ||
                    index == 2 ||
                    index == 6 ||
                    index == 8 ||
                    index == 9 ||
                    index == 10
                ) {
                    return child;
                }
            })
            .map((i) => i.innerText);
    })
    .map((item, index) => {
        return {
            year: +item[0].split("/")[0],
            gross_profit_margin: +item[1].split(",").join("") || null,
            ebidta_margin: +item[2].split(",").join("") || null,
            net_profit_margin: +item[3].split(",").join("") || null,
            roe: +item[4].split(",").join("") || null,
            roa: +item[5].split(",").join("") || null,
        };
    });

const çarpanlar = [...document.querySelectorAll(`#carpanlar table tbody tr`)]
    .filter((row) => {
        if ([...row.children][0].innerText.split("/")[1] === "12") {
            return row;
        }
    })
    .map((item, index) => {
        const children = item.children;
        return [...children]
            .filter((child, index) => {
                if (
                    index == 0 ||
                    index == 1 ||
                    index == 3 ||
                    index == 4 ||
                    index == 5 ||
                    index == 6 ||
                    index == 8
                ) {
                    return child;
                }
            })
            .map((i) => i.innerText);
    })
    .map((item, index) => {
        return {
            year: +item[0].split("/")[0],
            price: +item[1].split(",").join("") || null,
            "p/e": +item[2].split(",").join("") || null,
            "pd/ds": +item[3].split(",").join("") || null,
            "fd/ebidta": +item[4].split(",").join("") || null,
            "fd/sales": +item[5].split(",").join("") || null,
            eps: +item[6].split(",").join("") || null,
        };
    });

console.log({ finansallar, karlılık, çarpanlar });
