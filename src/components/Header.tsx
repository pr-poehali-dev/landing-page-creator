import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <Icon name="Users" className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-rubik font-bold text-gray-900">
              CRM Pro
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Icon name="Bell" size={18} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Settings" size={18} />
            </Button>
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">А</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
