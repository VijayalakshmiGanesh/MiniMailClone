import { createContext, useReducer, useState } from "react";
import { mails } from "../data/db";

export const MailContext = createContext();

export function MailProvider({ children }) {
  const mailsData = mails;
  const [spamMails, setSpamMails] = useState([]);
  const [trashMails, setTrashMails] = useState([]);

  const MailReducer = (acc, value) => {
    switch (value.type) {
      case "Delete_mail": {
        const mailToBeDeleted = acc.find((mail) => mail.mId === value.payload);
        setTrashMails((prev) => [...prev, mailToBeDeleted]);
        return acc.filter((mail) => mail.mId !== value.payload);
      }

      case "Mark_unread":
        return acc.map((mail) =>
          mail?.mId === value.payload.id
            ? { ...mail, unread: value.payload.unread }
            : mail
        );

      case "Mark_star":
        return acc.map((mail) =>
          mail.mId === value.payload.id
            ? { ...mail, isStarred: value.payload.starred }
            : mail
        );

      case "Mark_spam": {
        const mailToBeMarkedSpam = acc.find(
          (mail) => mail.mId === value.payload
        );
        setSpamMails((prev) => [...prev, mailToBeMarkedSpam]);
        return acc.filter((mail) => mail.mId !== value.payload);
      }

      case "Delete_mail_from_spam": {
        const mailToBeDeleted = spamMails.find(
          (mail) => mail.mId === value.payload
        );
        setTrashMails((prev) => [...prev, mailToBeDeleted]);
        setSpamMails((prev) =>
          prev.filter((mail) => mail.mId !== value.payload)
        );
        break;
      }

      case "Restore_mail": {
        const mailToBeRestored = mailsData.find(
          (mail) => mail.mId === value.payload
        );
        setTrashMails((prev) =>
          prev.filter((mail) => mail.mId !== value.payload)
        );
        return [...acc, mailToBeRestored];
      }

      default:
        console.log("Something went wrong !!");
        break;
    }

    return acc;
  };

  const [state, dispatch] = useReducer(MailReducer, mailsData);

  return (
    <MailContext.Provider
      value={{ mailsData, state, dispatch, trashMails, spamMails }}
    >
      {children}
    </MailContext.Provider>
  );
}
