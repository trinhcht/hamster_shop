import React from "react";
import Layout from "../../templates/Layout";
import "./index.css";

export const Detail = () => {
    return (
        <Layout>
            <div className="row">
                <div className="col-12 col-xl-9">
                    <div className="details-product">
                        <div className="row">
                            <div className="product-detail-left product-images col-12 col-md-6 col-lg-6">
                                <div className="product-image-block relative">
                                    <div className="swiper-container gallery-top swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                        <div className="col-12 col-md-6">
                                            <div
                                                className="swiper-wrapper"
                                                id="lightgallery"
                                            >
                                                {/* <img
                                                    className="img-responsive mx-auto d-block"
                                                    // data-image="../image/hamster1.png"
                                                    height="400"
                                                    // src="../image/hamster1.png"
                                                    width="400"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                    alt="Hamster"
                                                /> */}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 d-flex align-items-center">
                                            <div className="hamster-info">
                                                <h3>
                                                    Hamster Winter White trắng
                                                    sọc
                                                </h3>
                                                <p>Giá: 100.000 đồng</p>
                                                <span>Số lượng:</span>
                                                <input type="number" />
                                                <button>Mua hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-info">
                <h2>THÔNG TIN SẢN PHẨM</h2>
                <p>
                    Hamster Winter White có lối sống bầy đàn và có thể hoạt động
                    vào ban ngày. Hamster Winter White khá nhanh nhẹn và rất
                    hiền lành thân thiện, ít khi cắn và rất dạn người. Chúng rất
                    nhỏ và nhanh, vì thế cần cẩn thận khi cho trẻ em bế giữ
                    chúng để tránh trường hợp chú hamster con có thể nhảy tuột
                    ra khỏi tay trẻ và rơi xuống đất, dẫn đễn shock và ngừng
                    tim. Hamster Winter White rất nhỏ và nhẹ, chỉ từ 8-10cm khi
                    phát triển đầy đủ. Tuổi thọ trung bình của một chú hamster
                    Winter White khoảng 2 năm.
                </p>
            </div>

            <div className="payment-info">
                <h2>THÔNG TIN THANH TOÁN</h2>
                <ol>
                    <li>Chọn sản phẩm muốn mua</li>
                    <li>Thêm sản phẩm vào giỏ hàng</li>
                    <li>Điền thông tin thanh toán và giao hàng</li>
                    <li>Chọn phương thức thanh toán</li>
                    <li>Xác nhận đơn hàng</li>
                </ol>
            </div>

            <div className="shipping-info">
                <h2>CHÍNH SÁCH VẬN CHUYỂN</h2>
                <ul>
                    <li>
                        Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên
                    </li>
                    <li>Thời gian giao hàng từ 2-5 ngày tùy vào địa điểm</li>
                    <li>
                        Khách hàng có thể theo dõi đơn hàng qua hệ thống vận
                        chuyển
                    </li>
                    <li>
                        Nếu sản phẩm bị hư hỏng trong quá trình vận chuyển,
                        chúng tôi sẽ hoàn lại tiền hoặc gửi sản phẩm mới cho
                        khách hàng
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default Detail;