# BUILD PC TRUONG PHAT COMPUTER

Trang web xây dựng cấu hình máy tính theo nhu cầu và ngân sách.

## Cấu trúc dự án

```
testweb-main/
├── buildsan.js          # File JavaScript chính, xử lý logic ứng dụng
├── buildsan.css         # CSS cho trang xây dựng cấu hình
├── cauhinhsan.html      # Trang chính để xây dựng cấu hình PC
├── js/
│   ├── data/            # Dữ liệu linh kiện
│   │   ├── cpu.js       # Dữ liệu CPU
│   │   ├── mainboard.js # Dữ liệu Mainboard
│   │   ├── vga.js       # Dữ liệu VGA
│   │   ├── ram.js       # Dữ liệu RAM
│   │   ├── ssd.js       # Dữ liệu SSD
│   │   ├── psu.js       # Dữ liệu PSU
│   │   ├── case.js      # Dữ liệu Case
│   │   ├── cpuCooler.js # Dữ liệu CPU Cooler
│   │   ├── monitor.js   # Dữ liệu Màn hình
│   │   ├── hdd.js       # Dữ liệu HDD
│   │   └── index.js     # Import/Export tất cả dữ liệu
│   └── configs/         # Cấu hình theo ngân sách
│       ├── intel/       # Cấu hình cho CPU Intel
│       │   ├── valorant.js # Cấu hình Intel cho game Valorant
│       │   ├── csgo.js     # Cấu hình Intel cho game CS:GO
│       │   ├── pubg.js     # Cấu hình Intel cho game PUBG
│       │   ├── lol.js      # Cấu hình Intel cho game LOL
│       │   └── gta-v.js    # Cấu hình Intel cho game GTA-V
│       ├── amd/         # Cấu hình cho CPU AMD
│       │   ├── valorant.js # Cấu hình AMD cho game Valorant
│       │   ├── csgo.js     # Cấu hình AMD cho game CS:GO
│       │   ├── pubg.js     # Cấu hình AMD cho game PUBG
│       │   ├── lol.js      # Cấu hình AMD cho game LOL
│       │   └── gta-v.js    # Cấu hình AMD cho game GTA-V
│       └── index.js     # Import/Export tất cả cấu hình
├── images/              # Thư mục chứa ảnh
└── index.html           # Trang chuyển hướng tự động đến cauhinhsan.html
```

## Cách hoạt động

1. Khi truy cập trang web, người dùng sẽ được tự động chuyển hướng đến trang xây dựng cấu hình (`cauhinhsan.html`)
2. Dữ liệu linh kiện (CPU, Mainboard, VGA...) được tách thành các file riêng biệt trong thư mục `js/data/`
3. Các cấu hình tham khảo được tách thành các file riêng biệt trong `js/configs/`
4. File `buildsan.js` import dữ liệu từ các module này và xử lý logic chính của ứng dụng
5. Người dùng chọn loại CPU, game, và ngân sách (kéo thanh trượt)
6. Hệ thống sẽ tự động chọn cấu hình phù hợp dựa trên các thông số đã chọn

## Hướng dẫn sử dụng

1. Mở file `index.html` để bắt đầu. Trang này sẽ tự động chuyển hướng đến trang xây dựng cấu hình.
2. Nếu chuyển hướng không hoạt động, bạn có thể nhấn vào liên kết cung cấp để đi đến trang cấu hình.
3. Tại trang cấu hình, bạn có thể chọn loại CPU (Intel hoặc AMD), game muốn chơi, và ngân sách.
4. Dựa trên các lựa chọn của bạn, hệ thống sẽ tự động đề xuất các linh kiện phù hợp.

## Lưu ý

- Các file dữ liệu và cấu hình được tổ chức theo module ES6
- Trang web sử dụng JavaScript hiện đại với các tính năng import/export
- Khi mở trực tiếp từ hệ thống file, nếu có vấn đề với ES6 modules, hãy dùng nút manual-auto-select để kích hoạt tính năng chọn cấu hình

## Cách thêm cấu hình mới

### Thêm cấu hình cho game mới

1. Tạo file `js/configs/intel/[tên_game].js` và `js/configs/amd/[tên_game].js`
2. Định nghĩa các cấu hình theo ngân sách (3M, 4M, 5M...)
3. Cập nhật `js/configs/index.js` để import cấu hình mới

### Thêm linh kiện mới

1. Cập nhật file tương ứng trong thư mục `js/data/`
2. Không cần thay đổi code logic, các linh kiện mới sẽ tự động được hiển thị trong dropdown
