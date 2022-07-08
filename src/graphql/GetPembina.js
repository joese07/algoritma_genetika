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
      kualitas
      nilai
    }
  }
`;

const useGetPembina = () => {
  const { data, loading, error } = useQuery(getPembina);
  return {
    data,
    loading,
    error,
  };
};

export default useGetPembina;
