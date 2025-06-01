import { useState } from "react"
import AccordionItem from "./AccordionItem"
import TextInput from "./TextInput"
import ExperienceItems from "./ExperienceItems";

export default function EditorPanel({ headerData, onHeaderChange, experienceData, onExperienceDelete, onExperienceChange, onExperienceAdd }) {
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
            content: 
                <ExperienceItems
                    experienceData={experienceData}
                    onExperienceDelete={onExperienceDelete}
                    onExperienceChange={onExperienceChange}
                    onExperienceAdd={onExperienceAdd}
                />
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