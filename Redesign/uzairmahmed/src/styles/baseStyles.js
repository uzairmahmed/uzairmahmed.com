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
    marginTop: 50,
    alignItems:"center",
    // backgroundColor:"rgba(100,100,100,0.6)"
}

const header = {
    padding:theme.spacing.tiny,
    fontFamily: theme.fonts.fontHeader,
    fontSize: theme.fonts.fontSizeParagraph,
    fontWeight: theme.fonts.fontWeight,
    color: theme.fonts.fontColor
}

const paragraph = {
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizePara,
    color: theme.fonts.fontColor 
}

const profilepicture = {
    width: "250px",
    height: "250px",
    margin: theme.spacing.small,
}

const button = {
    margin: theme.spacing.small,
    padding: theme.spacing.tiny + " " + theme.spacing.small,
    borderRadius:theme.spacing.radius,
    fontFamily: theme.fonts.fontParagraph,
    fontSize: theme.fonts.fontSizeParagraph,
    borderColor: theme.colors.secondary,
    color: theme.colors.secondary,
}


export { block, row, container, header, paragraph, profilepicture, button }