import React, { useRef } from "react";

export const Item = (props) => {
    const { children } = props;
    const itemRef = useRef(null);
    return (
        <li className="slider-item" ref={itemRef}>{children}</li>
    );
};

export default Item;
