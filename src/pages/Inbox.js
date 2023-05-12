import { useContext, useState } from "react";

import { MailContext } from "../context/MailContext";
import MailCard from "../components/MailCard";

function Inbox() {
  const { dispatch, state } = useContext(MailContext);
  const [isUnReadON, setUnreadON] = useState(false);
  const [isStarredON, setStarredON] = useState(false);

  const filteredMails = state.filter(({ unread, isStarred }) => {
    return !isStarredON && !isUnReadON
      ? state
      : (!isUnReadON || unread === isUnReadON) &&
          (!isStarredON || isStarred === isStarredON);
  });

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Inbox</h2>
      <fieldset>
        <legend>Filters</legend>
        <input type="checkbox" onChange={(e) => setUnreadON((prev) => !prev)} />
        Show unread emails
        <input
          type="checkbox"
          onChange={(e) => setStarredON((prev) => !prev)}
        />
        Show Starred emails
      </fieldset>
      {filteredMails.length === 0 ? (
        <p>No mails to display</p>
      ) : (
        <div>
          {filteredMails.map((mail) => (
            <MailCard
              {...mail}
              starButton
              deleteButton
              deleteDispatchValue={() =>
                dispatch({ type: "Delete_mail", payload: mail.mId })
              }
              spamButton
              spamDispatchValue={() =>
                dispatch({ type: "Mark_spam", payload: mail.mId })
              }
              ReadButton
              readDispatchValue={() =>
                dispatch({
                  type: "Mark_unread",
                  payload: { id: mail.mId, unread: !mail.unread }
                })
              }
            />
          ))}
        </div>
      )}
      {}
    </>
  );
}

export default Inbox;
