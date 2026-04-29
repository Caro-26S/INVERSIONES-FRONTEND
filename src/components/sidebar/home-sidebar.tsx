import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

type Section = "usuario" | "fondos";

const items: { label: string; key: Section }[] = [
  { label: "Usuario", key: "usuario" },
  { label: "Fondos", key: "fondos" },
];

interface HomeSidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function HomeSidebar({
  activeSection,
  onSectionChange,
}: HomeSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <span className="font-bold uppercase tracking-widest text-sm px-2">
          Portafolio
        </span>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.key}>
              <SidebarMenuButton
                isActive={activeSection === item.key}
                onClick={() => onSectionChange(item.key)}
              >
                {item.label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
