type DataType = {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  revenue: number;
};

export const filterData = (data: DataType[], search: string) => {
  let newData;

  if (search) newData = searchData(data, search);

  return {
    filteredData: sliceArray(newData || data, 10),
    markers: newData || data
  };
};

export const searchData = (data: DataType[], search: string) => {
  return data.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
};

export const sliceArray = (arr: DataType[], quantity: number) => {
  return arr.reduce<DataType[][]>((array, item, index) => {
    const chunkIndex = Math.floor(index / quantity);

    if (!array[chunkIndex]) {
      array[chunkIndex] = [];
    }

    array[chunkIndex].push(item);

    return array;
  }, []);
};
