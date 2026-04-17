import { Fragment } from "react";
import { Download02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroSplitImage02 = () => {
    return (
        <Fragment>
            <Header className="bg-primary" />
            <section className="relative bg-primary py-16 lg:flex lg:min-h-180 lg:items-center lg:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pr-8">
                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            I'm Matt Scaglione, eLearning Designer
                        </h1>
                        <p className="mt-4 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Strategic Learning Experience Designer with 15+ years of experience delivering scalable, high-quality training solutions aligned to business goals and impacting 50,000+ employees.
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="secondary" size="xl" iconLeading={Download02}>
                                Download My Resume
                            </Button>
                            <Button size="xl">View My Portfolio</Button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-16 h-70 w-full px-4 md:h-96 md:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
                    <img
                        className="size-full object-cover xl:absolute xl:inset-0 xl:-left-10 xl:w-[calc(100%+40px)] xl:max-w-none xl:[clip-path:polygon(10%_0%,_100%_0%,_100%_100%,_0%_100%)]"
                        src="/assets/images/Hero.png"
                        alt="Image by Good Faces at Unsplash.com"
                    />
                </div>
            </section>
        </Fragment>
    );
};
