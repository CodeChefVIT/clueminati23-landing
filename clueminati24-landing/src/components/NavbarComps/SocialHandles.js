import React from "react";
import Image from "next/image";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";
import githubmark from "../../assets/githubmark.svg";
import twitter from "../../assets/twitter.svg";

const SocialHandles = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <a target="_blank" rel="noopener" href="https://github.com/CodeChefVIT">
        <Image src={githubmark} alt="img" className="h-8 w-8" />
      </a>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.instagram.com/codechefvit"
      >
        <Image src={insta} alt="img" className="h-8 w-8" />
      </a>
      <a target="_blank" rel="noopener" href="https://twitter.com/codechefvit">
        <Image src={twitter} alt="img" className="h-8 w-8" />
      </a>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/"
      >
        <Image src={linkedin} alt="img" className="h-8 w-8" />
      </a>
    </div>
  );
};

export default SocialHandles;
