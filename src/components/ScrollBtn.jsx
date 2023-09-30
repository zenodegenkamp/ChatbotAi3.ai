import React from "react";

export default function ScrollBtn({ storyContainerRef, buttonText }) {
    const scrollToContent = () => {
        console.log(storyContainerRef)
        storyContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <button className="scroll-button" onClick={scrollToContent}>
            {buttonText}
        </button>
    )
}
