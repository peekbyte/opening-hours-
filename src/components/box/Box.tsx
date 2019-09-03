import * as React from "react";
const logo = require("../../assets/images/clock.svg") as string;

interface BoxProps { title: string; children: React.ReactNode }

const Box = (props: BoxProps) => (<div className="box">
    <div className="box__header">
        <img className="box__header-icon" src={logo}></img>
        <h1 className="box__header-title">{props.title}</h1> </div>
    <div className="box__body">{props.children}</div>
</div>);
export default Box