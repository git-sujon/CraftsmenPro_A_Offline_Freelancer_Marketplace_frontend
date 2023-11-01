import { useState, useEffect } from "react";
import axios from "axios";

const useGetUniqueFieldDataWithCount = (url: string, fieldName: string) => {
  const [fieldDataWithCount, setFieldDataWithCount] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        const allData = response?.data?.data;
        //@ts-ignore
        const uniqueFieldData = [
          //@ts-ignore
          ...new Set(allData.map((data) => data[fieldName])),
        ];

        // Calculate the total count for each unique field value
        const fieldDataWithCounts = uniqueFieldData.map((fieldValue) => ({
          fieldValue,
          //@ts-ignore
          totalCount: allData.filter((data) => data[fieldName] === fieldValue)
            .length,
        }));
        //@ts-ignore
        setFieldDataWithCount(fieldDataWithCounts);
        setIsLoading(false);
      } catch (error) {
        //@ts-ignore
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url,fieldName]);

  return { fieldDataWithCount, isLoading, error };
};

export default useGetUniqueFieldDataWithCount;
