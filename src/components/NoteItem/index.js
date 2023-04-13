// Write your code here
import {ListItems, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails

  return (
    <ListItems>
      <Title>{title}</Title>
      <Note>{noteText}</Note>
    </ListItems>
  )
}

export default NoteItem
