export function Paper({ paper }) {
    return (
        <div className="card flex flex-col justify-between">
            <div>
                <div className="font-semibold text-gray-900">{paper.title}</div>
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