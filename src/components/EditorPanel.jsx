import { useState } from "react"
import AccordionItem from "./AccordionItem"
import TextInput from "./TextInput"
import ExperienceItems from "./ExperienceItem";

export default function EditorPanel({ headerData, onHeaderChange }) {
    const [activeIndex, setActiveIndex] = useState(null);

    function handleToggle(idx) {
        setActiveIndex(idx === activeIndex ? null : idx);
    }

    const accordionItems = [
        {
            title: "Header",
            className: "accordion-grid",
            content: headerData.map((f, idx) => 
                <TextInput
                    key={idx}
                    id={idx} 
                    label={f.label}
                    value={f.value}
                    required={f.required}
                    onType={(e) => onHeaderChange(e, idx)}
                />
            )
        },
        {
            title: "Experience",
            className: "",
            content: <ExperienceItems />
        },
    ]

    return (
        <aside className="panel editor-panel">
            <div className="accordion">
                {accordionItems.map((item, idx) => 
                    <AccordionItem 
                        key={idx}
                        title={item.title}
                        className={item.className}
                        isActive={activeIndex === idx}
                        onToggle={() => handleToggle(idx)}
                    >
                        {item.content}
                    </AccordionItem>
                )}                      
            </div>
        </aside>
    )
}