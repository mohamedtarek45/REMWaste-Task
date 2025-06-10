import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MoveRight } from "lucide-react";

const Confirm = ({ selected, skip }) => {
  console.log("skip", skip);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={!selected.status}
          className={`${
            selected.status && "animate-RightBounce"
          } fixed bottom-12 right-12 rounded-2xl flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer`}
        >
          <span className="leading-none text-lg">Continue</span>
          <MoveRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[510px] w-full bg:white dark:bg-gray-900 border-0">
        <DialogHeader>
          <DialogTitle className={"dark:text-white text-lg"}>Confirm your skip</DialogTitle>
          <DialogDescription>
            <p className="text-sm dark:text-slate-300">
              Imagery and information shown throughout this website may not
              reflect the exact shape or size specification, colours may vary,
              options and/or accessories may be featured at additional cost.
            </p>
            <div className="flex gap-x-2 dark:text-white">
              <p className="text-base">{skip?.size} Yard Skip</p>
              <p className="text-xl text-blue-500">
                £
                {skip?.price_before_vat +
                  (skip?.vat / 100) * skip?.price_before_vat}
              </p>
              <p className="text-base">{skip?.hire_period_days} day hire period</p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className={"hover:cursor-pointer dark:text-white"}>
              Cancel
            </Button>
          </DialogClose>
          <Button className={"bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Confirm;
