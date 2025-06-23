import { AppButton } from "@/components/globals/AppButton";

export const DownloadSection = () => (
  <section className="py-16 md:py-24 ">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-xl md:text-4xl font-bold mb-12">
        Ready to simplify your bills?
        <br />
        Download Billia and experience the smarter way to pay.
      </h2>

      <div className="flex flex-col items-center sm:flex-row gap-4 mx-auto w-fit">
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
  </section>
)