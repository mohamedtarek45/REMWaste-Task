import { useQuery } from "@tanstack/react-query";

export const useSkips = () => {
  async function getSkips() {
    const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
    const data = await response.json();
    return data;
  }
  const {data,isPending,isError}=useQuery({queryKey:['skips'],queryFn:getSkips});
  return {data,isPending,isError};
};