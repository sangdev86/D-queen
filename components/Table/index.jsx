import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { converLabel } from '../../Assets/utils/form';

export default function Table(props) {
  const { body, typeRequest, dto, fetchSubAction, fetchMainAction } =
    props;
  // console.log(props.body);
  const [data, setData] = useState(body);
  const typeForm = props[typeRequest];
  const { asyncActionForm } = typeForm;
  const dispatch = useDispatch();
  const typeValueSub = (key, index) => {
    let type;
    let value;
    let result;
    let render;
    let label;
    asyncActionForm.forEach((el) => {
      const { bodyAPI } = el;
      for (const property in bodyAPI) {
        if (key === property) {
          // type
          if (bodyAPI[property].type) {
            type = bodyAPI[property].type;
          } else {
            type = bodyAPI[property];
          }

          // label
          if (bodyAPI[property].name) {
            label = bodyAPI[property].name;
          } else {
            label = converLabel(key);
          }

          // value
          value = data[index][key];

          // render option
          if (type === 'select') {
            render = bodyAPI[property].render;
            result = { label, type, value, render };
          } else {
            result = { label, type, value };
          }

          return result;
        }
      }
    });
    return result;
  };
  const arrTR = () => {
    const arrTR = [];

    data.forEach((item, index) => {
      const arrTD = [];
      for (const key in item) {
        let result = typeValueSub(key, index);
        if (result) {
          arrTD.push({ ...result, key });
        }
      }
      if (arrTD.length > 0) {
        arrTR.push(arrTD);
      }
    });

    return arrTR;
  };
  console.log('arrTR', arrTR());
  const tHead = () => {
    const tHead = [];
    asyncActionForm.forEach((el) => {
      const { bodyAPI } = el;
      for (const property in bodyAPI) {
        tHead.push(converLabel(property));
      }
    });
    return (
      <tr>
        <th className="td-thead">STT</th>
        {tHead.map((item, index) => (
          <th key={index} className="td-thead">
            {item}
          </th>
        ))}
      </tr>
    );
  };

  return (
    <div id="table">
      <table>
        <thead>{tHead()}</thead>
        <tbody>
          {arrTR().map((arrTD, indexTD) => {
            return (
              <tr key={indexTD}>
                <td>{indexTD + 1}</td>
                {arrTD.map((td, index) => {
                  const { type, value, label, key, render } = td;
                  return (
                    <td key={index}>
                      {(() => {
                        switch (type) {
                          case 'image':
                            return (
                              <div>
                                <img
                                  src={value[0].src}
                                  height={50}
                                  width={50}
                                />
                              </div>
                            );
                          case 'text':
                            return (
                              <div className="form__div" key={index}>
                                <input
                                  type={type}
                                  className="form__input"
                                  placeholder={label}
                                  defaultValue={value}
                                  // onChange={(e) =>
                                  //   handleOnchange(
                                  //     key,
                                  //     e.target.value
                                  //   )
                                  // }
                                />

                                {/* <span>err</span> */}
                              </div>
                            );
                          case 'select':
                            return (
                              <div className="form__div" key={index}>
                                <select
                                  defaultValue={
                                    value !== undefined &&
                                    value !== ''
                                      ? value
                                      : '1'
                                  }
                                  className="form__input"
                                  placeholder={label}
                                  multiple={false}
                                  // onChange={(e) =>
                                  //   handleOnchange(key, e.target.value)
                                  // }
                                >
                                  <option value={label}>Chọn</option>
                                  {render()}
                                </select>
                              </div>
                            );
                          default:
                            break;
                        }
                      })()}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
