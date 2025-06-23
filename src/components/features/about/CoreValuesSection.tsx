import { Card } from "@/components/ui/card";
import { coreValues } from "@/constants";
import Image from "next/image";

export const CoreValuesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brown-b  mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              className={`${value.bgColor} border-0 shadow-sm hover:shadow-md transition-shadow duration-200 p-0`}
            >
              <div className="pt-8 px-8">
                <h3 className="text-2xl font-bold text-brown-b mb-3">
                  {value.title}
                </h3>
                <p className="text-brown-b leading-relaxed">
                  {value.description}
                </p>
              </div>
              <div className="w-fit ml-auto">
                <Image src={value.img}  width={100} height={100} alt="" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
