function ProsesGenetika() {
  return (
    <>
      <main>
        <div className="card m-5">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Jumlah Iterasi</label>
                <input
                  type="number"
                  className="form-control"
                  name="jumlah_iterasi"
                  id="jumlah_iterasi"
                  //   onChange={handleKodeShift}
                />
                <div id="emailHelp" className="form-text">
                  pengisian Jumlah Iterasi menggunakan angka, contoh{" "}
                  <strong>' 1'</strong>
                </div>
              </div>
              <div class="mb-3">
                <label className="form-label">Jumlah Crossover</label>
                <select
                  class="form-select"
                  //   onChange={handleLokasi}
                  id="crossover"
                  name="crossover"
                >
                  <option selected>Choose...</option>{" "}
                  {/* {dataQueryLokasi.map((data) => ( */}
                  <option value="Crossover 2 titik">Crossover 2 tititk</option>
                  <option value="Crossover 4 titik">Crossover 4 tititk</option>
                  {/* ))} */}
                </select>
              </div>
              <div class="mb-3">
                <label className="form-label">Probabilitas Mutasi %</label>
                <select
                  class="form-select"
                  //   onChange={handleLokasi}
                  id="probabilitas"
                  name="probabilitas"
                >
                  <option selected>Choose...</option>{" "}
                  {/* {dataQueryLokasi.map((data) => ( */}
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  {/* ))} */}
                </select>
              </div>
              <div class="mb-3">
                <label className="form-label">aktifkan Permintaan Jadwal</label>
                <select
                  class="form-select"
                  //   onChange={handleLokasi}
                  id="permintaan_jadwal"
                  name="permintaan_jadwal"
                >
                  <option selected>Choose...</option>{" "}
                  {/* {dataQueryLokasi.map((data) => ( */}
                  <option value="Ya">Ya</option>
                  <option value="Tidak">Tidak</option>
                  {/* ))} */}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Proses
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProsesGenetika;
