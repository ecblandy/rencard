"use client";
import { NavButtonsProfile } from "@/types/nav-buttons-profile";
import { useState } from "react";

export function useProfileNav() {
  const [currentProfileTab, setCurrentProfileTab] =
    useState<NavButtonsProfile>("appearance");

  return { currentProfileTab, setCurrentProfileTab };
}
