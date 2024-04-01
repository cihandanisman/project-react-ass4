import { doctorData } from "../helpers/Data";
import "../css/doctors.css";
import AddModal from "./AddModal";
import { useState } from "react";
import AppointmentList from "./AppointmentList";

const Doctors = () => {
  const [show, setShow] = useState(false);
  const [doctorName, setDoctorName] = useState(null);


  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  const clickCard = (e) => {
    setDoctorName(e.name);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleChange = (e) => {
    setSelected({
      ...selected,
      [e.target.name]: e.target.value,
      doctor: doctorName,
      id: new Date().getTime(),
      time: new Date().toLocaleTimeString(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setData([...data, selected]);
    handleClose()
  };
  const handleDelete=(item)=>{
    const newData = data.filter((product) => product.id !== item.id)
    setData(newData)
    

  }
  return (
    <div className="doctors container">
      <div className="row gap-5 justify-content-center">
        {doctorData.map((doctor) => (
          <div className="doctorCard" onClick={() => clickCard(doctor)}>
            <img src={doctor.img} alt={doctor.name} />
            <h6>{doctor.name}</h6>
            <p>{doctor.dep}</p>
          </div>
        ))}
      </div>
      <div className="appointment-list">
        <AppointmentList data={data} handleDelete={handleDelete}/>
      </div>
      <>
        <AddModal
          show={show}
          handleClose={handleClose}
          selected={selected}
          handleSubmit={handleSubmit}
          doctorName={doctorName}
          onChange={handleChange}
          
        ></AddModal>
      </>
    </div>
  );
};

export default Doctors;
