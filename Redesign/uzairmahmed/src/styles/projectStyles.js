import { theme } from '.'

const cardDeck = {
    //flexDirection:"row"
}
const card = {
    margin: theme.spacing.small,
    width:theme.spacing.cardWidth/2,
    backgroundColor: theme.colors.secondary,
    borderRadius:theme.spacing.radius,
}
const cardImage = {
    padding:3,
    borderRadius: theme.spacing.radius,
    alignSelf:"center",
    // width:theme.spacing.cardWidth
}

export {cardDeck, card, cardImage }