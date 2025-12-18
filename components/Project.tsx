export function Project({ project }) {
    return (
        <div className="card flex flex-col">
            <div className="font-semibold text-gray-900">{project.title}</div>
            <div className="text-sm text-gray-600 font-mono mb-3">{project.subtitle}</div>
            
            <ul className="list-disc ml-5 text-sm text-gray-600 mb-4 font-mono space-y-1 flex-1">
                {project.impact.map((i, idx) => (
                    <li key={idx}>{i}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                {project.tech.map((t, idx) => (
                    <span key={idx} className="capsule">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}