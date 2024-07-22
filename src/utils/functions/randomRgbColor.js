const Rgb = 255;

export const randomRgbColor = () => {
    const randomRgbValue = Array(3)
        .fill("#")
        .map((item) => {
            const random = Math.floor(Math.random() * Rgb + 1);
            return random;
        });
    const rgbColor = `rgb(${randomRgbValue})`;
    return rgbColor;
};
