export default function NestedItems({ itemsData, onItemDelete, onItemChange, onItemAdd, itemName, subItemName }) {
    const rootChildren = itemsData[0]?.childIds;

    return (
        <div className="nested-container">
            <button 
                className="btn btn-add"
                onClick={() => onItemAdd(0, "item")}
            >
                + Add Item
            </button>
            {rootChildren?.map((itemIdx, itemArrIdx) => (
                <ItemForm
                    key={itemIdx}
                    itemIdx={itemIdx}
                    itemArrIdx={itemArrIdx}
                    itemsData={itemsData}
                    onItemDelete={onItemDelete}
                    onItemChange={onItemChange}
                    onItemAdd={onItemAdd}
                    itemName={itemName}
                    subItemName={subItemName}
                />
            ))}         
        </div>
    );
}

function ItemForm({ itemIdx, itemArrIdx, itemsData, onItemDelete, onItemChange, onItemAdd, itemName, subItemName }) {
    const item = itemsData[itemIdx];

    const titleId = `item${itemIdx}-title`;
    const startDateId = `item${itemIdx}-startDate`;
    const endDateId = `item${itemIdx}-endDate`;
    const presentId = `item${itemIdx}-present`;
    const roleId = `item${itemIdx}-role`;
    const locationId = `item${itemIdx}-location`;

    return (
        <div className="item block">
            <div className="block__header row">
                <h2>{`${itemName} ${itemArrIdx + 1}`}</h2>
                <button className="btn btn-delete" onClick={() => onItemDelete(itemIdx)}>Delete</button>
            </div>

            <label htmlFor={titleId}>Title</label>
            <input type="text" value={item.title} id={titleId} onChange={(e) => onItemChange(e, itemIdx, "title")} />

            <label htmlFor={startDateId}>Start Date</label>
            <input type="month" value={item.startDate} id={startDateId} onChange={(e) => onItemChange(e, itemIdx, "startDate")} />

            <div className="endDate-inputs row">
                <div className="endDate-wrapper">
                    <label htmlFor={endDateId}>End Date</label>
                    <input
                        type="month"
                        value={item.endDate}
                        id={endDateId}
                        onChange={(e) => onItemChange(e, itemIdx, "endDate")}
                        disabled={item.present}
                        inert={item.present}
                    />
                </div>
                <div className="checkbox-wrapper">
                    <label htmlFor={presentId}>Present</label>
                    <input type="checkbox" checked={item.present} id={presentId} onChange={(e) => onItemChange(e, itemIdx, "present")} />
                </div>
            </div>

            <label htmlFor={roleId}>Role</label>
            <input type="text" value={item.role} id={roleId} onChange={(e) => onItemChange(e, itemIdx, "role")} />

            <label htmlFor={locationId}>Location</label>
            <input type="text" value={item.location} id={locationId} onChange={(e) => onItemChange(e, itemIdx, "location")} />

            <div className="sub-items block">
                <div className="block__header sub-items-header row">
                    <h3>{subItemName + 's'}</h3>
                    <button className="btn btn-add" onClick={() => onItemAdd(itemIdx, "subitem")}>
                        + Add {subItemName}
                    </button>
                </div>

                {item.childIds.map((subIdx, subArrIdx) => (
                    <SubItem
                        key={subIdx}
                        subIdx={subIdx}
                        subArrIdx={subArrIdx}
                        itemsData={itemsData}
                        onItemDelete={onItemDelete}
                        onItemChange={onItemChange}
                        onItemAdd={onItemAdd}
                        itemName={itemName}
                        subItemName={subItemName}
                    />
                ))}
            </div>
        </div>
    );
}

function SubItem({ subIdx, subArrIdx, itemsData, onItemDelete, onItemChange, onItemAdd, subItemName }) {
    const sub = itemsData[subIdx];
    const subId = `sub${subIdx}`;

    return (
        <div className="sub-item block">
            <div className="block__header row">
                <label htmlFor={subId}>{`${subItemName} ${subArrIdx + 1}`}</label>
                <button className="btn btn-delete" onClick={() => onItemDelete(subIdx)}>Delete</button>
            </div>
            <textarea id={subId} value={sub.content} onChange={(e) => onItemChange(e, subIdx, "content")} rows={5} />

            <div className="sub-sub-items block">
                <div className="block__header row">
                    <h4>{`${subItemName} ${subArrIdx + 1} Descriptions`}</h4>
                    <button className="btn btn-add" onClick={() => onItemAdd(subIdx, "subsubitem")}>
                        + Add Description
                    </button>
                </div>

                {sub.childIds.map((descIdx, descArrIdx) => (
                    <SubSubItem
                        key={descIdx}
                        descIdx={descIdx}
                        descArrIdx={descArrIdx}
                        itemsData={itemsData}
                        onItemDelete={onItemDelete}
                        onItemChange={onItemChange}
                    />
                ))}
            </div>
        </div>
    );
}

function SubSubItem({ descIdx, descArrIdx, itemsData, onItemDelete, onItemChange }) {
    const desc = itemsData[descIdx];
    const descId = `desc${descIdx}`;

    return (
        <div className="sub-sub-item">
            <div className="block__header row">
                <label htmlFor={descId}>{`Description ${descArrIdx + 1}`}</label>
                <button className="btn btn-delete" onClick={() => onItemDelete(descIdx)}>Delete</button>
            </div>
            <textarea id={descId} value={desc.content} onChange={(e) => onItemChange(e, descIdx, "content")} rows={5} />
        </div>
    );
}
