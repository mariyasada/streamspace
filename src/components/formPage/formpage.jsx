import React, { useState } from "react";
import { contentType, fieldData, initialData } from "../constants";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { postData } from "./postData";
import toast from "react-hot-toast";

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
        <div className="radio-btns-div">
          <div className="radio-div flex-center">
            <label htmlFor="Webhook Status">Webhook Status</label>
            <span className="btns">
              <label htmlFor="Enable">
                <input
                  type="radio"
                  name="status"
                  value="true"
                  id="Enable"
                  onChange={handleFormChange}
                />
                Enable
              </label>
              <label htmlFor="Disable">
                <input
                  type="radio"
                  name="status"
                  value="false"
                  onChange={handleFormChange}
                  id="Disable"
                />
                Disable
              </label>
            </span>
          </div>
          <span className="inputs-div flex-center flex-column">
            <label htmlFor="Webhook URL">
              Webhook URL
              <input
                type="text"
                className="ml-3 width"
                name="url"
                value={formData.url}
                onChange={handleFormChange}
              />
            </label>
            <label htmlFor="Webhook URL justify-start">
              Content Type
              <select
                className="ml-3 width"
                name="contentType"
                id="contentType"
                value={formData.contentType}
                onChange={handleFormChange}
                required
              >
                <option value=""></option>
                {contentType.map((item) => (
                  <option key={item} value={item} name={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </span>
        </div>
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
                <input
                  type="text"
                  className="width ml-3"
                  name="key"
                  label="key"
                  variant="filled"
                  value={inputField.key}
                  onChange={(e) => handleOnChange(inputField.id, e)}
                />
                <select
                  className="selectinput"
                  name="value"
                  id="value"
                  onChange={(e) => handleOnChange(inputField.id, e)}
                  value={inputField.value}
                  required
                >
                  <option value=""></option>
                  {fieldData.map((item) => (
                    <option key={item} value={item} name={item}>
                      {item}
                    </option>
                  ))}
                </select>
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
                <input
                  type="text"
                  className="width ml-3"
                  name="key"
                  value={data.key}
                  onChange={(e) => handleOnChange(data.id, e)}
                />
                <input
                  type="text"
                  style={{ width: "50%" }}
                  name="value"
                  onChange={(e) => handleOnChange(data.id, e)}
                  value={data.value}
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
