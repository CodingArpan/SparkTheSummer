"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank">
    <Icon
      className="w-7 h-7 text-white transition ease-in-out delay-150 
        hover:scale-125 duration-300"
    />
  </a>
);

const HumansCard = ({
  index,
  name,
  role,
  profilepic,
  linkedin,
  instagram,
  github,
}) => {
  const defaultGradient =
    "radial-gradient(100% at center, #363636 100%, #1A1A1A 27%)";

  return (
    <>
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
          y: index % 3 === 1 ? 20 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <div
          className="flex flex-col gap-3 w-[260px] shadow text-white"
          style={{ background: defaultGradient }}
        >
          <Image
            src={profilepic}
            className="outline-none w-[260px] h-[320px]"
            placeholder="blur"
            alt="Profile Picture"
          />

          <div className="w-full flex flex-col gap-2 rounded-b-[8px] p-1">
            <p className="sm:text-2xl text-xl text-white">{name}</p>
            <p className="text-[#D1CAC7] sm:text-xl text-lg leading-9 font-[Inter]">
              {role}
            </p>
            <div className="flex gap-6 py-2">
              <SocialMediaIcon href={linkedin} Icon={LinkedInLogoIcon} />
              <SocialMediaIcon href={instagram} Icon={InstagramLogoIcon} />
              <SocialMediaIcon href={github} Icon={GitHubLogoIcon} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HumansCard;
