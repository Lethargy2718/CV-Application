import CV from "./CV";

export default function PreviewPanel({ headerData }) {
    return (
        <>
            <section className="panel preview-panel">
                <CV headerData={headerData}/>
            </section>
        </>
    )
}