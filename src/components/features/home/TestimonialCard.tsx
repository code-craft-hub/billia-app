import { Card } from "@/components/ui/card";
import { ITestimonials } from "@/types";
import Image from "next/image";

export const TestimonialCard = ({
  name,
  comment,
  content,
  rating,
  date,
  img,
}: ITestimonials) => {
  return (
    <Card className="p-6 bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12  rounded-full flex items-center justify-center text-white font-semibold">
              <Image width={90} height={90} src={img} alt="" />
            </div>
            <div>
              <div className="font-semibold text-brown-b">{name}</div>
              <div className="text-sm text-gray-500">{comment}</div>
            </div>
          </div>
          <div className="size-8">
            <Image width={90} height={90} src="/assets/quote.svg" alt="" />
          </div>
        </div>
        <p className="text-brown-b leading-relaxed text-start">{content}</p>
        <div className="flex justify-between">
          <p className="text-sm">{date}</p>
          <div className="text-sm flex justify-center items-center ">
            <div className="size-3 mr-1">
              <Image
                width={90}
                height={90}
                src="/assets/star.svg"
                alt=""
                className="size-4"
              />
            </div>
            {rating}
            <span className="text-gray-400">/5.0</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
