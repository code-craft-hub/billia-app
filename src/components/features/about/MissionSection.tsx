import Image from "next/image";

export const MissionVisionSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <Image  width={400} height={400} src="/assets/our-mission.png" alt="" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-b mb-8 text-start">
            Our Mission & Vision
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-brown-b mb-3">
                Mission:
              </h3>
              <p className="text-brown-b leading-relaxed">
                To make bill payments effortless, intelligent, and accessible
                for everyone across Nigeria — no matter their background or tech
                level.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brown-b mb-3">
                Vision:
              </h3>
              <p className="text-brown-b leading-relaxed">
                A future where anyone can manage their financial life from one
                simple, secure platform — powered by smart automation and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
