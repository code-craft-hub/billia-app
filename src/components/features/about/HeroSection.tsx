import Image from "next/image";

export const HeroSection = () => (
  <section className="bg-hero py-12 md:py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex justify-center">
          <Image  width={400} height={400} src="/assets/about-us-hero-girl.png" alt="" />
        </div>

        <div className="order-2 lg:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brown-b mb-6 leading-tight">
            Reimagining How Nigerians Pay, One Bill at a Time
          </h1>
          <p className="text-lg text-brown-b mb-8 leading-relaxed">
            At Billia, we&aptos;re building more than just a payment app — we&aptos;re
            creating a smarter, simpler way for everyday Nigerians to stay
            connected, pay their bills, and take control of their financial
            lives.
          </p>
        </div>
      </div>
    </div>
  </section>
);
