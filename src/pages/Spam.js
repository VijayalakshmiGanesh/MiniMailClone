import { useContext } from "react";
import { MailContext } from "../context/MailContext";
import MailCard from "../components/MailCard";

function Spam() {
  const { spamMails, dispatch } = useContext(MailContext);

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Spam</h2>
      {spamMails.length === 0 ? (
        <p className="info">No spam mails</p>
      ) : (
        spamMails.map((mail) => (
          <p key={mail.mId} className="spam_delete">
            <MailCard
              {...mail}
              deleteButton
              deleteDispatchValue={() =>
                dispatch({
                  type: "Delete_mail_from_spam",
                  payload: mail.mId
                })
              }
            />
          </p>
        ))
      )}
    </>
  );
}

export default Spam;
