import { NavButtonsProfile } from "@/types/nav-buttons-profile";
import AppearanceCard from "./appearance-card";
import BasicInformationCard from "./basic-information-card";

import MusicPreview from "./music-card";
import SocialMediaCard from "./social-media-card";
import ActionButtonCard from "./action-button-card";

interface RenderTabProfileProps {
  currentTab: NavButtonsProfile;
}

export default function RenderTabProfile({
  currentTab,
}: RenderTabProfileProps) {
  const tabContent: Record<NavButtonsProfile, React.JSX.Element | null> = {
    appearance: <AppearanceCard />,
    "basic-information": <BasicInformationCard />,
    "social-media": <SocialMediaCard />,
    actions: <ActionButtonCard />,
    portfolio: null,
    music: <MusicPreview />,
    "profile-form": null,
    resume: null,
    settings: null,
  };

  return <div>{tabContent[currentTab]}</div>;
}
