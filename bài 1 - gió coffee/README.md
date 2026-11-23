MÔ TẢ DỰ ÁN GIÓ COFFEE – ỨNG DỤNG QUẢN LÝ QUÁN CÀ PHÊ
GIÓ COFFEE là ứng dụng quản lý quán cà phê được xây dựng bằng React Native, sử dụng JavaScript và các thành phần giao diện cơ bản của React Native như View, Text, ScrollView và StyleSheet.

Ứng dụng được thiết kế với giao diện đơn giản, thân thiện, giúp hiển thị thông tin quán và danh sách các loại đồ uống để khách hàng dễ dàng theo dõi.

1. Các thành phần chính của ứng dụng
Header: Hiển thị tên quán GIÓ COFFEE, slogan, địa chỉ, số điện thoại, giờ mở cửa và thông tin Wi-Fi.

Main: Hiển thị menu đồ uống gồm cà phê đen, cà phê sữa, bạc xỉu, trà đào và Matcha Latte cùng giá bán tương ứng.

Footer: Hiển thị các mục MENU, ĐẶT MÓN, ĐƠN HÀNG, lời cảm ơn khách hàng và thông tin bản quyền.

Home: Là màn hình chính, kết hợp ba thành phần Header, Main và Footer bằng ScrollView để hiển thị nội dung theo chiều dọc.

App: Là thành phần gốc của ứng dụng, gọi màn hình Home để hiển thị giao diện.

2. Công nghệ sử dụng
React Native: Xây dựng giao diện ứng dụng di động.

JavaScript: Ngôn ngữ lập trình chính.

React: Xây dựng giao diện theo mô hình component.

StyleSheet: Định dạng màu sắc, kích thước chữ, khoảng cách và bố cục.

ScrollView: Hỗ trợ cuộn nội dung trên màn hình.

3. Cấu trúc thư mục dự án

text
GIÓ COFFEE/
│
├── App.js
│
└── components/
    ├── Header.js
    ├── Main.js
    ├── Footer.js
    └── Home.js
4. Kết quả đạt được
Sau khi hoàn thành, ứng dụng hiển thị đầy đủ thông tin quán GIÓ COFFEE, menu đồ uống và phần cuối trang. Giao diện sử dụng tông màu nâu kết hợp nền trắng, tạo cảm giác gần gũi và phù hợp với phong cách quán cà phê.

5. Hướng phát triển
Trong tương lai, ứng dụng có thể được phát triển thêm các chức năng:

Cho phép khách hàng chọn đồ uống và số lượng.

Tính tổng tiền tự động.

Lưu và quản lý đơn hàng.

Theo dõi trạng thái đơn hàng.

Quản lý, thêm, sửa và xóa đồ uống.

Quản lý doanh thu và thống kê bán hàng.

Kết luận: Dự án GIÓ COFFEE giúp vận dụng kiến thức React Native để xây dựng giao diện ứng dụng di động theo mô hình Component, biết cách phân chia giao diện thành các thành phần Header, Main, Footer và Home, từ đó tạo nền tảng để phát triển một ứng dụng quản lý quán cà phê hoàn chỉnh hơn.
