import {gql, useQuery} from "@apollo/client";

const getLokasi = gql `
query MyQuery {
    Data_Lokasi {
      id
      kode_lokasi
      nama_lokasi
      alamat
    }
  }`;

const useGetLokasi = () =>{
    const {data, loading, error} = useQuery(getLokasi);
    const dataGraphql = getLokasi;
    return{
        data,
        loading,
        error,
        dataGraphql
    }
}

export default useGetLokasi;