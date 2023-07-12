import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../Api";

function Search({onSearchChangeHandle}) {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}?maxPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.country}`
            }
          })
        }
      })
      .catch((err) => console.log(err));
  };

  const onChangeHandle = (newValue) => {
    setSearchValue(newValue)
    onSearchChangeHandle(newValue)
  };

  return (
    <AsyncPaginate
      className=" w-96"
      placeholder="Enter your city"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandle}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
