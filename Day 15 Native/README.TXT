// TỔNG KẾT
// HỌC CÁCH SỬ DỤNG ASYNC STORAGE ĐỂ LƯU TOKEN JW
// SỬ DỤNG TOKEN JWT ĐỂ GHI NHỚ NGƯỜI DÙNG
// TỰ ĐỘNG LOGIN NẾU NGƯỜI DÙNG LẦN TRƯỚC ĐÃ ĐĂNG NHẬP THÀNH CÔNG(CÓ KHOẢNG THỜI GIAN GIỚI HẠN)
// HỌC CÁCH TẠO KEYSTORE, PUBSHING APP THÀNH FILE ABB, SAU ĐÓ CHUYỂN THÀNH FILE APK:
// TẠO KEYSTORE: keytool -genkeypair -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
// PUBLISHING APP : CHẠY CÂU LỆNH npm install -g eas-cli
				  eas build -p android
// CUỐI CÙNG, PHẢI CÀI JAVA VÀ BUNDLETOOL RỒI CHẠY LỆNH : JAVA -JAR BUNDLETOOL BUILD-APKS --BUNDLE=<TÊN FILE .AAB> --OUTPUT=<TÊN FILE XUẤT.APKS>
--KS=<ĐƯỜNG DẪN FILE KEYSTORE> --KS-KEY-ALIAS=<TÊN ALIAS TRONG LÚC CẤU HÌNH FILE KEYSTORE>
// SAU ĐÓ, MỘT FILE APKS SẼ ĐƯỢC TẠO, CẦN PHẢI CHUYỂN ĐUÔI THÀNH .ZIP VÀ SAU ĐÓ GIẢI NÉN THÀNH FILE APK