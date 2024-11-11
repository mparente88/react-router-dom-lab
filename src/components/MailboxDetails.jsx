import { useParams } from "react-router-dom"

export const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )

  return (
    <>
      <div className="mailbox-details card">
        {selectedBox ? (
          <>
            <h3>Mailbox Details</h3>
            <p>
              <strong>Box Number:</strong> {selectedBox._id}
            </p>
            <p>
              <strong>Boxholder:</strong> {selectedBox.boxholder}
            </p>
            <p>
              <strong>Box Size:</strong> {selectedBox.boxSize}
            </p>
          </>
        ) : (
          <h3>Mailbox Not Found!</h3>
        )}
      </div>
    </>
  )
}
