// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainers,
  NotesContainers,
  Headings,
  Forms,
  TitleInputs,
  NoteTextAreas,
  AddButtons,
  EmptyNotesViewContainers,
  Images,
  EmptyNotesHeadings,
  Descriptions,
  NotesLists,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])

  const renderNotes = () => (
    <NotesLists>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesLists>
  )

  const renderEmptyNotesView = () => (
    <EmptyNotesViewContainers>
      <Images
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeadings>No Notes Yet</EmptyNotesHeadings>
      <Descriptions>Notes you add will appear here</Descriptions>
    </EmptyNotesViewContainers>
  )

  const onChangeNoteText = event => setNoteText(event.target.value)

  const onChangeTitle = event => setTitle(event.target.value)

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setTitle('')
    setNoteText('')
  }

  return (
    <MainContainers>
      <NotesContainers>
        <Headings>Notes</Headings>
        <Forms onSubmit={onAddNote}>
          <TitleInputs
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <NoteTextAreas
            placeholder="Take a Note..."
            value={noteText}
            onChange={onChangeNoteText}
            rows="3"
          />
          <AddButtons type="submit">Add</AddButtons>
        </Forms>
        {notesList.length === 0 ? renderEmptyNotesView() : renderNotes()}
      </NotesContainers>
    </MainContainers>
  )
}

export default Notes
