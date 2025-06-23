import { features } from "@/constants";
import { FeatureCard } from "./FeatureCard";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brown-b mb-4">
            Everything You Need to Pay Smarter
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="">
          <Card
            className={`bg-hero border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 grid sm:grid-cols-2 items-center justify-center p-8 `}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-brown-b mb-2">
                  Virtual Dollar Card
                </h3>
                <p className="text-brown-b  leading-relaxed">
                  Pay worldwide with your own secure virtual dollar card —
                  perfect for subscriptions and online payments.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                width={250}
                height={250}
                src={"/assets/virtual-dollar-acc.png"}
                alt=""
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
