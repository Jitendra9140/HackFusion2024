"use client"
import React, { useState } from 'react'
import Hero from "@/components/main/Hero";
import Theme from "@/components/main/Theme";
import Timeline from "@/components/main/Timeline";;
import Teams from '@/components/main/Teams';
import FaqAccordion from '@/components/main/Faq';
import Prize from '@/components/main/Prize';
import Sponser from '@/components/main/Sponser';
import Timer from '@/components/main/Timer';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5">
        <Hero />
        {/* <Timer/> */}
        <Timeline/>
        <Theme  />
        <Prize />
        <Sponser/>
        <Teams/>
        <FaqAccordion/>
      </div>
    </main>
  );
}
