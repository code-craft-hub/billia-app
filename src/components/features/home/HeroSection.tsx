import { AppButton } from "@/components/globals/AppButton";
import Image from "next/image";

export const HeroSection =() => {
  return (
    <section className="relative overflow-hidden bg-hero pt-24 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center">
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <div className="">
                <p className="text-pumpkin-b">
                  One App. Every Payment. Zero Stress
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brown-b leading-tight">
                  Simplify Every Payment
                  <br />
                  <span className="">With One Powerful App</span>
                </h1>
              </div>
              <p className="text-lg text-brown-b max-w-xl">
                Billia lets you pay bills, top up airtime, buy data and manage
                your wallet — all in one place. Fast. Secure. Reliable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AppButton
                title="GET IT ON"
                service="Google Play"
                img="/assets/playstore.svg"
              />
              <AppButton
                title="Download on the"
                service="App Store"
                img="/assets/Apple.svg"
              />
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="">
                <Image width={90} height={90} src="/assets/people.png" alt="people" />
              </div>
              <span className="text-sm text-brown-b font-medium">
                Join 50,000+ beginners making payments smarter every day
              </span>
            </div>
          </div>

          <div className="relative z-10 transform rotate-0 hover:rotate-2 transition-transform duration-500 lg:col-span-5">
            <Image width={500} height={500} src="/assets/phone.png" alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
}
