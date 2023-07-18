import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            style={{ backgroundColor: "#ffcce5", height: "6rem" }}
        >
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    style={{ color: "white", width: "10%" }}
                >
                    <img
                        className="logo-img"
                        width="100%"
                        alt=""
                        src="../image/Logo.png"
                    />
                </Link>
                <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                    type="button"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul
                        className="navbar-nav me-auto mb-2 mb-lg-0"
                        style={{ width: "100%" }}
                    >
                        <li
                            className="nav-item"
                            style={{
                                width: "25%",
                                textAlign: "center",
                                fontSize: "20px",
                            }}
                        >
                            <Link
                                className="nav-link active"
                                style={{ color: "#663399" }}
                            >
                                Trang chủ
                            </Link>
                        </li>
                        <li
                            className="nav-item dropdown"
                            style={{
                                width: "25%",
                                textAlign: "center",
                                fontSize: "20px",
                            }}
                        >
                            <Link
                                className="nav-link dropdown-toggle"
                                style={{ color: "#663399" }}
                            >
                                Sản phẩm
                            </Link>
                            <ul className="dropdown-menu">
                                <li>

                                    <Link className="dropdown-item" href="/">
                                        Hamster
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="/">
                                        Nhà cho bé
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="/">
                                        Thức ăn cho bé
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="/">
                                        Phụ kiện xinh
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className="nav-item"
                            style={{
                                width: "25%",
                                textAlign: "center",
                                fontSize: "20px",
                            }}
                        >
                            <Link
                                className="nav-link"
                                href="/"
                                style={{ color: "#663399" }}
                            >
                                Cách chăm sóc Hamster
                            </Link>
                        </li>
                        <li
                            className="nav-item"
                            style={{
                                width: "25%",
                                textAlign: "center",
                                fontSize: "20px",
                            }}
                        >
                            <Link
                                className="nav-link disabled"
                                style={{ color: "#663399" }}
                            >
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            aria-label="Search"
                            className="form-control me-2"
                            type="search"
                        />
                        <button
                            className="btn btn-outline-success"
                            style={{
                                fontSize: "20px",
                                color: "white",
                                borderColor: "#663399",
                                background: "#663399",
                                width: "11rem",
                            }}
                            type="submit"
                        >
                            Tìm kiếm
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
