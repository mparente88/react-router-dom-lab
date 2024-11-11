import { Link } from "react-router-dom"

export const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-list">
      {mailboxes.map((mailbox) => (
        <Link
          to={`/mailboxes/${mailbox._id}`}
          key={mailbox._id}
          className="mail-box"
        >
          <div>
            <p>
              <strong>Box Number:</strong> {mailbox._id}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
