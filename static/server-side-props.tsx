export const getQueryParamsFromCalendly = ({ query }) => {
  return {
    props: {
      ...query,
    },
  };
};
