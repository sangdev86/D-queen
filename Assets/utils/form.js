export const converLabel = (key) => {
  switch (key) {
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
      return 'Tài khoản';
    case 'email':
      return 'Email';
    case 'address':
      return 'Địa chỉ';
    case 'receiver':
      return 'Tên người nhận';
    case 'receiverPhone':
      return 'Số điện thoại';
    case 'provinceCode':
      return 'Tỉnh/Thành Phố';
    case 'districtCode':
      return 'Quận/Huyện';
    case 'wardCode':
      return 'Phường xã';
    case 'detail':
      return 'Số ,Tên Đường';
    case 'images':
      return 'Hình Ảnh';
    case 'category':
      return 'Danh Mục';
    case 'price':
      return 'Giá gạch Chân';
    case 'sale':
      return 'Giá Thực';
    case 'lastest':
      return 'Nhóm Marketing';

    default:
      break;
  }
};
