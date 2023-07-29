import { Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

export const Slider = (props) => {
    const { children, interval = 1000 } = props;
    const silderRef = useRef(null);
    const ulRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const amoutDisplay = 5;

    const getOffsetWidthOfElelement = () => {
        const offsetWidth = ulRef.current.children[0].offsetWidth;
        const length = ulRef.current.children.length;
        return { offsetWidth, length };
    }

    const handlePrev = () => {
        const { offsetWidth, length } = getOffsetWidthOfElelement();
        const newCurrentIndex = (currentIndex - 1 + length) % (length - amoutDisplay);
        ulRef.current.style.transform = `translateX(-${newCurrentIndex * offsetWidth}px)`;
        setCurrentIndex(newCurrentIndex);
    }

    const handleNext = () => {
        const { offsetWidth, length } = getOffsetWidthOfElelement();
        const newCurrentIndex = (currentIndex + 1) % (length - amoutDisplay);
        ulRef.current.style.transform = `translateX(-${newCurrentIndex * offsetWidth}px)`;
        setCurrentIndex(newCurrentIndex);
    }

    useEffect(() => {
        const { offsetWidth, length } = getOffsetWidthOfElelement();
        ulRef.current.style.width = `${offsetWidth * length}px`;
        silderRef.current.style.width = `${offsetWidth * amoutDisplay + 20}px`;
    }, [])

    return (
        <div className="container-slider">
            <Space align="center" size="small">
                <div class="prev" onClick={handlePrev}>&lt;</div>
                <div class="slider" ref={silderRef}>
                    <ul ref={ulRef}>
                        {children}
                    </ul>
                </div>
                <div class="next" onClick={handleNext}>&gt;</div>
            </Space>
        </div>
    );
};

export default Slider;