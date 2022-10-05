import React from 'react'
import { fieldData } from './constants'


export const FormField = ({inputField,handleOnChange}) => {
  return (<>
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
        </>
  )
}


