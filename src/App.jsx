import { useState } from "react"
import { NavBar } from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import { MailboxDetails } from "./components/MailboxDetails"
import { MailboxForm } from "./components/MailboxForm"
import { MailboxList } from "./components/MailboxList"

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (boxSize, boxholder) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxSize,
      boxholder,
    }
    setMailboxes([...mailboxes, newMailbox])
  }

  return (
    <>
      <h1>Post Office</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  )
}

export default App
