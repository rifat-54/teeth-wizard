import React, { useContext } from "react";
import { authContex } from "./AuthProvider/AuthProvider";

const Modal = ({treatment}) => {
  const {user}=useContext(authContex)
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstname.value;
    const lastName = e.target.lastname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const address = e.target.address.value;
    // const date = e.target.date.value;

    const info = {
      firstName,
      lastName,
      email,
      phone,
      date,
      address,
      treatment
    };

    let foundData=[]
    const localData=localStorage.getItem('appointment');
    if(localData)
    {
       foundData=JSON.parse(localData)
    }
    foundData.push(info);
    localStorage.setItem('appointment',JSON.stringify(foundData))

  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
        <div className="!max-w-2xl modal-box  px-16   w-full text-black">
          <form onSubmit={handleSubmit} className="space-y-5 " action="">
            <div className="flex justify-between">
              <label className="mr-5" htmlFor="">
                First Name:{" "}
              </label>
              <input
                name="firstname"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div className="flex justify-between">
              <label className="mr-5" htmlFor="">
                Last Name:{" "}
              </label>
              <input
                name="lastname"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div className="flex justify-between">
              <label className="mr-5" htmlFor="">
                Email{" "}
              </label>
              <input
                name="email"
                type="email"
                value={user?.email}
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div className="flex justify-between">
              <label className="mr-5" htmlFor="">
                Phone:{" "}
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div className="flex justify-between">
              <label className="mr-5" htmlFor="">
                Appointment Date:{" "}
              </label>
              <input
                name="date"
                type="date"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div className="flex justify-between">
              <label className="mr-5" htmlFor="">
                Address:{" "}
              </label>
              <input
                name="address"
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
