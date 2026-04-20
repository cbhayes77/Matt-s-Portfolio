import { Download02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const CTASimpleCenteredBrand = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">Contact Me </h2>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        <Button
                            color="secondary"
                            size="xl"
                            iconLeading={Download02}
                            className="shadow-xs! ring-0"
                            href="/assets/Matt%20Scaglione%20Resume.pdf"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Download My Resume
                        </Button>
                        <Button size="xl" href="mailto:mattscags@hotmail.com">
                            Email Me
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
