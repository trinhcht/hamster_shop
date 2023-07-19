import React from "react";
import { Item } from "./Item";
import "./index.css";

export const Slider = () => {
    return (
        <div class="slider">
            <ul>
                <Item></Item>
            </ul>
            <div class="prev">&lt;</div>
            <div class="next">&gt;</div>
        </div>
    );
};

export default Slider;
