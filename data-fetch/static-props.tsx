import { dreadlocksServices, braidsAndTwistsServices } from "../data";

export const getServiceProps = (params, isDreadlocks) => {
  const services = isDreadlocks ? dreadlocksServices : braidsAndTwistsServices;
  const service = services.find((obj) => obj.id === params["service-id"]);
  return { props: { service: JSON.parse(JSON.stringify(service)) } };
};
