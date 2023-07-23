import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../templates/Layout";
import "./index.css";
import { Slider } from "../../atoms/Slider";
import { Divider } from "antd";
import { Item } from '../../atoms/Slider/Item';

export const HomePage = () => {
    return (
        <Layout>
            <div
                className="carousel slide"
                data-ride="carousel"
                id="carouselExampleIndicators"
                style={{ width: "100%" }}
            >
                <div>
                    <div
                        className="row mx-0 mt-3 py-1"
                        style={{ padding: "0 100px" }}
                    >
                        <Divider orientation="left">
                            Mua nhiều nhất
                        </Divider>
                    </div>
                    <Slider>
                        <Item>
                            <div className="card">
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="../../../image/hamster1.png"
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{ height: "3rem" }}
                                    >
                                        Hamster Winter White trắng sọc
                                    </h5>
                                    <p className="card-text">200.000 vnd</p>
                                    <Link
                                        className="btn btn-primary me-2"
                                        href="/"
                                        style={{ display: "block" }}
                                    >
                                        Mua hàng
                                    </Link>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div className="card">
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="../../../image/campell-bo-sua.png"
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{ height: "3rem" }}
                                    >
                                        Hamster campell bò sữa
                                    </h5>
                                    <p className="card-text">200.000 vnd</p>
                                    <Link
                                        className="btn btn-primary me-2"
                                        href="/"
                                        style={{ display: "block" }}
                                    >
                                        Mua hàng
                                    </Link>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div className="card">
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="../../../image/nha-khung-long.png"
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{ height: "3rem" }}
                                    >
                                        Nhà khủng long
                                    </h5>
                                    <p className="card-text">200.000 vnd</p>
                                    <Link
                                        className="btn btn-primary me-2"
                                        href="/"
                                        style={{ display: "block" }}
                                    >
                                        Mua hàng
                                    </Link>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div className="card">
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="../../../image/long-san-choi-mao-hiem.png"
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{ height: "3rem" }}
                                    >
                                        Lồng sân chơi mạo hiểm
                                    </h5>
                                    <p className="card-text">200.000 vnd</p>
                                    <Link
                                        className="btn btn-primary me-2"
                                        href="/"
                                        style={{ display: "block" }}
                                    >
                                        Mua hàng
                                    </Link>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div className="card">
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="../../../image/xich-du.png"
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{
                                            height: "3rem",
                                            display: "block",
                                        }}
                                    >
                                        Xích đu
                                    </h5>
                                    <p className="card-text">200.000 vnd</p>
                                    <Link
                                        className="btn btn-primary me-2"
                                        href="/"
                                        style={{ display: "block" }}
                                    >
                                        Mua hàng
                                    </Link>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div className="card">
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="../../../image/wheel-chong-on.png"
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{
                                            height: "3rem",
                                            display: "block",
                                        }}
                                    >
                                        Wheel chống ồn
                                    </h5>
                                    <p className="card-text">200.000 vnd</p>
                                    <Link
                                        className="btn btn-primary me-2"
                                        href="/"
                                        style={{ display: "block" }}
                                    >
                                        Mua hàng
                                    </Link>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div className="card">
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="../../../image/wheel-chong-on.png"
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{
                                            height: "3rem",
                                            display: "block",
                                        }}
                                    >
                                        Wheel chống ồn
                                    </h5>
                                    <p className="card-text">200.000 vnd</p>
                                    <Link
                                        className="btn btn-primary me-2"
                                        href="/"
                                        style={{ display: "block" }}
                                    >
                                        Mua hàng
                                    </Link>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <div className="card">
                                <img
                                    alt="..."
                                    className="card-img-top"
                                    src="../../../image/wheel-chong-on.png"
                                />
                                <div className="card-body">
                                    <h5
                                        className="card-title"
                                        style={{
                                            height: "3rem",
                                            display: "block",
                                        }}
                                    >
                                        Wheel chống ồn
                                    </h5>
                                    <p className="card-text">200.000 vnd</p>
                                    <Link
                                        className="btn btn-primary me-2"
                                        href="/"
                                        style={{ display: "block" }}
                                    >
                                        Mua hàng
                                    </Link>
                                </div>
                            </div>
                        </Item>
                    </Slider>
                </div>
                <Link
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#carouselExampleIndicators"
                    role="button"
                >
                    <span
                        aria-hidden="true"
                        className="carousel-control-prev-icon"
                    ></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link
                    className="carousel-control-next"
                    data-slide="next"
                    href="#carouselExampleIndicators"
                    role="button"
                >
                    <span
                        aria-hidden="true"
                        className="carousel-control-next-icon"
                    ></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>

            {/* <div className="row mx-0 mt-3 py-1" style="padding: 0 100px; ">
                    <div className="col-2 d-flex justify-content-center">
                            <div className="card" style="width: 380px;">
                                    <img alt=".../"
                                        className="card-img-top" src="../../../image/hamster1.png">
                                    <div className="card-body">
                                            <h5 className="card-title" style="height: 3rem">Hamster Winter White trắng sọc</h5>
                                            <p className="card-text"> 200.000 vnd </p>
                                            <Link className="btn btn-primary me-2" href="/" style="display: block">
                                                    Mua hàng
                                                </Link>
                                        </div>
                                </div>
                        </div>
                    <div className="col-2 d-flex justify-content-center">
                            <div className="card" style="width: 380px;">
                                    <img alt=".../"
                                         className="card-img-top" src="../../../image/campell-bo-sua.png">
                                    <div className="card-body">
                                            <h5 className="card-title" style="height: 3rem">Hamster campell bò sữa</h5>
                                            <p className="card-text"> 200.000 vnd </p>
                                            <Link className="btn btn-primary me-2" href="/" style="display: block">
                                                    Mua hàng
                                                </Link>
                                        </div>
                                </div>
                        </div>
                    <div className="col-2 d-flex justify-content-center">
                            <div className="card" style="width: 380px;">
                                    <img alt=".../"
                                         className="card-img-top" src="../../../image/nha-khung-long.png">
                                    <div className="card-body">
                                            <h5 className="card-title" style="height: 3rem">Nhà khủng long</h5>
                                            <p className="card-text"> 200.000 vnd </p>
                                            <Link className="btn btn-primary me-2" href="/" style="display: block">
                                                    Mua hàng
                                                </Link>
                                        </div>
                                </div>
                        </div>
                    <div className="col-2 d-flex justify-content-center">
                            <div className="card" style="width: 380px;">
                                    <img alt=".../"
                                         className="card-img-top" src="../../../image/long-san-choi-mao-hiem.png">
                                    <div className="card-body">
                                            <h5 className="card-title" style="height: 3rem">Lồng sân chơi mạo hiểm</h5>
                                            <p className="card-text"> 200.000 vnd </p>
                                            <Link className="btn btn-primary me-2" href="/" style="display: block">
                                                    Mua hàng
                                                </Link>
                                        </div>
                                </div>
                        </div>
                    <div className="col-2 d-flex justify-content-center">
                            <div className="card" style="width: 380px;">
                                    <img alt=".../"
                                         className="card-img-top" src="../../../image/xich-du.png">
                                    <div className="card-body">
                                            <h5 className="card-title" style="height: 3rem" style="display: block">Xích đu</h5>
                                            <p className="card-text"> 200.000 vnd </p>
                                            <Link className="btn btn-primary me-2" href="/" style="display: block">
                                                    Mua hàng
                                                </Link>
                                        </div>
                                </div>
                        </div>
                    <div className="col-2 d-flex justify-content-center">
                            <div className="card" style="width: 380px;">
                                    <img alt=".../"
                                         className="card-img-top" src="../../../image/wheel-chong-on.png">
                                    <div className="card-body">
                                            <h5 className="card-title" style="height: 3rem" style="display: block">Wheel chống ồn</h5>
                                            <p className="card-text"> 200.000 vnd </p>
                                            <Link className="btn btn-primary me-2" href="/" style="display: block">
                                                    Mua hàng
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div> */}
            <div>
                <div
                    className="row mx-0 mt-3 py-1"
                    style={{ padding: "0 100px" }}
                >
                    <div>
                        <img
                            src="../../../image/Banner-1.jpg"
                            style={{ width: "100%" }}
                            alt="Banner"
                        />
                    </div>
                </div>

                <div
                    className="row mx-0 mt-3 py-1"
                    style={{ padding: "0 100px" }}
                >
                    <Divider orientation="left">
                        Đang khuyến mãi
                    </Divider>
                    <div className="col-2 d-flex justify-content-center">
                        <div className="card" style={{ width: "380px" }}>
                            <img
                                alt="..."
                                className="card-img-top"
                                src="../../../image/hamster1.png"
                            />
                            <div className="card-body">
                                <h5
                                    className="card-title"
                                    style={{ height: "3rem" }}
                                >
                                    Hamster Winter White trắng sọc
                                </h5>
                                <p className="card-text">200.000 vnd</p>
                                <Link
                                    className="btn btn-primary me-2"
                                    href="/"
                                    style={{ display: "block" }}
                                >
                                    Mua hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <div className="card" style={{ width: "380px" }}>
                            <img
                                alt="..."
                                className="card-img-top"
                                src="../../../image/campell-bo-sua.png"
                            />
                            <div className="card-body">
                                <h5
                                    className="card-title"
                                    style={{ height: "3rem" }}
                                >
                                    Hamster campell bò sữa
                                </h5>
                                <p className="card-text">200.000 vnd</p>
                                <Link
                                    className="btn btn-primary me-2"
                                    href="/"
                                    style={{ display: "block" }}
                                >
                                    Mua hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <div className="card" style={{ width: "380px" }}>
                            <img
                                alt="..."
                                className="card-img-top"
                                src="../../../image/nha-khung-long.png"
                            />
                            <div className="card-body">
                                <h5
                                    className="card-title"
                                    style={{ height: "3rem" }}
                                >
                                    Nhà khủng long
                                </h5>
                                <p className="card-text">200.000 vnd</p>
                                <Link
                                    className="btn btn-primary me-2"
                                    href="/"
                                    style={{ display: "block" }}
                                >
                                    Mua hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <div className="card" style={{ width: "380px" }}>
                            <img
                                alt="..."
                                className="card-img-top"
                                src="../../../image/long-san-choi-mao-hiem.png"
                            />
                            <div className="card-body">
                                <h5
                                    className="card-title"
                                    style={{ height: "3rem" }}
                                >
                                    Lồng sân chơi mạo hiểm
                                </h5>
                                <p className="card-text">200.000 vnd</p>
                                <Link
                                    className="btn btn-primary me-2"
                                    href="/"
                                    style={{ display: "block" }}
                                >
                                    Mua hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <div
                            className="card"
                            style={{ width: "380px", position: "relative" }}
                        >
                            <img
                                alt="..."
                                className="card-img-top"
                                src="../../../image/xich-du.png"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                            <img
                                src="../../../image/sale1-png.png"
                                style={{
                                    position: "absolute",
                                    top: "-16px",
                                    left: "-21px",
                                    width: "30%",
                                    height: "25%",
                                }}
                                alt="Sale"
                            />
                            <div className="card-body">
                                <h5
                                    className="card-title"
                                    style={{ height: "3rem" }}
                                >
                                    Xích đu
                                </h5>
                                <p className="card-text">200.000 vnd</p>
                                <Link
                                    className="btn btn-primary me-2"
                                    href="/"
                                    style={{ display: "block" }}
                                >
                                    Mua hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <div className="card" style={{ width: "380px" }}>
                            <img
                                alt="..."
                                className="card-img-top"
                                src="../../../image/wheel-chong-on.png"
                            />
                            <div className="card-body">
                                <h5
                                    className="card-title"
                                    style={{ height: "3rem" }}
                                >
                                    Wheel chống ồn
                                </h5>
                                <p className="card-text">200.000 vnd</p>
                                <Link
                                    className="btn btn-primary me-2"
                                    href="/"
                                    style={{ display: "block" }}
                                >
                                    Mua hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
