import { Search, Bell, Settings, HelpCircle, Grid3X3 } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 group">
            <Grid3X3 className="size-5 text-gray-700 transition-colors group-hover:text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">Viva Engage</span>
          </button>
        </div>

        {/* Center Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Viva Engage"
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-5" />
            <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="size-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="size-5" />
          </Button>
          <div className="ml-2 size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
        </div>
      </div>
    </header>
  );
}
