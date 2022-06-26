import { configureStore } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { converLabel } from '../../Assets/utils/form';

// export interface IType {
//   [key: string]:
//     | 'text'
//     | 'password'
//     | 'file'
//     | 'select'
//     | 'Multiselect'
//     | 'date'
//     | 'multipleChip'
//     | ''
//     | 0;
// }
// export interface IFunctionForm {
//   tittle: string;
//   button: string;
//   asyncActionForm: {
//     bodyAPI: IType;
//     action: any;
//   }[];
// }

// export interface IForm {
//   body: any;
//   dto?: any;
//   typeForm: 'add'| 'post' | 'put';
//   post?: IFunctionForm;
//   add?: IFunctionForm;
//   update?: IFunctionForm;
//   subAction?: any[] | [];
//   mainAction?: any;
// }
// subAction: hỗ  tở get danh sách cho hàm main
// mainAction: lay danh sách
// 2 hàm dc truyền từ bảng lên . Ví dụ: lấy danh sách tài khoản user, trong đó chức vụ là id vậy api nhóm chức vụ là 1 nhóm api riêng nên cần sub action phiên dịch từ id sang name chức vụ

export default function Form(props) {
  const { body, typeRequest, dto, fetchSubAction, fetchMainAction } =
    props;
  const [data, setData] = useState(body);
  const typeForm = props[typeRequest];
  const { asyncActionForm } = typeForm;
  const dispatch = useDispatch();
  const typeValueSub = (key) => {
    let type;
    let value;
    let option;
    let result;
    asyncActionForm.forEach((el) => {
      const { bodyAPI } = el;
      for (const property in bodyAPI) {
        if (key === property) {
          if (bodyAPI[property].type) {
            type = bodyAPI[property].type;
          } else {
            type = bodyAPI[property];
          }
          value = data[key];

          if (type === 'select') {
            option = {
              sub: el.bodyAPI[property].sub,
              name: el.bodyAPI[property].name
            };
            result = { type, value, option };
          } else {
            result = { type, value };
          }

          return result;
        }
      }
    });
    return result;
  };

  const renderF = () => {
    const arr = [];
    for (const key in data) {
      const label = converLabel(key);
      let result = typeValueSub(key);
      if (result) {
        arr.push({ label, ...result, key });
      }
    }
    console.log('first', arr);
    return arr;
  };

  const handleOnchange = (key, value) => {
    const changeData = { ...data };
    changeData[key] = value;
    setData({ ...changeData });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // debugger;
    // if (await checkError()) return;

    const arrAction = [];

    if (typeForm === undefined) return;

    asyncActionForm.map((item) => {
      let checkBody = false;
      const { bodyAPI, action } = item;
      const bodyAPIupdate = { ...bodyAPI };
      for (const key in bodyAPI) {
        bodyAPIupdate[key] = data[key];
        if (
          Object.getOwnPropertyNames(bodyAPI).length === 1 &&
          data[key] === ''
        ) {
          checkBody = true;
        }
        if (body[key] !== data[key]) {
          checkBody = true;
        }
      }
      if (checkBody) {
        arrAction.push(action(bodyAPIupdate));
      }
      console.log('arr', arrAction);
    });

    if (arrAction.length === 0) {
      // dispatch(createNotification('error', 'Bạn đã không chỉnh sửa dữ liệu'));
    } else {
      await Promise.all(arrAction.map((arr) => dispatch(arr)))
        .then(async () => {
          console.log('chay else');
          if (fetchSubAction !== undefined) {
            console.log('sub chay');
            await Promise.all(
              fetchSubAction?.map((sub) => dispatch(sub()))
            );
          }
          if (fetchMainAction !== undefined) {
            console.log('main chay');

            await dispatch(fetchMainAction);
          }
        })
        .catch((error) => console.log(error));
    }
    // setLoading(false);
    // dispatch(createModal(false));
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit} className="form">
        <h3>{typeForm.title}</h3>
        {renderF().map((item, index) => {
          const { label, type, value, key } = item;

          switch (type) {
            case 'select':
              const { option } = item;
              const { sub, name } = option;
              console.log('value', value);
              return (
                <div className="form__div" key={index}>
                  <select
                    defaultValue={
                      value !== undefined && value !== ''
                        ? value
                        : '1'
                    }
                    className="form__input"
                    placeholder={label}
                    multiple={false}
                    onChange={(e) =>
                      handleOnchange(key, e.target.value)
                    }
                  >
                    <option value={label}>Chọn</option>
                    {sub.map((el, index1) => (
                      <option
                        key={index1}
                        value={el.id}
                        className="option"
                      >
                        {el[name]}
                      </option>
                    ))}
                  </select>
                  <label className="form__label">{label}</label>
                </div>
              );
            default:
              return (
                <div className="form__div" key={index}>
                  <input
                    type={type}
                    className="form__input"
                    placeholder={label}
                    defaultValue={value}
                    onChange={(e) =>
                      handleOnchange(key, e.target.value)
                    }
                  />
                  <label className="form__label">{label}</label>
                  {/* <span>err</span> */}
                </div>
              );
          }
        })}
        <div className="button-submit">
          <input
            type="submit"
            className="button-primary"
            value={typeForm.button}
          />
        </div>
      </form>
    </div>
  );
}
