import Sidebar from "../../partials/Sidebar";

function Index () {
    return(
        <div>
        <main className="d-flex flex-nowrap">
            <Sidebar />
            <div className="b-example-divider b-example-vr" />
          <div className="container">
            <div className=" bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Selamat Datang di sistem Generate Jadwal</h1>
                <p className="col-md-8 fs-4">Klik tombol dibawah jika ingin langsung generate jadwal </p>
                <button className="btn btn-primary btn-lg" type="button">Example button</button>
              </div>
            </div>
            <div className="row align-items-md-stretch">
              <div className="col-md-6">
                <div className="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>Daftar Pembina</h2>
                  <p>Klik tombol dibawah jika ingi daftar pembina baru</p>
                  <button className="btn btn-outline-light" type="button">Example button</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 p-5 bg-light border rounded-3">
                  <h2>Daftar Anggota</h2>
                  <p>Klik tombol dibawah jika ingin langsung daftar anggota</p>
                  <button className="btn btn-outline-secondary" type="button">Example button</button>
                </div>
              </div>
            </div>
            <footer className="pt-3 mt-4 text-muted border-top">
              © 2022
            </footer>
          </div>
        </main>
      </div>
    )
}

export default Index;