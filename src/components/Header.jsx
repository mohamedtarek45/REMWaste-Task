import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { Sun, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="flex justify-center items-center w-full relative ">
    
      <div className=" text-black dark:text-white flex flex-col justify-center items-center  space-y-[-15px]">
        <p className="text-[30px] lg:text-[40px] font-[800] font-[Montserrat]">
          REMWASTE
        </p>
        <p
          className="text-[14px] lg:text-[16px] font-[300] tracking-[3px] md:tracking-[8px] font-[Montserrat] "
        >
          WASTE MANAGEMENT
        </p>
      </div>
      <div className="absolute right-4">
        <div
          onClick={toggleTheme}
          className="rounded-full bg-white dark:bg-gray-900 p-2 flex items-center justify-center border-2 border-slate-300 dark:border-slate-800  hover:cursor-pointer hover:border-slate-400"
        >
          {theme === "light" ? (
            <MoonStar color="black" className="size-[16px] md:size-[24px]" />
          ) : (
            <Sun color="white" className="size-[16px] md:size-[24px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
