import React from "react";
import PropsObjVal from "./R020_PropsObjVal";

function App() {
    return (
        <div className="App">
            <PropsObjVal ObjectJson={{ react: "리액트", twohundred: "200" }} />
        </div>
    );
}

export default App;
