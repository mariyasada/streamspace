import React, { useState } from "react";
import { initialData } from "../constants";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { postData } from "./postData";
import toast from "react-hot-toast";
import { FormField } from "../FormField";
import { UrlParameterField } from "../UrlParameterField";
import UpperDivConfig from "../UpperDiv";

export const Formpage = () => {
  const [inputFieldData, setInputFieldData] = useState([
    { id: uuidv4(), key: "", value: "" },
  ]);

  const [urlParameters, setUrlParametrs] = useState([
    { id: uuidv4(), key: "", value: "" },
  ]);

  const [formData, setFormData] = useState(initialData);

  const handleAddFields = () => {
    setInputFieldData([
      ...inputFieldData,
      { id: uuidv4(), key: "", value: "" },
    ]);
  };
  const handleRemoveFields = (id) => {
    const values = [...inputFieldData];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFieldData(values);
  };

  const handleAddUrlFields = () => {
    setUrlParametrs([...urlParameters, { id: uuidv4(), key: "", value: "" }]);
  };

  const handleRemoveUrlFields = (id) => {
    const values = [...urlParameters];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setUrlParametrs(values);
  };

  const handleOnChange = (id, e) => {
    const newInputFieldData = inputFieldData.map((item) => {
      if (id === item.id) {
        item[e.target.name] = e.target.value;
      }
      return item;
    });
    const newUrlParameters = urlParameters.map((item) => {
      if (id === item.id) {
        item[e.target.name] = e.target.value;
      }
      return item;
    });

    setInputFieldData(newInputFieldData);
    setUrlParametrs(newUrlParameters);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clickHandler = () => {
    if (
      formData.status === "" ||
      formData.contentType === "" ||
      formData.url === "" ||
      inputFieldData === [] ||
      urlParameters === []
    ) {
      toast("please fill all the fields", { icon: "✔" });
    } else {
      postData(formData, inputFieldData, urlParameters);
      setFormData(initialData);
    }
  };
  return (
    <div className="container">
      <h3 className="heading">Webhooks configuration</h3>
      <hr />
      <div className="upper-div">
        <p className="gray-text">
          Send data collected through forms to other services.
        </p>
        <UpperDivConfig
          formData={formData}
          handleFormChange={handleFormChange}
        />
      </div>
      {/* middle div */}
      <div className="middle-div">
        <h4 className="gray-text">Payload Parameters</h4>
        <div className="form-Field">
          <span className="field-with-bg flex-center">
            <h4>Form Fields</h4>
          </span>
          {inputFieldData.map((inputField) => {
            return (
              <div
                className="field-form flex-center justify-start"
                key={inputField.id}
              >
                <FormField
                  inputField={inputField}
                  handleOnChange={handleOnChange}
                />
                <span className="btns-plus flex-center">
                  <BsPlusCircle
                    style={{ color: "green" }}
                    onClick={handleAddFields}
                  />
                  <BiMinusCircle
                    style={{ color: "red" }}
                    onClick={() => handleRemoveFields(inputField.id)}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="last-div">
        <h4>URL Parameters</h4>
        <div className="url-params border">
          {urlParameters.map((data) => {
            return (
              <div
                className="url-params flex-center justify-start"
                key={data.id}
              >
                <UrlParameterField
                  data={data}
                  handleOnChange={handleOnChange}
                />
                <span className="btns-plus flex-center">
                  <BsPlusCircle
                    style={{ color: "green" }}
                    onClick={handleAddUrlFields}
                  />
                  <BiMinusCircle
                    style={{ color: "red" }}
                    onClick={() => handleRemoveUrlFields(data.id)}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-center">
        <button className="btn-save" onClick={clickHandler}>
          Save
        </button>
      </div>
    </div>
  );
};
