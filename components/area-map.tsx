import AreaCovered from "@/assets/covered-areas.png";
import Image from "next/image";
import React from "react";
export default function AreaMap() {
  return (
    <div className="mt-10">
      <div className="w-full h-[400px]">
        <Image
          src={AreaCovered}
          alt="Map showing areas covered"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
