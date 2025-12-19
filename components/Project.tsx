import { Github, ExternalLink } from 'lucide-react';

export function Project({ project }) {
    return (
        <div className="card flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <div className="font-semibold text-gray-900 leading-tight">{project.title}</div>
                
                <div className="flex gap-2 pl-4">
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            title="View GitHub Repo"
                        >
                            <Github size={14} />
                            GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            title="View Video Demo"
                        >
                            <ExternalLink size={14} />
                            Demo
                        </a>
                    )}
                </div>
            </div>

            <div className="text-xs text-gray-600 font-mono mb-2">{project.completed}</div>
            <p className="text-sm text-gray-600 mb-2 font-mono flex-1 leading-snug">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-gray-100">
                {project.tech.map((t, idx) => (
                    <span key={idx} className="capsule">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}