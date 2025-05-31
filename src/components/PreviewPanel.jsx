import CV from "./CV";

export default function PreviewPanel({ headerFields }) {
    return (
        <>
            <section className="panel preview-panel">
                <CV headerFields={headerFields}/>
            </section>
        </>
    )
}