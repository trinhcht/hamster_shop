import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export const Cart = () => {
    return (
        <div className="card">
            <div className="row" style={{ marginLeft: "2rem" }}>
                <div className="col-md-12 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col">
                                <h4>
                                    <b style={{ color: "#663399" }}>Giỏ hàng</b>
                                </h4>
                            </div>
                            <div
                                className="col align-self-center text-right"
                                style={{ color: "#663399" }}
                            >
                                Số lượng: 3
                            </div>
                        </div>
                    </div>
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2">
                                <img
                                    className="img-fluid"
                                    // src="../image/campell-bo-sua.png"
                                    style={{ width: "100%" }}
                                    alt="Campell Bò Sữa"
                                />
                            </div>
                            <div className="col">
                                <div className="row">Hamster campell bò sữa</div>
                            </div>
                            <div className="col">
                                <Link href="/">-</Link>
                                <Link href="/" className="border">
                                    1
                                </Link>
                                <Link href="/">+</Link>
                            </div>
                            <div className="col">
                                200.000 VND
                                <span className="close">&#10005;</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row main align-items-center">
                            <div className="col-2">
                                <img
                                    className="img-fluid"
                                    // src="../image/nha-khung-long.png"
                                    style={{ width: "100%" }}
                                    alt="Nhà Khủng Long"
                                />
                            </div>
                            <div className="col">
                                <div className="row">Nhà khủng long</div>
                            </div>
                            <div className="col">
                                <Link href="/">-</Link>
                                <Link href="/" className="border">
                                    1
                                </Link>
                                <Link href="/">+</Link>
                            </div>
                            <div className="col">
                                200.000 VND
                                <span className="close">&#10005;</span>
                            </div>
                        </div>
                    </div>
                    <div className="row border-top border-bottom">
                        <div className="row main align-items-center">
                            <div className="col-2">
                                <img
                                    className="img-fluid"
                                    // src="../image/long-san-choi-mao-hiem.png"
                                    style={{ width: "100%" }}
                                    alt="Lồng Sân Chơi Mạo Hiểm"
                                />
                            </div>
                            <div className="col">
                                <div className="row">Lồng sân chơi mạo hiểm</div>
                            </div>
                            <div className="col">
                                <Link href="/">-</Link>
                                <Link href="/" className="border">
                                    1
                                </Link>
                                <Link href="/">+</Link>
                            </div>
                            <div className="col">
                                200.000 VND
                                <span className="close">&#10005;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{ marginLeft: "10rem", marginTop: "1rem" }}
                className="col-md-8 summary"
            >
                <div>
                    <h5>
                        <b style={{ color: "#663399" }}>Chi tiết</b>
                    </h5>
                </div>
                <hr />
                <div className="row">
                    <div className="col" style={{ paddingLeft: 0, color: "#663399" }}>
                        Tổng tiền hàng
                    </div>
                    <div className="col text-right" style={{ color: "black" }}>
                        600.000 VND
                    </div>
                </div>
                <form>
                    <p style={{ color: "#663399" }}>Giao hàng</p>
                    <select>
                        <option style={{ color: "#663399" }}>
                            Giao hàng tiêu chuẩn: 35.000 VND
                        </option>
                    </select>
                    <p style={{ color: "#663399" }}>Mã giảm giá</p>
                    <input id="code" placeholder="Nhập mã giảm giá" />
                </form>
                <div
                    className="row"
                    style={{
                        borderTop: "1px solid rgba(0,0,0,.1)",
                        padding: "2vh 0",
                    }}
                >
                    <div className="col" style={{ color: "#663399" }}>
                        Thành tiền:
                    </div>
                    <div className="col text-right" style={{ color: "black" }}>
                        635.000 VND
                    </div>
                </div>
                <button
                    className="btn"
                    style={{
                        color: "#ffffff",
                        background: "#663399",
                        width: "10rem",
                        marginLeft: "13rem",
                        height: "2rem",
                    }}
                >
                    Thanh toán
                </button>
            </div>
            <div
                className="back-to-shop"
                style={{ marginLeft: "2rem", marginBottom: "1rem" }}
            >
                <Link href="/">Trở về trang chủ</Link>
            </div>
        </div>
    );
};