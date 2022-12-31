import { ServicePage } from "../typings";

export const fetchService = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getService`);
  const data = await res.json();
  const service: ServicePage[] = data.service;

  return service;
};
