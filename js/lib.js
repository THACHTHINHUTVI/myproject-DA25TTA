/*trang ca nhan*/
//khai báo 1 đối tưởng lưu thông tin sản phẨM

// Khai báo 1 đối tượng lưu thông tin sản phẩm (Trang cá nhân)

// Mảng chứa danh sách các sản phẩm
const products = [
    {
	id: "1",
    name: "hoa tulip",
    price: 250,
    description: "Hoa tulip là biểu tượng của lòng biết ơn, sự chân thành và lời xin lỗi tinh tế. Nhờ kết cấu hàng trăm cánh hoa nhỏ gắn kết thành khối cầu viên mãn, loài hoa này còn đại diện cho tình yêu lứa đôi và sự thấu hiểu sâu sắc trong hôn nhân",
    image: "../assets/images/tulip.jpg",
         detail: `<p>Hoa tulip (hay uất kim hương) là loài hoa nổi tiếng thế giới bởi vẻ đẹp thanh lịch, kiêu sa và có hình dáng độc đáo giống như một chiếc chuông úp ngược hoặc chiếc ly nhỏ xinh.</p>
    <p>Loài hoa thân củ này có nguồn gốc từ vùng Trung Á, nhưng ngày nay lại được biết đến nhiều nhất như một biểu tượng kiêu hãnh của đất nước Hà Lan.</p>`,

    link: "chi-tiet.html"
    },
    {
		id: "2",
        name: "hoa mẫu đơn",
        price: 250,
        description: "Hoa mẫu đơn được mệnh danh là 'vua của các loài hoa', đại diện cho sự vương giả, phú quý, giàu sang và quyền uy đỉnh cao. Trong văn hóa tình yêu, loài hoa này là biểu tượng mạnh mẽ của một cuộc hôn nhân hạnh phúc, sự thủy chung son sắt và bách niên giai lão. Không chỉ vậy, những cánh hoa xếp tầng kiêu sa còn mang thông điệp về vẻ đẹp thanh cao, lòng bao dung của người mẹ và sự tôn kính, biết ơn sâu sắc.",
        image: "../assets/images/mẫu đơn 2.jfif",
        detail: `<p>Hoa mẫu đơn được mệnh danh là 'vua của các loài hoa' bởi vẻ đẹp lộng lẫy, kiêu sa với những lớp cánh hoa dày xếp chồng lên nhau như những dải lụa mềm mại bồng bềnh.</p>
<p>Loài hoa này có lịch sử lâu đời từ vùng Đông Á, là biểu tượng kinh điển của sự vương giả, phú quý, giàu sang và mang lời chúc bách niên giai lão cho hạnh phúc hôn nhân viên mãn.</p>`,

        link: "chi-tiet.html"
    },
    {	
	id: "3",
        name: "hoa mẫu đơn",
        price: 300,
        description: "Hoa mẫu đơn được mệnh danh là 'vua của các loài hoa', đại diện cho sự vương giả, phú quý, giàu sang và quyền uy đỉnh cao. Trong văn hóa tình yêu, loài hoa này là biểu tượng mạnh mẽ của một cuộc hôn nhân hạnh phúc, sự thủy chung son sắt và bách niên giai lão. Không chỉ vậy, những cánh hoa xếp tầng kiêu sa còn mang thông điệp về vẻ đẹp thanh cao, lòng bao dung của người mẹ và sự tôn kính, biết ơn sâu sắc.",
        image: "../assets/images/mẫu đơn.webp",
        detail: `<p>Hoa mẫu đơn được mệnh danh là 'vua của các loài hoa' bởi vẻ đẹp lộng lẫy, kiêu sa với những lớp cánh hoa dày xếp chồng lên nhau như những dải lụa mềm mại bồng bềnh.</p>
<p>Loài hoa này có lịch sử lâu đời từ vùng Đông Á, là biểu tượng kinh điển của sự vương giả, phú quý, giàu sang và mang lời chúc bách niên giai lão cho hạnh phúc hôn nhân viên mãn.</p>`,

        link: "chi-tiet.html"
    },
    {
		id: "4",
        name: "hoa cẩm tú cầu",
        price: 230,
        description: "Hoa cẩm tú cầu là biểu tượng của lòng biết ơn, sự chân thành và lời xin lỗi tinh tế. Nhờ kết cấu hàng trăm cánh hoa nhỏ gắn kết thành khối cầu viên mãn, loài hoa này còn đại diện cho tình yêu lứa đôi và sự thấu hiểu sâu sắc trong hôn nhân",
        image: "../assets/images/camtucau.jpg",
        detail: `<p>Hoa cẩm tú cầu gây ấn tượng đặc biệt bởi khả năng đổi màu sắc kỳ diệu từ xanh, hồng, tím cho đến trắng tùy thuộc vào độ pH của đất trồng.</p>
<p>Với kết cấu hàng trăm bông hoa nhỏ bốn cánh đan cài khăng khít tạo thành một khối cầu viên mãn, loài hoa này là biểu tượng tuyệt vời cho sự thấu hiểu sâu sắc, lòng biết ơn chân thành và tình cảm gia đình gắn kết trọn vẹn.</p>`,

        link: "chi-tiet.html"
    },
    {
		id: "5",
        name: "hoa cẩm tú cầu",
        price: 250,
        description: "Hoa cẩm tú cầu là biểu tượng của lòng biết ơn, sự chân thành và lời xin lỗi tinh tế. Nhờ kết cấu hàng trăm cánh hoa nhỏ gắn kết thành khối cầu viên mãn, loài hoa này còn đại diện cho tình yêu lứa đôi và sự thấu hiểu sâu sắc trong hôn nhân",
        image: "../assets/images/camtu2.jfif",
        detail: `<p>Hoa cẩm tú cầu gây ấn tượng đặc biệt bởi khả năng đổi màu sắc kỳ diệu từ xanh, hồng, tím cho đến trắng tùy thuộc vào độ pH của đất trồng.</p>
<p>Với kết cấu hàng trăm bông hoa nhỏ bốn cánh đan cài khăng khít tạo thành một khối cầu viên mãn, loài hoa này là biểu tượng tuyệt vời cho sự thấu hiểu sâu sắc, lòng biết ơn chân thành và tình cảm gia đình gắn kết trọn vẹn.</p>`,

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
    price.innerHTML = obj.price + "/ bó hoa";

    // Tạo <p> chứa mô tả sản phẩm 
    const description = document.createElement("p");
    description.innerHTML = obj.description;

    // Tạo <a> chứa liên kết
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", obj.link+"?id="+obj.id);
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
