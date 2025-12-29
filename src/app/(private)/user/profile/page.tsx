"use client";

import PageHeader from "@/components/dashboard/page-header";
import ActionButtonProfile from "@/components/user/action-button-profile";
import PreviewCard from "@/components/user/preview-card";
import RenderTabProfile from "@/components/user/render-tab-profile";
import { useProfileNav } from "@/hook/use-profile-nav";

export default function ProfilePage() {
  const { currentProfileTab, setCurrentProfileTab } = useProfileNav();

  return (
    <div>
      <PageHeader
        title="Personalizar Perfil"
        description="Configure cada detalhe do seu cartão digital."
      />
      <div className="flex gap-[3.375rem] mt-[2.5rem] ">
        <ActionButtonProfile
          currentTab={currentProfileTab}
          setCurrentProfileTab={setCurrentProfileTab}
        />
        <RenderTabProfile currentTab={currentProfileTab} />

        <PreviewCard />
      </div>
    </div>
  );
}
