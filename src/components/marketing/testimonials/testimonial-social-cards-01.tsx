
const reviews = [
    {
        id: "review-01",
        quote: "Matt partnered with my scrum team to design, develop, and maintain learning experiences that increased customer ease, quality, and efficiency, and contributed to measurable business results.",
    },
    {
        id: "review-02",
        quote: "Matt has deep technical experience in our processes, tools, and design work. He leads the creation of tech-enabled learning experiences that are personalized, clear, and effective.",
    },
    {
        id: "review-03",
        quote: "Matt has a proven ability to work in close conjunction with stakeholders, business owners, SMEs, and peers, increasing buy-in and confidence while helping projects move faster.",
    },
    {
        id: "review-04",
        quote: "Matt delivers the right outcomes and makes effective decisions daily. He prioritizes the right tasks, ensures deadlines are met, and is a reliable, supportive teammate.",
    },
    {
        id: "review-05",
        quote: "Matt is adept at stepping into work already in progress and contributes significantly to the team's ability to respond nimbly to aggressive and uncertain timelines.",
    },
    {
        id: "review-06",
        quote: "Matt takes and implements performance feedback well. He is receptive to coaching and a pleasure to problem-solve with.",
    },
];

export const TestimonialSocialCards01 = () => {
    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h1 className="text-display-sm font-semibold text-primary lg:text-display-md">What People Say About Me</h1>
                <p className="text-lg text-tertiary lg:text-xl">Hear first-hand from my clients, bosses, and colleagues about their experiences working with me.</p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 px-4 lg:grid-cols-2 lg:gap-6 lg:px-8">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="flex flex-col gap-12 rounded-xl bg-primary_alt p-6 shadow-xs ring-1 ring-secondary lg:min-h-32 lg:justify-between lg:gap-0 lg:p-8"
                    >
                        <div className="flex flex-col items-start gap-3">
                            <blockquote className="text-lg font-medium text-primary lg:text-xl">&ldquo;{review.quote}&rdquo;</blockquote>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
