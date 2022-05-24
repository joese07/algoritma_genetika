import Sidebar from "../../partials/Sidebar";

function Dashboard(){
    return(
        <div>
        <main className="d-flex flex-nowrap">
            <Sidebar />
            <div className="b-example-divider b-example-vr" />
          <div className="container">
            <div className=" bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Halaman Dashboard</h1>
                <p className="col-md-8 fs-4">Klik tombol dibawah jika ingin langsung generate jadwal </p>
                
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
export default Dashboard;