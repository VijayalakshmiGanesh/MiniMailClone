import { useContext } from "react";
import MailCard from "../components/MailCard";

import { MailContext } from "../context/MailContext";

function Trash() {
  const { trashMails, dispatch } = useContext(MailContext);

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Trash</h2>
      {trashMails.length === 0 ? (
        <p className="info">No trash mails</p>
      ) : (
        trashMails.map((mail) => (
          <p key={mail.mId} className="spam_delete">
            <MailCard
              {...mail}
              restoreButton
              restoreDispatchValue={() =>
                dispatch({
                  type: "Restore_mail",
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

export default Trash;
