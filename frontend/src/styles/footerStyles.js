import { theme } from '.'

const footer = {
    height: theme.spacing.giant,
    backgroundColor: theme.colors.secondary,
    alignContent:""

}

const text = {
    fontFamily: theme.fonts.fontHeader,
    fontSize: theme.fonts.fontSize,
    color: theme.colors.darkGray 
}

const link = {
    fontFamily: theme.fonts.fontHeader,
    fontSize: theme.fonts.fontSize,
    color: theme.colors.lightGray
}

const row = {
    padding: theme.spacing.small,
    height: theme.spacing.giant,
    justifyContent: "space-between",
    alignItems: "center",
  
}

export { footer, text, link, row }