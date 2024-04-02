//! ------------------------------

//** SATIŞ ARTIŞ ORANINI İNCLE */
//** FAVÖK ARTIŞ ORANINI İNCLE */
//** NET KAR ARTIŞ ORANINI İNCLE */
//** ÖZKAYNAK ARTIŞ ORANINI İNCLE */
//** TOPLAM AKTİFLER ARTIŞ ORANINI İNCLE */
//** HİSSE BAŞI KAR ARTIŞ ORANINI İNCLE */

// her sene atış varsa yeşillendir //
// 1 senelik, 2 senelik, 5 senelik vs. artışları gösteren select input'lar ekle

//** KAR ARTIŞINA GÖRE SIRALAMA FİLTRESİ OLUŞTUR */

//! ------------------------------

//** BRÜT KARLILIĞA GÖRE SIRALAMA FİLTRESİ OLUŞTUR */
//** FAVÖK KARLILIĞINA GÖRE SIRALAMA FİLTRESİ OLUŞTUR */
//** NET KARLILIĞA GÖRE SIRALAMA FİLTRESİ OLUŞTUR */
//** ÖZSERMAYE KARLILIĞINA GÖRE SIRALAMA FİLTRESİ OLUŞTUR */
//** AKTİF KARLILIĞINA GÖRE SIRALAMA FİLTRESİ OLUŞTUR */

//! ------------------------------

//! ------------------------------

//** YATIRIM PLANLARINI DATA'YA AL */

// kayda değer yatırım planı olanları yeşillendir

export const examine_increments = (stocks, category, year) => {
    let sales = stocks.map((obj) => {
        return {
            id: obj.id,
            // name: obj.name,
            // todo burda kaldım - name'i dahil et

            [category]: obj.financials
                .filter((obj, ind) => ind <= year)
                .map((obj) => obj[category]),
        };
    });

    sales = sales.map((obj) => {
        return {
            id: obj.id,
            // name: obj.name,

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
            // name: obj.name,

            [category]: (
                (obj[category][0] / obj[category][1]) * 100 -
                100
            ).toFixed(2),
        };
    });
    return { data: sales };
};
