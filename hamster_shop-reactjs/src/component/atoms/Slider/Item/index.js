import React from "react";

export const Item = (props) => {
    const { children } = props;
    return <li>{children}</li>;
};

export default Item;
