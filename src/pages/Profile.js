import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
    return <h1> PROFILE, user is: {props.username} <ChangeProfile setUsername={props.setUsername}/></h1>;
  };