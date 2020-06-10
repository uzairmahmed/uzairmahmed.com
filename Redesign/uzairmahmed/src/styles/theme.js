import { Parallax } from "react-parallax"

const colors = {
    primary: "#FFF",
    secondary: "#000"
}

const spacing = {
    tiny: "10px",
    small: "25px",
    regular: "50px",
    large: "75px",

    cardWidth: "300px",
    inputRadius: "10px",
    radius: "25px",
    round: "50px"
}

const fonts = {
    font: "Raleway, sans-serif",
    fontHeader: "Raleway, sans-serif",
    fontParagraph: "'Open Sans', sans-serif",

    fontColor: colors.primary,

    fontSize: "20px",
    fontSizeTitle: "50px",
    fontSizeHead: "25px",
    fontSizePara: "15px",

    fontWeight: "400",
    fontWeightLight: "200",
    fontWeightHeavy: "600",
}

const parallax = {
    blur: 5,
    alt: "Background",
    strength: 500,
    style: {
        backgroundPosition: "top",
        backgroundSize: "auto",
    }
}

const scrolls = {
    spy: true,
    smooth: true,
    offset: 0,
    duration: 500,
}

export { colors, spacing, fonts, parallax, scrolls }