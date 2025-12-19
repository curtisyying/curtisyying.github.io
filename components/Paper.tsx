interface Paper {
    title: string;
    authors: string;
    venue: string;
    pdf?: string;
    doi?: string;
    published?: boolean;
    highlight?: boolean;
}

export function Paper({ paper } : { paper: Paper }) {
    const cardStyle = paper.highlight 
        ? '!border-gray-400 ring-1 ring-gray-100' 
        : '';

    return (
        <div className={`card flex flex-col justify-between ${cardStyle}`}>
            <div>
                <div className="flex justify-between items-start gap-2">
                    <div className="font-semibold text-gray-900">{paper.title}</div>

                    {paper.published && (
                        <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
                            Published
                        </span>
                    )}
                </div>
                <div className="text-sm text-gray-600 mt-1">{paper.authors}</div>
                <div className="text-xs text-gray-500 font-mono mt-2 mb-3 italic">{paper.venue}</div>
            </div>
            
            <div className="flex gap-2 mt-2">
                {paper.pdf && (
                    <a href={paper.pdf} target="_blank" className="capsule hover:bg-gray-100 transition-colors cursor-pointer">
                        PDF
                    </a>
                )}
                {paper.doi && (
                    <a href={paper.doi} target="_blank" className="capsule hover:bg-gray-100 transition-colors cursor-pointer">
                        DOI
                    </a>
                )}
            </div>
        </div>
    );
}