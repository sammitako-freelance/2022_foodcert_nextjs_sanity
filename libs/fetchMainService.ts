import { MainService } from "../typings";

export const fetchMainService = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getMainService`
  );
  const data = await res.json();
  const service: MainService[] = data.service;

  return service;
};
