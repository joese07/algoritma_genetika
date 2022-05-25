import Sidebar from "../../partials/Sidebar";

function CreatePembina () {
    return(
<div>
      <main className="d-flex">
        <Sidebar />
        <div className="b-example-divider b-example-vr" style={{ height : 1000}} />
        <div className="container">
            <div className="mt-4 m-5">
            <h3>Daftar Pembina Baru</h3>

            </div>
        <div className="card m-5">
            <div className="card-body">  
            <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Nama Lengkap</label>
          <input type="text" className="form-control" name="nama" id="nama"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Tempat Lahir</label>
          <input type="text" className="form-control" id="exampleInputPassword1" name="tempat_lahir" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Tanggal Lahir</label>
          <input type="date" className="form-control" id="exampleInputPassword1" name="tanggal_lahir" />
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Jenis Kelamin</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>--Jenis Kelamin--</option>
            <option value="laki - laki">Laki - Laki</option>
            <option value="perempuan">Perempuan</option>
        </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Alamat</label>
          <textarea type="text" className="form-control" id="exampleInputPassword1" name="alamat" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">No Telepon</label>
          <input type="tel" className="form-control" id="exampleInputPassword1" name="tanggal_lahir" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Alamat Email</label>
          <input type="email" className="form-control" id="exampleInputPassword1" name="tanggal_lahir" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Dengan ini data yang saya masukkan telah benar dan sesuai dengan data sebenarnya </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form></div>
      
        </div>
        </div>
      </main>
    </div>
    )
}
export default CreatePembina;