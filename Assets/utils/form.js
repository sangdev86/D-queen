export const converLabel = (key) => {
  switch (key) {
    case 'account':
      return 'Tài Khoản';
    case 'password':
      return 'Mật Khẩu';
    case 'fullName':
      return 'Họ Tên';
    case 'name':
      return 'Họ Tên';
    case 'phoneNumber':
      return 'Số  điện thoại';
    case 'gender':
      return 'Giới tính';
    case 'username':
      return 'Tên';
    case 'email':
      return 'Email';
    case 'address':
      return 'Địa chỉ';
    default:
      break;
  }
};
