import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router";
import useDataPembina from "../../../hooks/useDataPembina";
import useDataPembinaa from "../../../hooks/useDataPembinaa";
import Sidebar from "../../partials/Sidebar";

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

const updatePembina = gql`
  mutation Update(
    $tempat_lahir: String
    $tanggal_lahir: String
    $no_telepon: String
    $nama: String
    $jenis_kelamin: String
    $alamat_email: String
    $alamat1: String
    $_eq: Int
  ) {
    update_Data_Pembina(
      where: { id: { _eq: $_eq } }
      _set: {
        nama: $nama
        tempat_lahir: $tempat_lahir
        tanggal_lahir: $tanggal_lahir
        jenis_kelamin: $jenis_kelamin
        no_telepon: $no_telepon
        alamat_email: $alamat_email
        alamat: $alamat1
      }
    ) {
      affected_rows
    }
  }
`;

function EditPembina() {
  const [dataNama, setDataNama] = useState("");
  const [dataTempatLahir, setTempatLahir] = useState("");
  const [dataTanggalLahir, setTanggalLahir] = useState("");
  const [dataJenisKelamin, setJenisKelamin] = useState("");
  const [dataAlamat, setAlamat] = useState("");
  const [dataNoTelepon, setNoTelepon] = useState("");
  const [dataAlamatEmail, setAlamatEmail] = useState("");
  const { id } = useParams();

  const { error, loading, data } = useDataPembinaa(id);
  console.log({
    error,
    loading,
    data,
  });

  const [UpdatePembina, { loading: loadingupdate }] = useMutation(
    updatePembina,
    {
      refetchQueries: [getPembina],
    }
  );

  if (error) return <div>something went wrong</div>;
  if (loading) return <div>spiner</div>;
  const handleChangeNama = (e) => {
    setDataNama(e.target.value);
  };

  const handleChangeTempatLahir = (e) => {
    setTempatLahir(e.target.value);
  };

  const handleChangeTanggalLahir = (e) => {
    setTanggalLahir(e.target.value);
  };

  const handleChangeJenisKelamin = (e) => {
    setJenisKelamin(e.target.value);
  };

  const handleChangeAlamat = (e) => {
    setAlamat(e.target.value);
  };

  const handleChangeNoTelepon = (e) => {
    setNoTelepon(e.target.value);
  };

  const handleChangeAlamatEmail = (e) => {
    setAlamatEmail(e.target.value);
  };

  const handleClickSubmit = () => {
    UpdatePembina({
      variables: {
        nama: dataNama,
        tempat_lahir: dataTempatLahir,
        tanggal_lahir: dataTanggalLahir,
        jenis_kelamin: dataJenisKelamin,
        alamat_email: dataAlamatEmail,
        no_telepon: dataNoTelepon,
        alamat: dataAlamat,
      },
    });
  };
  return (
    <div>
      <main className="d-flex">
        <Sidebar />
        <div
          className="b-example-divider b-example-vr"
          style={{ height: 1000 }}
        />
        {data.Data_Pembina.map((pembina) => (
          <div className="container">
            <div className="mt-4 m-5">
              <h3>Daftar Pembina Baru</h3>
            </div>
            <div className="card m-5">
              <div className="card-body">
                <form onSubmit={handleClickSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="nama"
                      id="nama"
                      onChange={handleChangeNama}
                      value={pembina.nama}
                      required
                    />

                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Tempat Lahir
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="tempat_lahir"
                      placeholder={pembina.tempat_lahir}
                      onChange={handleChangeTempatLahir}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="tanggal_lahir"
                      placeholder={pembina.tanggal_lahir}
                      onChange={handleChangeTanggalLahir}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Jenis Kelamin
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      placeholder={handleChangeJenisKelamin}
                      value={pembina.jenis_kelamin}
                    >
                      <option selected>--Jenis Kelamin--</option>
                      <option value="laki - laki">Laki - Laki</option>
                      <option value="perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Alamat
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="alamat"
                      onChange={handleChangeAlamat}
                      placeholder={pembina.alamat}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      No Telepon
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="no_telepon"
                      onChange={handleChangeNoTelepon}
                      placeholder={pembina.no_telepon}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={handleChangeAlamatEmail}
                      placeholder={pembina.alamat_email}
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      required
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Dengan ini data yang saya masukkan telah benar dan sesuai
                      dengan data sebenarnya{" "}
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
export default EditPembina;
