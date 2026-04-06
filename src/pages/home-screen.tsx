import { HeroSplitImage02 } from "@/components/marketing/header-section/hero-split-image-02";
import { FeaturesSimpleIcons04 } from "@/components/marketing/features/features-simple-icons-04";
import { FeaturesAlternatingLayout03 } from "@/components/marketing/features/features-alternating-layout-03";
import { TestimonialCard } from "@/components/marketing/testimonials/testimonial-card";
import { CTASimpleCenteredBrand } from "@/components/marketing/cta/cta-simple-centered-brand";

export const HomeScreen = () => {
    return (
        <>
            <HeroSplitImage02></HeroSplitImage02>
            <FeaturesSimpleIcons04></FeaturesSimpleIcons04>
            <FeaturesAlternatingLayout03></FeaturesAlternatingLayout03>
            <TestimonialCard></TestimonialCard>
            <CTASimpleCenteredBrand></CTASimpleCenteredBrand>
        </>
    );
};
