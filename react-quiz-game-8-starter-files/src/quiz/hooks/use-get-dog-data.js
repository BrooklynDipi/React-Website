import { useEffect, useState } from "react";
import getDogs from "../../demos/get-dogs";

function useGetDogData(numDogs){

    const [dogFetch, setDogFetch] = useState({
      isLoading: true,
      errorMessage: "",
      data: null,
    });
  
    useEffect(() => {
      async function fetchDogs() {
        // Initialize the state!
        setDogFetch({
          isLoading: true,
          errorMessage: "",
          data: null,
        });
  
        try {
          const images = await getDogs(numDogs);
          setDogFetch({
            isLoading: false,
            errorMessage: "",
            data: images,
          });
        } catch (err) {
          setDogFetch({
            isLoading: false,
            errorMessage: "Something went wrong loading the doggos. Please try again later.",
            data: null,
          });
        }
      }
      fetchDogs();
    }, [numDogs]);
  
    const { isLoading, errorMessage, data } = dogFetch;
    return { isLoading, errorMessage, data };
};

export default useGetDogData;