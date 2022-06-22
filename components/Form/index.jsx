import React from 'react';

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
//   tittleForm: string;
//   button: string;
//   asyncActionForm: {
//     bodyAPI: IType;
//     action: any;
//   }[];
// }

// export interface IForm {
//   body: any;
//   dto?: any;
//   typeForm: 'add' | 'post' | 'update';
//   post?: IFunctionForm;
//   add?: IFunctionForm;
//   update?: IFunctionForm;
//   subAction?: any[] | [];
//   mainAction?: any;
// }
// subAction: hỗ  tở get danh sách cho hàm main
// mainAction: lay danh sách
// 2 hàm dc truyền từ bảng lên . Ví dụ: lấy danh sách tài khoản user, trong đó chức vụ là id vậy api nhóm chức vụ là 1 nhóm api riêng nên cần sub action phiên dịch từ id sang name chức vụ

export default function Form({
  body,
  typeForm,
  dto,
  subAction,
  mainAction
}) {
  const handleSubmit = async (e) => {
    const { value } = e.target;
    console.log('value', value);
  };

  const cBody = () => {
    const obj = {};
    data[typeForm].asynAction.forEach((item) => {
      const { body } = item;
      for (const key in body) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = body[key];
        }
      }
    });
    console.log('obj', obj);
    return obj;
  };
  const [body, setBody] = useState(cBody());

  return (
    <form onSubmit={handleSubmit}>
      <h3>{data[typeForm].title}</h3>
      {body.map((item, index) => {})}
    </form>
  );
}
09;
