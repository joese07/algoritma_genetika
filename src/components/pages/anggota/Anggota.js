import Sidebar from "../../partials/Sidebar";

function Anggota() {
  return (
    <div>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Halaman Anggota</h1>
              <p className="col-md-8 fs-4">
                Klik tombol dibawah jika ingin langsung generate jadwal{" "}
              </p>
              <table className="table table-hover">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      {" "}
                      <div class="d-flex justify-content-evenly">
                        <a
                          class="btn btn-success btn-sm"
                          href="/histories/<%= data.id %>"
                          role="button"
                        >
                          <i class="bi-eye-fill"></i> Lihat Detail
                        </a>
                        <a
                          class="btn btn-primary btn-sm"
                          href="/histories/<%= data.id %>/edit"
                          role="button"
                        >
                          <i class="bi-pencil-fill"></i> Edit
                        </a>
                        <form
                          method="post"
                          action="/histories/<%= data.id %>?_method=DELETE"
                        >
                          <button
                            class="btn btn-danger btn-sm"
                            type="submit"
                            onclick="return confirm('apakah anda yakin hapus data ?');"
                          >
                            <i class="bi-trash-fill"></i> Hapus
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <div class="d-flex justify-content-evenly">
                        <a
                          class="btn btn-success btn-sm"
                          href="/histories/<%= data.id %>"
                          role="button"
                        >
                          <i class="bi-eye-fill"></i> Lihat Detail
                        </a>
                        <a
                          class="btn btn-primary btn-sm"
                          href="/histories/<%= data.id %>/edit"
                          role="button"
                        >
                          <i class="bi-pencil-fill"></i> Edit
                        </a>
                        <form
                          method="post"
                          action="/histories/<%= data.id %>?_method=DELETE"
                        >
                          <button
                            class="btn btn-danger btn-sm"
                            type="submit"
                            onclick="return confirm('apakah anda yakin hapus data ?');"
                          >
                            <i class="bi-trash-fill"></i> Hapus
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>
                      {" "}
                      <div class="d-flex justify-content-evenly">
                        <a
                          class="btn btn-success btn-sm"
                          href="/histories/<%= data.id %>"
                          role="button"
                        >
                          <i class="bi-eye-fill"></i> Lihat Detail
                        </a>
                        <a
                          class="btn btn-primary btn-sm"
                          href="/histories/<%= data.id %>/edit"
                          role="button"
                        >
                          <i class="bi-pencil-fill"></i> Edit
                        </a>
                        <form
                          method="post"
                          action="/histories/<%= data.id %>?_method=DELETE"
                        >
                          <button
                            class="btn btn-danger btn-sm"
                            type="submit"
                            onclick="return confirm('apakah anda yakin hapus data ?');"
                          >
                            <i class="bi-trash-fill"></i> Hapus
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-primary">Tambah</button>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2022 dd</footer>
        </div>
      </main>
    </div>
  );
}

export default Anggota;
