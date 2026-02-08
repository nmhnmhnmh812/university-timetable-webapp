# 🎓 University Timetable WebApp

Ứng dụng web quản lý lịch học với giao diện chọn nhóm học tập theo khóa và khoa.

## ✨ Tính năng

### Modal Dialog - Chọn nhóm học tập
- 🔍 **Thanh tìm kiếm**: Tìm kiếm nhóm theo tên khoa hoặc tên nhóm
- 📋 **Danh sách khoa (cột trái)**: 8 khoa khác nhau (KH, KІВ, ІТМ, КНТ, ПЗП, ITY, ІТШІ, ВПВПС)
- 📚 **Tabs theo khóa học**: 1-6 khóa với tab đang chọn được highlight màu xanh
- ✅ **Lưới nhóm**: Checkboxes để chọn các nhóm trong từng khoa
- 🏷️ **Selected groups bar**: Hiển thị các nhóm đã chọn với tag màu sắc có nút xóa
- ✓ **Nút "Готово"**: Xác nhận và tạo lịch học

### Trang chính
- 🎯 **Hiển thị lịch học**: Grid layout với thời gian và ngày trong tuần
- 📊 **Empty state**: Thông báo khi chưa chọn nhóm
- 🎨 **Gradient background**: Nền gradient tím đẹp mắt

## 🚀 Cách sử dụng

1. Mở file `university-timetable.html` trong trình duyệt web
2. Bấm nút "Обрати групи" để mở modal chọn nhóm
3. Chọn khoa (tùy chọn) và khóa học
4. Chọn các nhóm học tập bằng checkboxes
5. Bấm nút "Готово" để hiển thị lịch học

## 🛠️ Công nghệ

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (không cần framework)

## 📱 Responsive Design

Ứng dụng hỗ trợ giao diện trên:
- Desktop
- Tablet
- Mobile

## 📂 Cấu trúc file

```
university-timetable-webapp/
├── university-timetable.html    # File HTML chính
├── university-timetable.css     # File CSS
├── university-timetable.js      # File JavaScript
└── README.md                    # File README
```

## 🔧 Tùy chỉnh

Dữ liệu khoa và nhóm có thể được tùy chỉnh trong file `university-timetable.js`:

```javascript
const universityData = {
    faculties: [...],
    courses: {
        1: [...],
        2: [...],
        // ...
    }
};
```

## 📜 License

MIT License

## 👥 Contributing

Contributions, issues and feature requests are welcome!

## 📞 Liên hệ

Được tạo bởi Claude Code - [GitHub](https://github.com/nmhnmhnmh812/university-timetable-webapp)
