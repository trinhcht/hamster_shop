import React from 'react'

const Footer = () => {
    return (
        <footer class="text-center text-lg-start bg-light text-muted">
            <section class="" style={{ backgroundColor: "#ffcce5", height: "auto", marginBottom: "0px" }}>
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <ul style={{ marginTop: "50px", marginLeft: "-70px" }}>
                                <li style={{ color: "#2a2a29" }}>Giới thiệu</li>
                                <li style={{ color: "#2a2a29" }}>Chính sách bảo mật</li>
                                <li style={{ color: "#2a2a29" }}>Chính sách vận chuyển</li>
                                <li style={{ color: "#2a2a29" }}>Liên hệ</li>
                            </ul>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{ marginTop: "50px" }}>
                            <div class="block-23 mb-3">
                                <h6 class="text-uppercase fw-bold mb-4" style={{ color: "rgba(128, 11, 149, 0.94)" }}>Liên hệ</h6>
                                <ul>
                                    <li>
                                        <span class="icon icon-map-marker" style={{ color: "#2a2a29" }}></span>
                                        <span class="text" style={{ color: "#2a2a29", marginLeft: "10px" }}>380 Trần Hưng Đạo, Sơn
                                            Trà, Đà Nẵng</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-phone" style={{ color: "#2a2a29" }}></span>
                                        <span class="text" style={{ color: "#2a2a29", marginLeft: "10px" }}>0329288263</span>
                                    </li>
                                    <li>
                                        <span class="icon icon-envelope" style={{ color: "#2a2a29" }}></span>
                                        <span class="text" style={{ color: "#2a2a29", marginLeft: "10px" }}>gaushop@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
