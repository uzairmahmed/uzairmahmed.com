import { theme } from '.'

const block = {
    height: "100vh",
    width: "100vw",
}

const row = {
    justifyContent: "center",
    alignItems: "center", 
}

const container = {
    // backgroundColor:"rgba(100,100,100,0.6)"
}

const header = {
    padding:"10px",
    fontFamily: theme.fonts.fontHeader,
    fontSize: theme.fonts.fontSizeParagraph,
    fontWeight: theme.fonts.fontWeight,
    color: theme.fonts.fontColor
}

const paragraph = {
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeParagraph,
    color: theme.fonts.fontColor 
}

const profilepicture = {
    width: "250px",
    height: "250px",
    margin: "25px",
}

const button = {
    margin: "25px",
    padding: "10px 25px",
    borderRadius:"10px",
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeParagraph,
    // backgroundColor: theme.colors.primary,
    borderColor: theme.colors.secondary,
    color: theme.colors.secondary,
}


export { block, row, container, header, paragraph, profilepicture, button }