import * as React from "react";
interface BoxItemProps {
    label: string;
    subLabel?: string;
    value: string;
    grayValue: boolean;
    children?: React.ReactNode
}

const BoxItem = (props: BoxItemProps) => (<div className="box-item">
    <div className="box-item__label-container">
        <span className="box-item__label">{props.label}</span>
        {props.subLabel && <span className="box-item__sub-label">{props.subLabel}</span>}
    </div>
    <div className={"box-item__value " + (props.grayValue ? "box-item__value--gray" : "")}>{props.value}</div>
</div>);
export default BoxItem