export default function AccordionItem({ title, children, isActive = false, onToggle, className }) {
    const titleID = `accordion-title-${crypto.randomUUID()}`;
    const contentID = `accordion-content-${crypto.randomUUID()}`;
    return (        
        <div className="accordion-item">
            <h2 id={titleID}>
                <button className="accordion-trigger" aria-expanded={isActive} aria-controls={contentID} onClick={onToggle}>
                {title}
                </button>
            </h2>
            <div className="accordion-content" role="region" aria-labelledby={titleID} aria-hidden={!isActive} id={contentID}>
                <div className={`${className}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
