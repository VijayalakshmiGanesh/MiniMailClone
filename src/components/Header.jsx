import { NavLink } from "react-router-dom";
import { MdMail, MdDelete, MdReport } from "react-icons/md";
import { useContext } from "react";
import { MailContext } from "../context/MailContext";

function HeaderLinks() {
  const { state, spamMails, trashMails } = useContext(MailContext);

  const activeLink = ({ isActive }) => ({
    color: isActive && "#e68815",
    backgroundColor: isActive && "#00008b",
    borderRadius: isActive && "5px",
    padding: "10px "
  });

  return (
    <nav className="navBar">
      <span>
        <NavLink to="/" style={activeLink}>
          <span style={{ color: "#a71666" }}>
            <MdMail />
          </span>
          Inbox <span className="mailsLength">{state?.length}</span>
        </NavLink>
      </span>
      <span>
        <NavLink to="/spam" style={activeLink}>
          <span style={{ color: "#a71666" }}>
            <MdReport />
          </span>
          Spam <span className="mailsLength">{spamMails?.length}</span>
        </NavLink>
      </span>
      <span>
        <NavLink to="/trash" style={activeLink}>
          <span style={{ color: "#a71666" }}>
            <MdDelete />
          </span>
          Trash <span className="mailsLength">{trashMails.length}</span>
        </NavLink>
      </span>
    </nav>

    // return (
    //   <div className="navBar">
    //     <NavLink to="/inbox" style={activeLink}>
    //       <span style={{ color: "#a71666" }}>
    //         <MdMail />
    //       </span>
    //       Inbox
    //     </NavLink>

    //     <NavLink to="/spam" style={activeLink}>
    //       <span style={{ color: "#a71666" }}>
    //         <MdReport />
    //       </span>
    //       Spam
    //     </NavLink>

    //     <NavLink to="/trash" style={activeLink}>
    //       <span style={{ color: "#a71666" }}>
    //         <MdDelete />
    //       </span>
    //       Trash
    //     </NavLink>
    //   </div>
  );
}

export default HeaderLinks;
