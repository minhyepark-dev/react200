import React, { Component } from "react";

class R033_ReturnMap extends Component {
    // 기존코드
    // render() {
    //     const element_Array = [<li>react</li>, <li>200</li>, <li>Array map</li>];
    //     return <ul>{element_Array.map((array_val) => array_val)}</ul>;
    // }
    // 수정코드 =>  unique "key" prop 오류 해결
    render() {
        const element_Array = ["react", 200, "Array map"];
        return (
            <ul>
                {element_Array.map((array_val, index) => (
                    <li key={index}>{array_val}</li>
                ))}
            </ul>
        );
    }
}

export default R033_ReturnMap;
