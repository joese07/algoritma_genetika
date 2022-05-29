import { gql, useQuery } from "@apollo/client";

const getPembinaSatu = gql`
query MyQuery($id: Int!) {
    Data_Pembina(where: {id: {_eq: $id}}) {
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


const useDataPembinaa = (id) => {
    const {error, loading, data } = useQuery(getPembinaSatu,{
        variables:{
            id
        }
    });
    return{
        data, error, loading
    }

};

export default useDataPembinaa;