import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { MailContext } from "../context/MailContext";
import EditMails from "./EditMails";

function MailCard({
  mId,
  sender,
  unread,
  isStarred,
  subject,
  content,
  deleteDispatchValue,
  spamDispatchValue,
  readDispatchValue,
  restoreDispatchValue,
  starButton,
  ...rest
}) {
  const { dispatch } = useContext(MailContext);

  return (
    <div
      key={mId}
      id={mId}
      className="mailDetail"
      style={{ fontWeight: unread ? 700 : 400 }}
    >
      {starButton && (
        <button
          style={{
            color: isStarred && "#FCA510",
            border: "none",
            backgroundColor: "inherit"
          }}
          onClick={() =>
            dispatch({
              type: "Mark_star",
              payload: { id: mId, starred: !isStarred }
            })
          }
        >
          <MdStar />
        </button>
      )}
      <NavLink to={`/${mId}`} className="viewMail">
        <span className="sender">{sender}</span>
        <span className="subject">{subject}</span>
        <span className="content">
          {content?.length <= 40
            ? content
            : content?.substr(0, 40 - subject?.length)}
          ....
        </span>
      </NavLink>
      <EditMails
        unread={unread}
        deleteDispatchValue={deleteDispatchValue}
        spamDispatchValue={spamDispatchValue}
        readDispatchValue={readDispatchValue}
        restoreDispatchValue={restoreDispatchValue}
        {...rest}
      />
    </div>
  );
}

export default MailCard;
