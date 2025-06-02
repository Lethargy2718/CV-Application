import { useState } from "react"
import AccordionItem from "./AccordionItem"
import TextInput from "./TextInput"
import NestedItems from "./NestedItems";

export default function EditorPanel({ headerData, onHeaderChange, experienceData, projectData, onItemDelete, onItemChange, onItemAdd }) {
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
                <NestedItems
                    itemsData={experienceData}
                    onItemDelete={(toDeleteId) => onItemDelete("experience", toDeleteId)}
                    onItemChange={(e, id, field) => onItemChange("experience", e, id, field)}
                    onItemAdd={(parentId, itemLevel) => onItemAdd("experience", parentId, itemLevel)}
                    itemName={"Experience"}
                    subItemName={"Detail"}
                />
        },
        {
            title: "Projects",
            className: "",
            content: 
                <NestedItems
                    itemsData={projectData}
                    onItemDelete={(toDeleteId) => onItemDelete("project", toDeleteId)}
                    onItemChange={(e, id, field) => onItemChange("project", e, id, field)}
                    onItemAdd={(parentId, itemLevel) => onItemAdd("project", parentId, itemLevel)}
                    itemName={"Project"}
                    subItemName={"Detail"}
                />
        },
        {
            title: "Skills",
            className: "",
            content: <></>
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