import Image from "next/image";
import React from "react";

export default function Flame() {
  return (
    <div className="absolute w-[137px] h-[137px]">
      <div className="absolute top-[-24px] left-[-24px]">
        <Image
          src="/svg/outer-flame.svg"
          alt="flame"
          width={137}
          height={137}
        />
        <Image
          src="/svg/inner-flame.svg"
          alt="flame"
          width={91}
          height={91}
          className="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    </div>
  );
}
