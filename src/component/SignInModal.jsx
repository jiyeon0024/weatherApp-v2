import "./SignInModal.css";
import TextInput from "./TextInput";
import Button from "./Button";

function SignInModal(props) {
  return (
    <div className="modalWrap">
      <div className="contentBox">
        <p className="closeBtn" onClick={props.closeModal}>
          X
        </p>
        <h3 className="title">Sign in</h3>
        <div className="infoWrap">
          <p className="info">Name</p>
          <TextInput className={"modalInput"} placeholder={"Enter name"} />
          <p className="info">Email address</p>
          <TextInput className={"modalInput"} placeholder={"Enter email"} />
          <p className="info">Password</p>
          <TextInput className={"modalInput"} placeholder={"Enter password"} />
        </div>
        <Button className="modalBtn">Submit</Button>
      </div>
    </div>
  );
}

export default SignInModal;
