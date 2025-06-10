import { Progress } from "@/components/ui/progress";
import { Truck } from 'lucide-react';
const ProgressBar = () => {
  return (
    <div className="max-w-6xl mx-auto mt-4 md:mt-0 px-5">
      <div className="flex">
        <p className="text-2xl mr-3.5 font-bold text-black dark:text-white">48%</p>
        <Truck className=" mr-0.5 text-black dark:text-white size-[30px] md:size-[35px]" />
        <p className="text-xl md:text-2xl dark:text-white">Selcet your skip </p>
      </div>
      <Progress value={48} className="animate-fastPulse mt-1 dark:bg-slate-600" />

    </div>
  );
};

export default ProgressBar;
