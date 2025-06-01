import { useState } from "react";
import { experienceInitialData } from "./experienceInitialData";

export default function ExperienceItems({ experienceData, onExperienceDelete, onExperienceChange, onExperienceAdd }) {
    const rootChildren = experienceData[0]?.childIds;

    return (
        <div className="experience-container">
            <button 
                className="btn btn-add"
                onClick={() => onExperienceAdd(0, "experience")} // Adding an experience to the root
            >
                + Add Experience
            </button>
            {rootChildren?.map((expIdx, expArrIdx) => (
                <ExperienceForm
                    key={expIdx}
                    expIdx={expIdx}
                    expArrIdx={expArrIdx}
                    experienceData={experienceData}
                    onExperienceDelete={onExperienceDelete}
                    onExperienceChange={onExperienceChange}
                    onExperienceAdd={onExperienceAdd}
                />
            ))}         
        </div>
    );
}

function ExperienceForm({ expIdx, expArrIdx, experienceData, onExperienceDelete, onExperienceChange, onExperienceAdd }) {
    const exp = experienceData[expIdx];

    const titleId = `exp${expIdx}-title`;
    const startDateId = `exp${expIdx}-startDate`;
    const endDateId = `exp${expIdx}-endDate`;
    const presentId = `exp${expIdx}-present`;
    const roleId = `exp${expIdx}-role`;
    const locationId = `exp${expIdx}-location`;

    return (
        <div className="experience exp__block">
            <div className="exp__header row">
                <h2>{`Experience ${expArrIdx + 1}`}</h2>
                <button 
                    className="btn btn-delete"
                    onClick={() => onExperienceDelete(expIdx)}
                >
                    Delete
                </button>
            </div>

            <label htmlFor={titleId}>Experience Title</label>
            <input type="text" value={exp.title} id={titleId} onChange={(e) => onExperienceChange(e, expIdx, "title")} />

            <label htmlFor={startDateId}>Start Date</label>
            <input type="month" value={exp.startDate} id={startDateId} onChange={(e) => onExperienceChange(e, expIdx, "startDate")} />

            <div className="endDate-inputs row">
                <div className="endDate-wrapper">
                    <label htmlFor={endDateId}>End Date</label>
                    <input
                        type="month"
                        value={exp.endDate}
                        id={endDateId}
                        onChange={(e) => onExperienceChange(e, expIdx, "endDate")}
                        disabled={exp.present}
                        inert={exp.present}
                    />
                </div>
                <div className="checkbox-wrapper">
                    <label htmlFor={presentId}>Present</label>
                    <input type="checkbox" checked={exp.present} id={presentId} onChange={(e) => onExperienceChange(e, expIdx, "present")}/>
                </div>
            </div>
            
            <label htmlFor={roleId}>Role</label>
            <input type="text" value={exp.role} id={roleId} onChange={(e) => onExperienceChange(e, expIdx, "role")} />

            <label htmlFor={locationId}>Location</label>
            <input type="text" value={exp.location} id={locationId} onChange={(e) => onExperienceChange(e, expIdx, "location")} />

            {
                <div className="achievements exp__block">
                    <div className="exp__header achievements-header row">
                        <h3>Achievements</h3>
                        <button 
                            className="btn btn-add"
                            onClick={() => onExperienceAdd(expIdx, "achievement")}
                        >
                            + Add Achievement
                        </button>
                    </div>

                    {exp.childIds.map((achIdx, achArrIdx) => (
                        <Achievement
                            key={achIdx}
                            achIdx={achIdx}
                            achArrIdx={achArrIdx}
                            experienceData={experienceData}
                            onExperienceDelete={onExperienceDelete}
                            onExperienceChange={onExperienceChange}
                            onExperienceAdd={onExperienceAdd}
                        />
                    ))}
                </div>
            }
        </div>
    );
}

function Achievement({ achIdx, achArrIdx, experienceData, onExperienceDelete, onExperienceChange, onExperienceAdd }) {
    const ach = experienceData[achIdx];
    const achId = `ach${achIdx}`;

    return (
        <div className="achievement exp__block">
            <div className="exp__header row">
                <label htmlFor={achId}>{`Achievement ${achArrIdx + 1}`}</label>
                <button 
                    className="btn btn-delete"
                    onClick={() => onExperienceDelete(achIdx)}
                >
                    Delete
                </button>
            </div>
            <textarea id={achId} value={ach.content} onChange={(e) => onExperienceChange(e, achIdx, "content")} rows={5} />

            {(
                <div className="achievement-descriptions exp__block">
                    <div className="exp__header row">
                        <h4>{`Achievement ${achArrIdx + 1} Descriptions`}</h4>
                        <button 
                            className="btn btn-add"
                            onClick={() => onExperienceAdd(achIdx, "description")}
                        >
                            + Add Description
                        </button>
                    </div>

                    {ach.childIds.map((achDescIdx, achDescArrIdx) => (
                        <AchievementDescription
                            key={achDescIdx}
                            achDescIdx={achDescIdx}
                            achDescArrIdx={achDescArrIdx}
                            experienceData={experienceData}
                            onExperienceDelete={onExperienceDelete}
                            onExperienceChange={onExperienceChange}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function AchievementDescription({ achDescIdx, achDescArrIdx, experienceData, onExperienceDelete, onExperienceChange }) {
    const achDesc = experienceData[achDescIdx];
    const achDescId = `achDesc${achDescIdx}`;

    return (
        <div className="achievement-description">
            <div className="exp__header row">
                <label htmlFor={achDescId}>{`Description ${achDescArrIdx + 1}`}</label>
                <button 
                    className="btn btn-delete"
                    onClick={() => onExperienceDelete(achDescIdx)}
                >
                    Delete
                </button>
            </div>
            <textarea id={achDescId} value={achDesc.content} onChange={(e) => onExperienceChange(e, achDescIdx, "content")} rows={5} />
        </div>
    );
}
