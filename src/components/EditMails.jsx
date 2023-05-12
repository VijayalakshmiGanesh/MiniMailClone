import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  MdMarkAsUnread,
  MdMarkEmailRead,
  MdDelete,
  MdReport,
  MdRestoreFromTrash
} from "react-icons/md";

function EditMails({
  unread,
  deleteButton,
  spamButton,
  ReadButton,
  restoreButton,
  deleteDispatchValue,
  spamDispatchValue,
  readDispatchValue,
  restoreDispatchValue
}) {
  return (
    <span className="edit-mails">
      {deleteButton && (
        <button onClick={deleteDispatchValue} className="delete">
          <MdDelete data-tooltip-id="delete" data-tooltip-content="Delete" />
          <ReactTooltip id="delete" place="top" effect="solid">
            Delete
          </ReactTooltip>
        </button>
      )}

      {ReadButton && (
        <button className="unread" onClick={readDispatchValue}>
          {unread ? (
            <span>
              <MdMarkEmailRead
                data-tooltip-id="markAsRead"
                data-tooltip-content="Mark as read"
              />
              <ReactTooltip id="markAsRead" place="top" effect="solid">
                mark as read
              </ReactTooltip>
            </span>
          ) : (
            <span>
              <MdMarkAsUnread
                data-tooltip-id="markAsUnread"
                data-tooltip-content="Mark as unread"
              />
              <ReactTooltip id="markAsUnread" place="top" effect="solid">
                Mark as unread
              </ReactTooltip>
            </span>
          )}
        </button>
      )}
      {spamButton && (
        <button className="spam" onClick={spamDispatchValue}>
          <MdReport
            data-tooltip-id="spam"
            data-tooltip-content="Mark as spam"
          />
          <ReactTooltip id="spam" place="top" effect="solid">
            mark as spam
          </ReactTooltip>
        </button>
      )}
      {restoreButton && (
        <button className="restore" onClick={restoreDispatchValue}>
          <MdRestoreFromTrash
            data-tooltip-id="restore"
            data-tooltip-content="Restore"
          />
          <ReactTooltip id="spam" place="top" effect="solid">
            Restore
          </ReactTooltip>
        </button>
      )}
    </span>
  );
}

export default EditMails;
