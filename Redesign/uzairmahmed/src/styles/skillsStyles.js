import { theme } from '.'

const skillsIcon = {
    width: "100px",
    height: "100px",
    margin: theme.spacing.small,
}

const skillsHeader = {
    fontFamily: theme.fonts.fontHeader,
    color: theme.fonts.fontColor,
    fontWeight: theme.fonts.fontWeightLight,
    fontSize: theme.fonts.fontSize,
}

const skillsText= {
    fontFamily: theme.fonts.fontParagraph,
    color: theme.fonts.fontColor,
    fontWeight: theme.fonts.fontWeightLight,
    fontSize: theme.fonts.fontSizePara,
    justifyContent: "left"
}

export { skillsIcon, skillsHeader, skillsText }