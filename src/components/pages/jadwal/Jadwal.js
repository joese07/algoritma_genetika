import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import Sidebar from "../../partials/Sidebar";

function Jadwal() {
  return (
    <div>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <div className="b-example-divider b-example-vr" />
        <div className="container">
          <div className=" bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Halaman Jadwal</h1>
              <p className="col-md-8 fs-4">
                Klik tombol dibawah jika ingin langsung generate jadwal{" "}
              </p>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                themeSystem="bootstrap5"
                initialView="dayGridMonth"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                }}
                events={[
                  {
                    title: "All Day Event",
                    start: "2022-04-01",
                  },
                  {
                    title: "Long Event",
                    start: "2022-04-07",
                    end: "2022-04-10",
                  },
                  {
                    groupId: "999",
                    title: "Repeating Event",
                    start: "2022-04-09T16:00:00",
                  },
                  {
                    title: "Conference",
                    start: "2022-04-11",
                    end: "2022-04-13",
                  },
                  {
                    title: "Meeting",
                    start: "2022-04-12T10:30:00",
                    end: "2022-04-12T12:30:00",
                  },
                  {
                    title: "Lunch",
                    start: "2022-04-12T12:00:00",
                  },
                  {
                    title: "Meeting",
                    start: "2022-04-12T14:30:00",
                  },
                  {
                    title: "Birthday Party",
                    start: "2022-04-13T07:00:00",
                  },
                  {
                    title: "click or google",
                    url: "https://www.google.com/",
                    start: "2022-04-28",
                  },
                ]}
              />
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2022</footer>
        </div>
      </main>
    </div>
  );
}
export default Jadwal;
