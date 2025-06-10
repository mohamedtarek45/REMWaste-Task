import { useSkips } from "@/api/skips.jsx";

import images from "@/assets/images";

import Card from "@/components/Card.jsx";
import Confirm from "@/components/Confirm.jsx";
import { useState } from "react";
const ProductCards = () => {
  const [selected, setSelected] = useState({ status: false, id: null });
  const { data, isPending } = useSkips();
  if (isPending)
    return (
      <div className="flex justify-center items-center w-full h-[500px]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  const index = data.findIndex((skip) => skip.id === selected.id);
  return (
    <div className="max-w-7xl m-auto my-9 mt flex flex-wrap justify-center md:justify-evenly gap-5 md:gap-y-9 px-6 ">
      {data.map((skip, i) => (
        <Card
          key={skip.id}
          image={images[i]}
          skip={skip}
          setSelected={setSelected}
          selected={selected}
        />
      ))}
      <Confirm selected={selected} skip={data[index]} />
    </div>
  );
};

export default ProductCards;
