import { ReactNode } from 'react';

interface Section {
    title: string;
    children: ReactNode;
}

export default function Section({ title, children } : Section) {
    return (
        <section className="mb-10">
            <h2 className="text-lg font-semibold border-b pb-1 mb-3">
                {title}
            </h2>
            {children}
        </section>
    );
}