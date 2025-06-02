import CV from "./CV";

export default function PreviewPanel({ headerData, experienceData, projectData }) {
    return (
        <>
            <section className="panel preview-panel">
                <CV headerData={headerData} experienceData={experienceData} projectData={projectData}/>
            </section>
        </>
    )
}