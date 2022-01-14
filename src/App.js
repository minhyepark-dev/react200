import React from "react";
import PropsDatatype from "./R018_PropsDatatype";

function App() {
    return (
        <div className="App">
            <PropsDatatype
                String="react"
                Number={200}
                Boolean={1 == 1}
                Array={[0, 1, 8]}
                ObjectJson={{ react: "리액트", twohundred: "200" }}
                Function={console.log("FunctionProps: function!")}
            />
        </div>
    );
}

export default App;
