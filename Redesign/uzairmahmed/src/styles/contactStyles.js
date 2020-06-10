import { theme, baseStyles } from '.'

const card = {
    margin: theme.spacing.small,
    padding: theme.spacing.small,
    alignContent: "center",
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.spacing.radius,
}


const icon = {
    alignSelf: "center",
    width: theme.spacing.regular,
    marginBottom: theme.spacing.small
}

const formInput = {
    color: theme.colors.primary,
    margin: theme.spacing.small + " 0",
    padding: theme.spacing.small + " " + "0",
    backgroundColor: theme.colors.secondary,
    borderWidth: 0,
    borderBottom: "1px solid" + theme.colors.primary,
    borderRadius: 0,
}

const formButton = {
    margin: theme.spacing.small + " 0",
    marginBottom: theme.spacing.regular,
    width: "100%"
}

export { card, icon, formButton, formInput }