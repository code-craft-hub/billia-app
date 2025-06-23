import { Button } from "@/components/ui/button";
import { billiaFeatures } from "@/constants";
import Image from "next/image";

export const AISection = () => (
  <section className="py-24">
    <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center rounded-3xl bg-cream-b ">
        <div className="flex justify-center order-2 lg:order-1 h-full ">
          <div className="place-self-end px-4">
            <Image width={300} height={300} src="/assets/build-ai.png" alt="" />
          </div>
        </div>
        <div className="space-y-6 order-1 lg:order-2 max-sm:p-8 max-lg:p-16 lg:my-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-brown-b">
            Introducing Billia AI: Smarter, Faster, Personal
          </h2>
          <p className="text-lg text-brown-b">
            From paying service bills to buying airtime or electricity, Billia
            AI makes every payment smarter, faster, and stress-free — just by
            asking.
          </p>

          <div className="space-y-3">
            {billiaFeatures.map((item, index) => (
              <div className="flex items-center space-x-3" key={index}>
                <div className="flex items-start">
                  <Image width={25} height={25} src={item.img} alt="" />
                </div>
                <span className="text-gray-700">{item.title}</span>
              </div>
            ))}
          </div>

          <Button className="bg-gradient-to-b from-pumpkin-b rounded-full to-scarlet-b hover:bg-orange-600 text-white px-8 py-3">
            Try It Now
          </Button>
        </div>
      </div>
    </div>
  </section>
)
