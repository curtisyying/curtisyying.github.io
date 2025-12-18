export default function Section({ title, children }) {
    return (
        <section className="mb-10">
            <h2 className="text-lg font-semibold border-b pb-1 mb-3">
                {title}
            </h2>
            {children}
        </section>
    );
}