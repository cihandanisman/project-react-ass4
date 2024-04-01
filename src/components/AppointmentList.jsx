import React from "react";
import "../css/appointment.css";
import { IoClose } from "react-icons/io5";
const AppointmentList = ({ data, handleDelete }) => {
  console.log(data);
  return (
    <>
      {data.length > 0 && (
        <div>
          <div>
            <h2>Appointment List</h2>
          </div>
          {data?.map((item, i) => (
            <div
              key={i}
              className="appointment d-flex justify-content-between align-items-center"
            >
              <div className="left-side">
                <p className="text-danger">{item.patient}</p>
                <p>{item.doctor}</p>
              </div>
              <div className="middle">
                <p>{item.date}</p>
                <p>{item.time}</p>
              </div>
              <div className="right-side">
                <p className="x d-flex justify-content-center align-items-center" onClick={() => handleDelete(item)}>
                <IoClose  fontSize={"1.2rem"}/>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AppointmentList;
