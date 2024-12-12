import { useContext } from "react";
import Authcontext from "../Authcontext/Authcontext";


const userAuth = () => {
    const context = useContext(Authcontext)
    return context
};

export default userAuth;