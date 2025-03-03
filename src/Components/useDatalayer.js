import { useEffect } from 'react';

const useDataLayer = (event, data) => {
  useEffect(() => {
    window.dataLayer.push({ event, ...data });
  }, [event, data]);
};

export default useDataLayer;
