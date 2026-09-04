import React from "react";
import pfp from "./assets/pfp.png";
import resume from "./assets/Resume.pdf";

const links = [
    { label: "Email", href: "mailto:atharv.v.agashe.25@dartmouth.edu", external: false },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/atharv-agashe", external: true },
    { label: "GitHub", href: "https://github.com/atharv656", external: true },
    { label: "Resume", href: resume, external: true },
];

class FrontPage extends React.Component {
    render() {
        return (
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6">
                <img
                    src={pfp}
                    alt="Atharv Agashe"
                    className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-lg shadow-blue-900/15"
                />
                <div className="text-center md:text-left max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1e3a5f]">
                        Atharv Agashe
                    </h1>
                    <p className="mt-2 text-lg text-[#1d4ed8]">
                        Software Engineer @ DraftKings
                    </p>
                    <p className="mt-4 text-[#2d4a6f] leading-relaxed">
                        CS & Math, Dartmouth '25. Building distributed systems,
                        agentic tooling, and high-throughput backend infrastructure.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                        {links.map(({ label, href, external }) => (
                            <a
                                key={label}
                                href={href}
                                {...(external && { target: "_blank", rel: "noreferrer" })}
                                className="text-[#1d4ed8] hover:text-[#1e3a8a] transition-colors text-sm font-medium underline underline-offset-4 decoration-[#93c5fd] hover:decoration-[#1d4ed8]"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontPage;
