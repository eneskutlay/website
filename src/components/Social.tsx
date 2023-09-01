import React from "react";
import Image from "next/image";

interface SocialProps {
  socials: {
    href: string;
    imageSrc: string;
    imageAlt: string;
  }[];
}

const Account: React.FC<{
  href: string;
  imageSrc: string;
  imageAlt: string;
}> = ({ href, imageSrc, imageAlt }) => (
  <a
    href={href}
    className="p-3 rounded-[13px] hover:bg-neutral-50 dark:hover:bg-neutral-900 border-none text-neutral-400 dark:text-neutral-400"
  >
    <Image src={imageSrc} alt={imageAlt} width={22} height={22} />
  </a>
);

const Social: React.FC<SocialProps> = ({ socials }) => (
  <div className="flex -ml-2 mt-6 items-center">
    {socials.map((social) => (
      <Account key={social.href} {...social} />
    ))}
  </div>
);

export default Social;
