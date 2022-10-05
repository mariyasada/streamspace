import React from 'react'

export const UrlParameterField = ({data,handleOnChange}) => {
  return (
    <>
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
    </>
  )
}


