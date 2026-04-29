import { useState } from "react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { HomeSidebar } from "../components/sidebar/home-sidebar";

type Section = "usuario" | "fondos";

export function Home() {
  const [activeSection, setActiveSection] = useState<Section>("usuario");

  return (
    <SidebarProvider>
      <HomeSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <SidebarInset>
        <header className="flex items-center gap-2 p-4 border-b">
          <SidebarTrigger />
          <h1 className="text-sm font-semibold capitalize">{activeSection}</h1>
        </header>

        <main className="p-6">
          {activeSection === "usuario" && <div>Próximamente...</div>}
          {activeSection === "fondos" && <div>Próximamente...</div>}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
