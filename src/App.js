import React from "react";
import PropsBoolean from "./R019_PropsBoolean";

function App() {
    return (
        <div className="App">
            <PropsBoolean BooleanTrueFalse={false} />
            <PropsBoolean BooleanTrueFalse />
        </div>
    );
}

export default App;
