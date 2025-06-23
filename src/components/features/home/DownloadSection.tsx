import { AppButton } from "@/components/globals/AppButton";
import Image from "next/image";

export const DownloadSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-hero rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 p-8 lg:p-12 lg:my-34">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown-b">
              Download Billia Today
            </h2>
            <p className="text-lg text-brown-b">
              Fast payments, smart reminders, and secure wallet tools — all
              inside Billia.
            </p>

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
          </div>

          <div className="relative z-10 transform rotate-0 hover:rotate-1 transition-transform duration-500 h-full items-end flex">
            <Image
              width={400}
              height={400}
              src="/assets/double-phone.png"
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
