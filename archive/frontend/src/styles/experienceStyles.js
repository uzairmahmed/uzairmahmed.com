import { theme } from '.'
const cardDeck = {
    // backgroundColor:'blue'
    // flexDirection:"row"
}

const icon = {
    alignSelf: "center",
    width: theme.spacing.extraLarge,
}

const iconHolder = {
    display: 'flex',
    justifyContent: "center",
    marginBottom:theme.spacing.small
}

const iconHolder2 = {
    display: 'flex',
    flex: 0.25,
}

const cardHeader = {
    justifyContent: 'space-between',
    padding:"0 " + theme.spacing.small,
}

const title = {
    textAlign: 'left',
    marginBottom: theme.spacing.small,
    paddingLeft: theme.spacing.small
}

const headers = {
    textAlign:'center'
}
const headers2 = {
    textAlign: 'left',
    whiteSpace:'nowrap'
}

const cardBody = {
    padding:theme.spacing.small
}

const card = {
    margin: theme.spacing.regular,
    padding: theme.spacing.regular,
    alignContent: "center",
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.spacing.radius,
}

export { cardHeader, title, headers, headers2, iconHolder2, iconHolder, cardBody, cardDeck, icon, card }