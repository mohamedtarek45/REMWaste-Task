import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LandPlot, TriangleAlert } from "lucide-react";

const card = ({ image, skip, setSelected, selected }) => {
  const toggle = () => {
    setSelected((prev) => {
      if (skip.id === prev.id) {
        return { status: !prev.status, id: null };
      }
      return { status: true, id: skip.id };
    });
  };
  return (
    <Card
      className={`bg-white dark:bg-gray-900 max-w-96 w-full md:w-1/2 lg:w:-1/3 duration-100 border-2 outline-1 border-transparent hover:border-blue-300 hover:cursor-pointer hover:translate-y-[-10px] ${
        skip.id === selected.id &&
        "border-blue-600  hover:border-blue-600  translate-y-[-10px]"
      }`}
      onClick={() => toggle()}
    >
      <CardHeader className="flex flex-col">
        <div className="w-full h-[230px]">
          <img
            src={image}
            alt=""
            srcset=""
            className="max-w-[380px] w-full h-full "
          />
        </div>
        <CardTitle className={"dark:text-white text-[20px]"}>
          Size : {skip.size} Yard
        </CardTitle>
        <CardDescription className={"dark:text-slate-300"}>
          {skip.hire_period_days} day hire period
        </CardDescription>
      </CardHeader>
      {skip.allowed_on_road ? (
        <CardContent className="text-green-400 flex gap-x-2">
          <LandPlot /> <span>Allowed on road</span>
        </CardContent>
      ) : (
        <CardContent className="text-red-400 flex gap-x-2">
          <TriangleAlert /> <span>Not allowed on road</span>
        </CardContent>
      )}
      <CardContent>
        <p className="text-xl font-bold text-blue-600">
          £{skip.price_before_vat + (skip.vat / 100) * skip.price_before_vat}
        </p>
      </CardContent>
    </Card>
  );
};

export default card;
