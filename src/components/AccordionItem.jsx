import { useId } from "react";

export default function AccordionItem({ title, children, isActive = false, onToggle, className }) {
    const id = useId();
    const titleID = `accordion-title-${id}`;
    const contentID = `accordion-content-${id}`;
    return (        
        <div className="accordion-item">
            <h2 id={titleID}>
                <button className="accordion-trigger" aria-expanded={isActive} aria-controls={contentID} onClick={onToggle}>
                {title}
                </button>
            </h2>
            <div className="accordion-content" role="region" aria-labelledby={titleID} aria-hidden={!isActive} id={contentID} inert={!isActive}>
                <div className={`${className}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
