function EditShift() {
  return (
    <>
      <main className="d-flex">
        <div className="card m-5">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Kode Shift</label>
                <input
                  type="text"
                  className="form-control"
                  name="kode_shift"
                  id="kode_shift"
                />
                <div id="emailHelp" className="form-text">
                  pengisian kode shift menggunakan awalan S dan huruf kapital,
                  contoh <strong>' S001 '</strong>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Mulai</label>
                <input
                  type="text"
                  className="form-control"
                  id="mulai"
                  name="mulai"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Selesai</label>
                <input
                  type="text"
                  className="form-control"
                  id="selesai"
                  name="selesai"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Lokasi</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="lokasi"
                  name="lokasi"
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
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
      </main>
    </>
  );
}
export default EditShift;
