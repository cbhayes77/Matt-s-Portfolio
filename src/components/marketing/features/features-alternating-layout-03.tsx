import { ChartBreakoutSquare, MessageChatCircle, ZapFast } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

export const FeaturesAlternatingLayout03 = () => {
    return (
        <section id="portfolio" className="flex scroll-mt-24 flex-col gap-12 overflow-hidden bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">My Portfolio</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        A selection of work demonstrating how I turn complex learning challenges into engaging, scalable, and high-impact experiences.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={MessageChatCircle} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Innovative Audio-Visual Learning Design</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Transformed complex FINRA regulations into engaging, audio-driven role-play videos using dynamic animation, boosting comprehension
                            and influencing cross-team adoption.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Designed and produced six interactive role-play videos to simplify a new FINRA regulation for Financial Advisors.",
                                "Upskilled with After Effects to create dynamic, audio-synced animations, increasing engagement and comprehension in a previously dense topic.",
                                "Delivered content in a format that supported multitasking learners, aligning with learner preferences for audio-based learning.",
                                "Achieved cross-team recognition for innovative approach, mentoring other designers to recreate this method.",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Button
                                href="https://share.articulate.com/dq0qg4a7Kz4FvMjPqKItx#/lessons/_R3ZmwVfveo6j5CvbBsO1pGPazsANB0_"
                                target="_blank"
                                rel="noreferrer noopener"
                                size="md"
                            >
                                View Project
                            </Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 w-screen flex-1 bg-tertiary px-4 py-6 md:ml-0 md:min-h-128 md:w-full md:overflow-hidden md:p-0 lg:overflow-visible">
                        <div className="top-0 left-0 bg-tertiary md:absolute md:h-full md:w-screen lg:overflow-hidden">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Innovative-Audio-Visual-Learning-Design.png"
                                className="top-12 left-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Innovative-Audio-Visual-Learning-Design.png"
                                className="top-12 left-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ChartBreakoutSquare} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Adaptive Learning Design with Test-Out Options</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Introduced adaptive “test-out” pathways that reduced redundancy, improved learner experience, and scaled across continuing education
                            programs.{" "}
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Designed and implemented test-out options to allow learners to bypass known content",
                                "Addressed frustration from repeated annual training while maintaining regulatory compliance",
                                "Developed multiple branching prototypes in Storyline, including full bypass and section-based paths",
                                "Enabled personalized progression based on learner knowledge and performance",
                                "Generated strong positive feedback and drove broader adoption across courses the following year",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Button
                                href="https://share.articulate.com/dq0qg4a7Kz4FvMjPqKItx#/lessons/VhSBuIWGrTnUg1jpw1LHLF8VsStu-6CS"
                                target="_blank"
                                rel="noreferrer noopener"
                                size="md"
                            >
                                View Project
                            </Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 right-0 h-full bg-tertiary md:absolute md:w-screen lg:overflow-hidden">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Adaptive-Learning-Design-with-Test-Out-Options.png"
                                className="top-12 right-12 w-full rounded object-cover object-top-left ring-4 ring-screen-mockup-border md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Adaptive-Learning-Design-with-Test-Out-Options.png"
                                className="top-12 right-12 w-full rounded object-cover object-top-left ring-4 ring-screen-mockup-border not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Engaging Recap for Training Continuity</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Designed a concise, timeline-driven montage that helped financial advisors quickly regain context and maintain continuity between
                            training sessions.{" "}
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Designed and developed a montage video in Storyline to bridge gaps between training sessions",
                                "Used a roadmap-style timeline with a moving marker to visualize progression over time",
                                "Simplified complex life events into clear, milestone-based storytelling",
                                "Enabled financial advisors to quickly get up to speed without additional training time",
                                "Improved learning continuity and efficiency across periodic training experiences",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Button
                                href="https://share.articulate.com/dq0qg4a7Kz4FvMjPqKItx#/lessons/o-yalw1XfAwweBkROXEvWVXt13B-wt5U"
                                target="_blank"
                                rel="noreferrer noopener"
                                size="md"
                            >
                                View Project
                            </Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 w-screen flex-1 bg-tertiary px-4 py-6 md:ml-0 md:min-h-128 md:w-full md:overflow-hidden md:p-0 lg:overflow-visible">
                        <div className="top-0 left-0 bg-tertiary md:absolute md:h-full md:w-screen lg:overflow-hidden">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Engaging-Recap-for-Training-Continuity.png"
                                className="top-12 left-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Engaging-Recap-for-Training-Continuity.png"
                                className="top-12 left-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ZapFast} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Interactive Scenario for Quick Decision Making</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Created a game-inspired, high-pressure scenario that improved engagement by simulating real-time decision-making.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Designed an interactive branching scenario in Storyline using timeline triggers",
                                "Prototyped a ‘Quick Time Event’ (QTE) experience inspired by gaming mechanics",
                                "Enabled learners to practice rapid decision-making in a safe, simulated environment",
                                "Used pressure-based interactions to increase realism and engagement",
                                "Created a dynamic, choose-your-own-adventure experience to explore complex content in an immersive way",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Button
                                href="https://share.articulate.com/dq0qg4a7Kz4FvMjPqKItx#/lessons/1zdkF6V0A_Mms9a1rcD_AxUfY1xcOTos"
                                target="_blank"
                                rel="noreferrer noopener"
                                size="md"
                            >
                                View Project
                            </Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 right-0 h-full bg-tertiary md:absolute md:w-screen lg:overflow-hidden">
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Interactive-Scenario-for-Quick-Decision-Making.png"
                                className="top-12 right-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Interactive-Scenario-for-Quick-Decision-Making.png"
                                className="top-12 right-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ZapFast} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Empowering Others Through Skill Developement</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Built and delivered a hands-on Storyline upskilling program that enabled designers to confidently create and publish interactive
                            courses.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Designed and delivered a 3-week Storyline upskilling program for Instructional Designers",
                                "Structured learning progression from animations and layers to variables and interactive triggers",
                                "Combined hands-on exercises with real-world examples to reinforce application",
                                "Enabled designers to independently create and publish Storyline courses",
                                "Increased team confidence and capability through practical skill development",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Button
                                href="https://share.articulate.com/dq0qg4a7Kz4FvMjPqKItx#/lessons/4e3WPgNaejuVstv8GjKpPZ3U1DwlP4N8"
                                target="_blank"
                                rel="noreferrer noopener"
                                size="md"
                            >
                                View Project
                            </Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 w-screen flex-1 bg-tertiary px-4 py-6 md:ml-0 md:min-h-128 md:w-full md:overflow-hidden md:p-0 lg:overflow-visible">
                        <div className="top-0 left-0 bg-tertiary md:absolute md:h-full md:w-screen lg:overflow-hidden">
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Empowering-Others-Through-Skill-Developement.png"
                                className="top-12 left-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Empowering-Others-Through-Skill-Developement.png"
                                className="top-12 left-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ZapFast} color="brand" size="lg" theme="light" />

                        <h2 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">
                            {" "}
                            Personal Growth - My After Effects Upskilling Journey
                        </h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Self-directed After Effects journey that translated new skills into practical, high-impact learning experiences.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Self-directed After Effects upskilling journey to enhance learning content creation",
                                "Applied each new concept through real-world, work-relevant projects",
                                "Created a range of assets including animated text, infographics, presentation intros, and a lyric video",
                                "Built progressively toward a capstone explainer video demonstrating advanced capabilities",
                                "Inspired peer adoption, influencing a coworker to create training based on the approach",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Button
                                href="https://share.articulate.com/dq0qg4a7Kz4FvMjPqKItx#/lessons/hHhCGPX7yWpY46GEdT61bwYqPg5JWxew"
                                target="_blank"
                                rel="noreferrer noopener"
                                size="md"
                            >
                                View Project
                            </Button>
                        </div>
                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 right-0 h-full bg-tertiary md:absolute md:w-screen lg:overflow-hidden">
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Personal-Growth-My-After-Effects-Upskilling-Journey.png"
                                className="top-12 right-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/assets/images/Personal-Growth-My-After-Effects-Upskilling-Journey.png"
                                className="top-12 right-12 w-full rounded object-contain object-top-left ring-4 ring-screen-mockup-border not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
