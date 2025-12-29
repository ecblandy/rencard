// Icons
import { Palette, User, LucideIcon } from "lucide-react";

// Components
import Button from "../ui/button";

// Types
import { NavButtonsProfile } from "@/types/nav-buttons-profile";

type TabButtons = {
  name: string;
  tab: NavButtonsProfile;
  icon: LucideIcon;
};

const tabButtons: TabButtons[] = [
  {
    name: "Aparência",
    tab: "appearance",
    icon: Palette,
  },

  {
    name: "Informações básicas",
    tab: "basic-information",
    icon: User,
  },
  {
    name: "Redes sociais",
    tab: "social-media",
    icon: User,
  },
  {
    name: "Botões",
    tab: "actions",
    icon: User,
  },
  {
    name: "Portfólio",
    tab: "portfolio",
    icon: User,
  },
  {
    name: "Musíca",
    tab: "music",
    icon: User,
  },
];

interface ActionButtonProfileProps {
  setCurrentProfileTab: (tab: NavButtonsProfile) => void;
  currentTab: NavButtonsProfile;
}

export default function ActionButtonProfile({
  setCurrentProfileTab,
  currentTab,
}: ActionButtonProfileProps) {
  return (
    <div className="flex flex-col gap-[1rem]">
      {tabButtons.map(({ name, tab, icon: Icon }, index) => {
        const activeTab = tab === currentTab;
        console.log(tab)
        const notActiveStyle = "bg-white border border-neutral-extra-soft";
        return (
          <Button
            key={index}
            variant={activeTab ? "default" : "custom"}
            sizeH="md"
            onClick={() => setCurrentProfileTab(tab)}
            className={`flex items-center gap-[.5rem] w-[13.5625rem] whitespace-nowrap text-start ${
              activeTab ? "" : notActiveStyle
            }`}
          >
            <Icon />
            {name}
          </Button>
        );
      })}
    </div>
  );
}
