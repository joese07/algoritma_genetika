import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import useGetLokasi from "../../../graphql/GetLokasi";

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

const insertPembina = gql`
  mutation InsertPembina(
    $alamat: String
    $alamat_email: String
    $jenis_kelamin: String
    $nama: String
    $no_telepon: String
    $tanggal_lahir: String
    $tempat_lahir: String
    $lokasi: String
    $kualitas: String
    $nilai: Int
  ) {
    insert_Data_Pembina(
      objects: {
        nama: $nama
        tempat_lahir: $tempat_lahir
        tanggal_lahir: $tanggal_lahir
        jenis_kelamin: $jenis_kelamin
        alamat: $alamat
        no_telepon: $no_telepon
        alamat_email: $alamat_email
        lokasi: $lokasi
        kualitas: $kualitas
        nilai: $nilai
      }
    ) {
      affected_rows
    }
  }
`;

function CreatePembina() {
  const [dataNama, setDataNama] = useState("");
  const [dataTempatLahir, setTempatLahir] = useState("");
  const [dataTanggalLahir, setTanggalLahir] = useState("");
  const [dataJenisKelamin, setJenisKelamin] = useState("");
  const [dataAlamat, setAlamat] = useState("");
  const [dataNoTelepon, setNoTelepon] = useState("");
  const [dataAlamatEmail, setAlamatEmail] = useState("");
  const [dataKualitas, setKualitas] = useState("");
  const [dataLokasi, setLokasi] = useState("");
  const [nilai, setNilai] = useState();

  const { data: dataPembina } = useQuery(getPembina);
  console.log(dataPembina);
  console.log(getPembina);

  const { data: queryLokasi } = useGetLokasi();
  const dataQueryLokasi = queryLokasi.Data_Lokasi;

  const [InsertPembina, { loading, data }] = useMutation(insertPembina, {
    refetchQueries: [getPembina],
  });

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

  const handleKualitas = (e) => {
    setKualitas(e.target.value);

    let hasil;
    if (e.target.value === "Kurang") {
      hasil = 1;
    } else {
      hasil = 0;
    }

    setNilai(hasil);
  };

  const handleLokasi = (e) => {
    setLokasi(e.target.value);
  };

  const handleClickSubmit = () => {
    InsertPembina({
      variables: {
        nama: dataNama,
        tempat_lahir: dataTempatLahir,
        tanggal_lahir: dataTanggalLahir,
        jenis_kelamin: dataJenisKelamin,
        alamat_email: dataAlamatEmail,
        no_telepon: dataNoTelepon,
        alamat: dataAlamat,
        lokasi: dataLokasi,
        kualitas: dataKualitas,
        nilai: nilai,
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (data) return <p>Data berhasil disimpan</p>;

  console.log(nilai);
  console.log(dataKualitas);
  console.log(dataNama);

  return (
    <div>
      <main className="d-flex">
        <div className="container">
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
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Tempat Lahir
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="tempat_lahir"
                    onChange={handleChangeTempatLahir}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="tanggal_lahir"
                    onChange={handleChangeTanggalLahir}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Jenis Kelamin
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleChangeJenisKelamin}
                  >
                    <option selected>--Jenis Kelamin--</option>
                    <option value="laki - laki">Laki - Laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Alamat
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="alamat"
                    onChange={handleChangeAlamat}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    No Telepon
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="tanggal_lahir"
                    onChange={handleChangeNoTelepon}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleChangeAlamatEmail}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kualitas</label>
                  <select
                    className="form-select"
                    onChange={handleKualitas}
                    id="lokasi"
                    name="lokasi"
                  >
                    <option selected>Choose...</option>
                    <option value="Kurang">Kurang</option>
                    <option value="Baik">Baik</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Lokasi</label>
                  <select
                    className="form-select"
                    onChange={handleLokasi}
                    id="lokasi"
                    name="lokasi"
                  >
                    <option selected>Choose...</option>{" "}
                    {dataQueryLokasi.map((data) => (
                      <option value={data.nama_lokasi}>
                        {data.nama_lokasi}
                      </option>
                    ))}
                  </select>
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
      </main>
    </div>
  );
}
export default CreatePembina;
