import { gql, useQuery } from "@apollo/client"

const getShift = gql `
query MyQuery {
    Data_Shift {
      id
      kode_shift
      nama_shift
      waktu_mulai
      waktu_selesai
      lokasi
    }
  }`;

  const useGetShift = () =>{
    const { data, loading, error} = useQuery(getShift);

    const dataGraphql = getShift;
    return {
        data,
        loading,
        error,
        dataGraphql
    }
  }

  export default useGetShift;