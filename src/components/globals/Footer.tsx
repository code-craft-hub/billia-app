import { footerLinks } from "@/constants";
import Image from "next/image";
import { memo } from "react";

export const Footer = memo(() => {
  return (
    <footer className="bg-blend-pattern py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="space-y-4 col-span-3">
            <div className="flex items-center space-x-2">
              <Image width={100} height={100} src="/assets/footer-logo.svg" alt="Billia logo" />
            </div>
            <p className="text-orange-100 text-sm max-w-[250px]">
              Get set to pay bills, airtime, internet, and purchase your
              favorite subscriptions to make your life easier.
            </p>
            <div className="">
              <Image width={80} height={80}
                src="/assets/all-socials.svg"
                alt="social media account links"
              />
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-orange-100 hover:text-white transition-colors text-sm break-all"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t-[1px] border-white mt-12 pt-8 text-center flex flex-col sm:flex-row justify-between">
          <p className="text-orange-100 text-sm">
            © 2024 Billia Technologies. All rights reserved.
          </p>
          <p className="text-orange-100 text-sm">
            Product of Shoreblitz Technologies Limited
          </p>
        </div>
      </div>
    </footer>
  );
});
