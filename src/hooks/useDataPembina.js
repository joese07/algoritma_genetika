import { gql, useQuery } from "@apollo/client";

const getPembina = gql`
  query MyQuery {
    Data_Pembina {
      id
      nama
      tempat_lahir
      tanggal_lahir
      jenis_kelamin
      alamat_email
      no_telepon
      alamat
    }
  }
`;


const useDataPembina = () => {
    const {error, loading, data } = useQuery(getPembina);
    return{
        error,
        loading,
        data,
    }

}

export default useDataPembina;