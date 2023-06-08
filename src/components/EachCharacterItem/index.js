import {ListedContainer, ItemText} from '../Home/styledComponents'

const EachCharacterItem = props => {
  const {characterDetails} = props
  return (
    <ListedContainer>
      <ItemText>
        {characterDetails.word} : {characterDetails.length}
      </ItemText>
    </ListedContainer>
  )
}
export default EachCharacterItem
