import Image from 'next/image';

type Job = {
    company: string;
    role: string;
    date: string;
    description: string;
    logo: string;
};

export const Experience = ({ job }: { job: Job }) => {
    return (
        <div className="flex gap-4 items-start group">

            <div className="relative w-12 h-12 flex-shrink-0 mt-1">
                <Image 
                src={job.logo} 
                alt={`${job.company} logo`}
                fill
                className="object-contain rounded-md border border-gray-100 bg-white"
                />
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">{job.role}</h3>
                    <span className="text-s text-gray-500 font-mono whitespace-nowrap ml-4 shrink-0 mt-0.5">{job.date}</span>
                </div>
                
                <p className="text-sm font-medium text-gray-700 mb-2 font-mono">{job.company}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed font-mono">
                    {job.description}
                </p>
            </div>
        </div>
    );
};