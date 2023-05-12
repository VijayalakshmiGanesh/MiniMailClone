import { useContext, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

import { useParams } from "react-router-dom";
import { MailContext } from "../context/MailContext";

function ViewMail() {
  const { mailID } = useParams();
  const { mailsData, dispatch } = useContext(MailContext);

  const handleClick = () => {
    window.history.back();
  };
  const { subject, content, sender, from } = mailsData?.find(
    (mail) => mail.mId === mailID
  );

  useEffect(() => {
    dispatch({
      type: "Mark_unread",
      payload: { id: mailID, unread: false }
    });
  }, []);

  return (
    <>
      <h2 style={{ marginTop: 0 }}>View mail</h2>

      <div className="mailContent">
        <h3 className="subject_in_viewpage">{subject}</h3>
        <p>
          From: {sender} <span style={{ color: "gray" }}>&lt;{from}&gt;</span>
        </p>
        <p>
          To: Me <span style={{ color: "gray" }}>&lt;xyz@gmail.com&gt;</span>
        </p>
        <p>
          <br />
        </p>
        <p> {ReactHtmlParser(content)}</p>
      </div>
      <button onClick={handleClick} className="link_in_viewpage">
        Go Back
      </button>
    </>
  );
}

export default ViewMail;
