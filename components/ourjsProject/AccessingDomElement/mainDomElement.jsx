import React, {useEffect, useRef,useState} from 'react';

function MainDomElement(props) {
    const ref = useRef(null)


    useEffect(() => {
        if (ref.current) {
            const text = ref.current.innerText;
            const words = text.split(" ");

            const formattedText = words.map((word) => {
                if (word.length > 3) {
                    return `<span class="text-red-500">${word}</span>`;
                }
                return word;
            }).join(" ");

            ref.current.innerHTML = formattedText;
        }
    }, []);

    return (
        <>
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Text Highlighting Demo</h2>
                <div ref={ref} className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid architecto cupiditate dignissimos distinctio dolorem
                    error fugiat, illum inventore labore laudantium neque quod
                    sint tempora, totam ut veritatis voluptates!
                </div>
            </div>
        </>
    );
}

export default MainDomElement;