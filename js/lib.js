/*trang ca nhan*/
//khai báo 1 đối tưởng lưu thông tin sản phẨM

// Khai báo 1 đối tượng lưu thông tin sản phẩm (Trang cá nhân)
const product = {
    name: "hoa cẩm tú cầu",
    price: 250,
    description: "Hoa cẩm tú cầu là biểu tượng của lòng biết ơn, sự chân thành và lời xin lỗi tinh tế. Nhờ kết cấu hàng trăm cánh hoa nhỏ gắn kết thành khối cầu viên mãn, loài hoa này còn đại diện cho tình yêu lứa đôi và sự thấu hiểu sâu sắc trong hôn nhân",
    image: "../assets/images/hoa-cam-tu-cau-co-bao-nhieu-mau.jpg",
    link: "chi-tiet.html"
};

// Mảng chứa danh sách các sản phẩm
const products = [
    {
        name: "hoa mẫu đơn",
        price: 250,
        description: "Hoa mẫu đơn được mệnh danh là 'vua của các loài hoa', đại diện cho sự vương giả, phú quý, giàu sang và quyền uy đỉnh cao. Trong văn hóa tình yêu, loài hoa này là biểu tượng mạnh mẽ của một cuộc hôn nhân hạnh phúc, sự thủy chung son sắt và bách niên giai lão. Không chỉ vậy, những cánh hoa xếp tầng kiêu sa còn mang thông điệp về vẻ đẹp thanh cao, lòng bao dung của người mẹ và sự tôn kính, biết ơn sâu sắc.",
        image: "../assets/images/mẫu đơn 2.jfif",
        link: "chi-tiet.html"
    },
    {
        name: "hoa mẫu đơn",
        price: 300,
        description: "Hoa mẫu đơn được mệnh danh là 'vua của các loài hoa', đại diện cho sự vương giả, phú quý, giàu sang và quyền uy đỉnh cao. Trong văn hóa tình yêu, loài hoa này là biểu tượng mạnh mẽ của một cuộc hôn nhân hạnh phúc, sự thủy chung son sắt và bách niên giai lão. Không chỉ vậy, những cánh hoa xếp tầng kiêu sa còn mang thông điệp về vẻ đẹp thanh cao, lòng bao dung của người mẹ và sự tôn kính, biết ơn sâu sắc.",
        image: "../assets/images/mẫu đơn.webp",
        link: "chi-tiet.html"
    },
    {
        name: "hoa cẩm tú cầu",
        price: 230,
        description: "Hoa cẩm tú cầu là biểu tượng của lòng biết ơn, sự chân thành và lời xin lỗi tinh tế. Nhờ kết cấu hàng trăm cánh hoa nhỏ gắn kết thành khối cầu viên mãn, loài hoa này còn đại diện cho tình yêu lứa đôi và sự thấu hiểu sâu sắc trong hôn nhân",
        image: "../assets/images/camtucau.jpg",
        link: "chi-tiet.html"
    },
    {
        name: "hoa cẩm tú cầu",
        price: 250,
        description: "Hoa cẩm tú cầu là biểu tượng của lòng biết ơn, sự chân thành và lời xin lỗi tinh tế. Nhờ kết cấu hàng trăm cánh hoa nhỏ gắn kết thành khối cầu viên mãn, loài hoa này còn đại diện cho tình yêu lứa đôi và sự thấu hiểu sâu sắc trong hôn nhân",
        image: "../assets/images/camtu2.jfif",
        link: "chi-tiet.html"
    }
];

// Hàm tạo giao diện cho từng sản phẩm lẻ
function createItem(obj) {
    // Xác định khung chứa product-list bên trong hàm để đảm bảo an toàn
    const listProducts = document.getElementById("product-list"); 
    
    // Nếu không tìm thấy thẻ có id="product-list" trên HTML thì dừng lại, tránh lỗi crash code
    if (!listProducts) return;

    // Tạo 1 container có class = "item"
    const item = document.createElement("div"); 
    item.setAttribute("class", "item col card"); 
    item.style.backgroundColor = "#FFFDD0";

    // Tạo container chứa hình ảnh
    const containerImage = document.createElement("div"); 
    containerImage.setAttribute("class", "Image card-body"); 

    // Tạo ảnh
    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", obj.name);
    img.setAttribute("style", "width:100%; max-width:150px;");
    img.setAttribute("class", "card-img-top rounded-circle");

    // Đưa vào khung chứa ảnh
    containerImage.appendChild(img);

    // Tạo container chứa thông tin sản phẩm
    const containerInfo = document.createElement("div"); 
    containerInfo.setAttribute("class", "Info"); 

    // Tạo 1 <p> chứa tên sản phẩm
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = obj.name;
    nameProduct.setAttribute("class", "card-title text-dark fw-bold"); // Thêm fw-bold cho tên nổi bật

    // Tạo <p> chứa giá sản phẩm
    const price = document.createElement("p");
    price.innerHTML = obj.price + " / gói";

    // Tạo <p> chứa mô tả sản phẩm 
    const description = document.createElement("p");
    description.innerHTML = obj.description;

    // Tạo <a> chứa liên kết
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", obj.link);
    linkProduct.setAttribute("class", "btn btn-info");

    // Đưa các thành phần vào khung chứa Info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    // Thêm khung chứa Image và Info vào item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // Thêm item hoàn chỉnh vào list product trên giao diện
    listProducts.appendChild(item);
}

// Hàm duyệt qua toàn bộ mảng dữ liệu để đổ ra giao diện
function loadAllProducts(objArray) {
    // Kiểm tra tính hợp lệ của mảng đầu vào
    if (!objArray || objArray.length === 0) return;

    let i;
    // i bắt đầu chạy từ 0 đến hết chiều dài mảng
    for (i = 0; i < objArray.length; i++) {
        createItem(objArray[i]);
    }
}

// Chờ trình duyệt tải xong toàn bộ cấu trúc HTML rồi mới bắt đầu render sản phẩm
document.addEventListener("DOMContentLoaded", function() {
    
    // Gọi hàm loadAllProducts và truyền mảng 'products' vào để chạy
    loadAllProducts(products);

}
);
