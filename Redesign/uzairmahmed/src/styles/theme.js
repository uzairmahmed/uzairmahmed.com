import { Parallax } from "react-parallax"

const colors = {
    primary: "#FFF",
    secondary: "#000"
}

const spacing = {
    tiny: "10px",
    small: "25px",

    radius: "50px"
}

const fonts = {
    font: "Raleway, sans-serif",
    fontHeader: "Raleway, sans-serif",
    fontParagraph: "'Open Sans', sans-serif",

    fontColor: colors.primary,

    fontSize: "20px",
    fontSizeTitle: "50px",
    fontSizeHead: "25px",
    fontSizePara: "12px",

    fontWeight: "400",
    fontWeightLight: "200",
    fontWeightHeavy: "600",
}

const parallax = {
    blur: 0.1,
    alt: "Background",
    strength: 500,
    style: {
        backgroundPosition: "center",
        backgroundSize: "cover",
    }
}

export { colors, spacing, fonts, parallax }