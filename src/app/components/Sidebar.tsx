import { Home, Users, Star, MessageCircle, LayoutDashboard, TrendingUp, Mail, Bell, MoreHorizontal } from 'lucide-react';
import imgSubtract from "figma:asset/eedd6777a342ee6980b7cbdff682ad44276edcc7.png";

export function Sidebar() {
  return (
    <aside className="hidden lg:block w-[336px] border-r bg-[#fafafa]">
      <nav className="sticky top-16 py-1">
        {/* Home with badges */}
        <div className="flex items-center py-1 px-5 rounded-lg mx-2 hover:bg-gray-100">
          <div className="w-4" />
          <button className="flex-1 flex items-center gap-2 py-2 rounded-lg text-sm">
            <Home className="size-4 text-gray-800" />
            <span className="flex-1 text-gray-800 text-sm">Home</span>
          </button>
          <div className="flex items-center gap-1">
            <div className="relative flex items-center justify-center size-8">
              <Mail className="size-4 text-gray-800" />
              <div className="absolute -top-0.5 -right-0.5 bg-[#c50f1f] text-white text-[10px] font-semibold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                20+
              </div>
            </div>
            <div className="relative flex items-center justify-center size-8">
              <Bell className="size-4 text-gray-800" />
              <div className="absolute -top-0.5 -right-0.5 bg-[#c50f1f] text-white text-[10px] font-semibold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                3
              </div>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center py-2 px-5 mx-2 rounded-lg hover:bg-gray-100">
          <div className="w-4" />
          <button className="flex-1 flex items-center gap-2 py-2 text-sm">
            <div className="size-5 rounded-full overflow-hidden">
              <img src={imgSubtract} alt="Mona Kane" className="size-full object-cover" />
            </div>
            <span className="flex-1 text-gray-800 text-sm text-left">Mona Kane</span>
          </button>
          <button className="size-6 flex items-center justify-center hover:bg-gray-200 rounded">
            <MoreHorizontal className="size-4 text-gray-600" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-4 px-5 my-2">
          <div className="h-px bg-gray-300" />
        </div>

        {/* Navigation Items */}
        <div className="space-y-0.5">
          <NavItem icon={Users} label="Communities" />
          <NavItem icon={Star} label="Leaders" />
          <NavItem icon={MessageCircle} label="Answers" />
          <NavItem icon={LayoutDashboard} label="Storylines" />
          <NavItem icon={TrendingUp} label="Analytics" />
        </div>

        {/* Divider */}
        <div className="h-4 px-5 my-2">
          <div className="h-px bg-gray-300" />
        </div>

        {/* Favorites Section */}
        <div className="px-5 py-2">
          <h3 className="text-sm font-semibold text-gray-800">Favorites</h3>
        </div>
      </nav>
    </aside>
  );
}

function NavItem({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center py-2 px-5 mx-2 rounded-lg hover:bg-gray-100">
      <div className="w-4" />
      <button className="flex-1 flex items-center gap-2 text-sm">
        <Icon className="size-4 text-gray-800" />
        <span className="text-gray-800 text-sm">{label}</span>
      </button>
    </div>
  );
}