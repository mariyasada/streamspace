import React from 'react'
import { contentType } from './constants'


const UpperDivConfig = ({formData,handleFormChange}) => {
  return (
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
  )
}

export default UpperDivConfig
