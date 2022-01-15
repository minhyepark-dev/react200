import React from "react";
import { Consumer } from "./R076_ContextApi";

class contextChildren2 extends React.Component {
    render() {
        return <Consumer>{(value) => <h3>{`contextValue : ${value}`}</h3>}</Consumer>;
    }
}
export default contextChildren2;
