import React from "react";
import "./Addpatient.scss";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function Addpatient() {
  const [patient, setPatient] = useState<any>({
    First_Name: "",
    Last_Name: "",
    Date_of_Birth: "",
    Chain_of_Identity: "",
    Subject_Id_Number: "",
    Donor_Identification: "",
    Lot_Number: "",
    Batch_Number: "",
    Country: "",
    Study_Id: "",
  });
  const handleChange = (event:any) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };
  const handleSubmit: any = (e: any) => {
    e.preventDefault();
    console.log(patient)
  };

  return (
    <div className="p-10">
      <div className="mb-5 tracking-widest text-blue-900 font-semibold">
        Add patient{" "}
      </div>
      <form
        className="w-full max-w-lg"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded-sm py-3 px-4 mb-3 leading-tight  focus:bg-white"
              id="grid-first-name"
              type="text"
              name="First_Name"
              value={patient.First_Name}
              onChange={(event) => {
                handleChange(event);
              }}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3 ">
            <label
              className="block  tracking-wide text-gray-700 text-xs  "
              htmlFor="grid-last-name"
             
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Last_Name"
              value={patient.Last_Name}
              onChange={(event) => {
                handleChange(event);
              }}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-1"
              htmlFor="grid-last-name"
            >
              Date of Birth
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="date"
              name="Date_of_Birth"
              value={patient.Date_of_Birth}
              onChange={(event) => {
                handleChange(event);
              }}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-1"
              htmlFor="grid-last-name"
            >
              Chain of Identity
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Chain_of_Identity"
              value={patient.Chain_of_Identity}
              onChange={(event) => {
                handleChange(event);
              }}
              ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-1"
              htmlFor="grid-last-name"
            >
              Subject ID Number
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Subject_Id_Number"
              value={patient.Subject_ID_Number}
              onChange={(event) => {
                handleChange(event);
              }}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-1"
              htmlFor="grid-last-name"
            >
              Donor Identification
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Donor_Identification"
              value={patient.Donor_Identification}
              onChange={(event) => {
                handleChange(event);
              }}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-1"
              htmlFor="grid-last-name"
            >
              Lot Number
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Lot_Number"
              value={patient.Lot_Number}
              onChange={(event) => {
                handleChange(event);
              }}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-1"
              htmlFor="grid-last-name"
            >
              Batch Number
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="Batch_Number"
              value={patient.Batch_Number}
              onChange={(event) => {
                handleChange(event);
              }}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 inline-block relative mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-1"
              htmlFor="grid-last-name"
            >
              Country
            </label>
            <select className=" block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            name="Country"
            value={patient.Country}
            onChange={(event) => {
              handleChange(event);
            }}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 inline-block relative mb-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs  mb-1"
              htmlFor="grid-last-name"
            >
              Study{" "}
            </label>
            <select className=" block w-full  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="Study_Id"
            value={patient.Study_Id}
            onChange={(event) => {
              handleChange(event);
            }}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <button className="bg-transparent  text-black-700  hover:text-black-800 py-2 px-8 border border-black-500  rounded">
            Cancel
          </button>
          <button
            className="bg-purple-800 hover:bg-purple-900 text-white  hover:text-white py-2 px-8 border  hover:border-transparent rounded "
            type="submit"
          >
            {" "}
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
