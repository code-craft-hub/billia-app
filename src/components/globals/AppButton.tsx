import Image from "next/image";
import { Button } from "../ui/button";

export const AppButton = ({
  title,
  service,
  img,
}: {
  title: string;
  service: string;
  img: string;
}) => {
  return (
    <Button className="bg-black hover:bg-gray-800 h-16 py-3 rounded-lg flex items-center space-x-2 max-w-[180px] w-full">
      <Image  width={132} height={132} src={img} alt="" className="size-10 shrink-0" />
      <p className="flex flex-col items-start">
        <span className="text-xs">{title}</span>
        <span className="font-medium text-md">{service}</span>
      </p>
    </Button>
  );
};