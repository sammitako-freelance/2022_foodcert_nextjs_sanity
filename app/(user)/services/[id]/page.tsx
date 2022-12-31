import React from "react";
import About from "../../../../components/services/About";
import { fetchService } from "../../../../libs/fetchService";

type Props = {};

export default async function Service(props: Props) {
  const service = await fetchService();
  return <About service={service} />;
}
