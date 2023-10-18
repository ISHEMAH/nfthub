import { MouseEventHandler } from "react";

export interface MyButtonProps {
    title:string;
    type?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    containerStyles?:string;

}