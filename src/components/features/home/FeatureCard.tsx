import { Card } from "@/components/ui/card";
import { IFeatures } from "@/types";
import Image from "next/image";

export const FeatureCard = ({ img, title, description, bg }: IFeatures) => (
    <Card
      className={`p-0 ${bg} border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 justify-between`}
    >
      <div className="space-y-4 px-4 pt-4 sm:px-8 sm:pt-8">
        <div>
          <h3 className="text-2xl font-semibold text-brown-b mb-2">{title}</h3>
          <p className="text-brown-b  leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Image width={250} height={250} src={img} alt="" />
      </div>
    </Card>
  )
