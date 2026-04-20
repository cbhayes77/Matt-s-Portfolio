import { ZapFast } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { FeatureTextLeft } from "./base-components/feature-text";

export const FeaturesSimpleIcons04 = () => {
    return (
        <section id="about" className="bg-primary py-16 scroll-mt-24 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-3">
                    <div className="max-w-3xl lg:col-span-1">
                        <FeaturedIcon icon={ZapFast} color="brand" size="xl" theme="light" className="hidden md:flex" />
                        <FeaturedIcon icon={ZapFast} color="brand" size="lg" theme="light" className="md:hidden" />

                        <h2 className="mt-5 text-display-sm font-semibold text-primary md:text-display-md">About Me</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            I partner with stakeholders, SMEs, and product owners to design engaging training that aligns directly to business goals like compliance, onboarding, and continuous development. I lead complex, enterprise-scale initiatives with a focus on quality, efficiency, and continuous improvement driven by learner feedback. I also drive innovation by improving systems, piloting new technologies, and equipping teams with scalable tools, templates, and coaching.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <ul className="grid w-full grid-cols-1 gap-x-16 gap-y-10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 md:gap-y-8 lg:grid-cols-2">
                            {[
                                {
                                    title: "Learning Design & Business Impact",
                                    subtitle: "I’m a Learning Experience Designer and Consultant who transforms complex content into scalable, engaging solutions that drive measurable business outcomes. I’ve led enterprise training initiatives across modalities, improving efficiency and reducing friction through innovations like streamlined workflows and test-out options.",
                                },
                                {
                                    title: "Solving Complex Problems Through Innovation & Technology",
                                    subtitle:
                                        "I specialize in solving complex challenges at the intersection of learning and technology, delivering practical, high-impact solutions. From modernizing legacy content to improving QA and introducing multimedia and process enhancements, I elevate quality, usability, and performance at scale.",
                                },
                                {
                                    title: "Strengthening Team & Stakeholder Confidence With Engagement & Collaboration",
                                    subtitle:
                                        "I’m a trusted partner to stakeholders and cross-functional teams, known for building strong relationships, driving alignment, and accelerating outcomes through collaboration and co-creation. I also coach others and help teams navigate ambiguity, contributing to high-quality, award-recognized work while strengthening team capability.",
                                },
                                {
                                    title: "Bringing Calm, Adaptability & Continuous Growth",
                                    subtitle: "I bring a calm, solutions-oriented mindset that helps create clarity and momentum in fast-paced environments. Known for reliability and adaptability, I continuously build new skills and improve processes to enhance team performance and learner impact.",
                                },
                                
                            ].map((item) => (
                                <li key={item.title}>
                                    <FeatureTextLeft title={item.title} subtitle={item.subtitle} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
