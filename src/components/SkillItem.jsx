export default function SkillItems({ skillData, onItemDelete, onItemChange, onItemAdd }) {
    const rootChildren = skillData[0]?.childIds;

    return (
        <div className="nested-container">
            <button 
                className="btn btn-add"
                onClick={() => onItemAdd(0, "skill")}
            >
                + Add Skill Category
            </button>

            {rootChildren?.map((itemIdx, itemArrIdx) => (
                <SkillCategory
                    key={itemIdx}
                    itemIdx={itemIdx}
                    itemArrIdx={itemArrIdx}
                    skillData={skillData}
                    onItemDelete={onItemDelete}
                    onItemChange={onItemChange}
                    onItemAdd={onItemAdd}
                />
            ))}
        </div>
    );
}

function SkillCategory({ itemIdx, itemArrIdx, skillData, onItemDelete, onItemChange, onItemAdd }) {
    const item = skillData[itemIdx];
    const categoryId = `skill-category-${itemIdx}`;

    return (
        <div className="item block">
            <div className="block__header row">
                <label htmlFor={categoryId}>{`Skill Category ${itemArrIdx + 1}`}</label>
                <button className="btn btn-delete" onClick={() => onItemDelete(itemIdx)}>Delete</button>
            </div>
            <input
                type="text"
                id={categoryId}
                value={item.category}
                onChange={(e) => onItemChange(e, itemIdx, "category")}
            />

            <div className="sub-items block">
                <div className="block__header sub-items-header row">
                    <h3>Skills</h3>
                    <button className="btn btn-add" onClick={() => onItemAdd(itemIdx, "skillItem")}>
                        + Add Skill
                    </button>
                </div>

                {item.childIds.map((subItemIdx, subItemArrIdx) => {
                    const subItemId = `skill-${subItemIdx}`;
                    return (
                        <div className="sub-item" key={subItemIdx}>
                            <div className="block__header row">
                                <label htmlFor={subItemId}>{`Skill ${subItemArrIdx + 1}`}</label>
                                <button className="btn btn-delete" onClick={() => onItemDelete(subItemIdx)}>Delete</button>
                            </div>
                            <input
                                type="text"
                                id={subItemId}
                                value={skillData[subItemIdx].content}
                                onChange={(e) => onItemChange(e, subItemIdx, "content")}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}