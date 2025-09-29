"use client";
// import Image from "next/image";
import { useState } from "react";
import HeroSlider from "../component/HeroSlider";

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <HeroSlider />
      <HeroSlider />
    </div>
  );
}
