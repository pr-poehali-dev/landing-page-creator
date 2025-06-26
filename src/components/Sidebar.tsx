import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Дашборд", icon: "BarChart3" },
    { id: "clients", label: "Клиенты", icon: "Users" },
    { id: "deals", label: "Сделки", icon: "TrendingUp" },
    { id: "add-lead", label: "Добавить лид", icon: "UserPlus" },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-100 h-[calc(100vh-4rem)]">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                  activeTab === item.id
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
              >
                <Icon
                  name={item.icon as any}
                  size={20}
                  className={
                    activeTab === item.id ? "text-white" : "text-gray-500"
                  }
                />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
