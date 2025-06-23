import Image from "next/image";

export const WhyWeStartedSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-b mb-6">
            Why We Started
          </h2>
          <p className="text-brown-b mb-6 leading-relaxed">
            We created Billia because we saw a real problem: people struggling
            with too many apps, missed bill dates, and unreliable payment
            platforms.
          </p>
          <p className="text-brown-b leading-relaxed">
            So we built one app that brings it all together — electricity,
            internet, school fees, airtime, and even a virtual dollar card. Add
            Billia AI, and you&rsquo;ve got the smartest payment experience
            available today.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            width={400}
            height={400}
            src="/assets/why-get-started.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
);
