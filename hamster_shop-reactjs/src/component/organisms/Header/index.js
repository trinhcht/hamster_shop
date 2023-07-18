import React from 'react'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#ffcce5", height: "6rem", }}>
            <div class="container-fluid">
                <a class="navbar-brand" href="/" style={{ color: "white", width: "10%" }}>
                    <img class="logo-img" width="100%" alt="" src="../image/Logo.png" /></a>
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ width: "100%" }}>
                        <li class="nav-item" style={{ width: "25%", textAlign: "center", fontSize: "20px" }}>
                            <a aria-current="page" class="nav-link active" href="/" style={{ color: "#663399" }}>Trang chủ</a>
                        </li>
                        <li class="nav-item dropdown" style={{ width: "25%", textAlign: "center", fontSize: "20px" }}>
                            <a aria-expanded="false" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/"
                                role="button" style={{ color: "#663399" }}>
                                Sản phẩm
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Hamster</a></li>
                                <li><a class="dropdown-item" href="/">Nhà cho bé</a></li>
                                <li><a class="dropdown-item" href="/">Thức ăn cho bé</a></li>
                                <li><a class="dropdown-item" href="/">Phụ kiện xinh</a></li>
                            </ul>
                        </li>
                        <li class="nav-item" style={{ width: "25%", textAlign: "center", fontSize: "20px" }}>
                            <a class="nav-link" href="/" style={{ color: "#663399" }}>Cách chăm sóc Hamster</a>
                        </li>
                        <li class="nav-item" style={{ width: "25%", textAlign: "center", fontSize: "20px" }}>
                            <a class="nav-link disabled" href="/" style={{ color: "#663399" }}>Liên hệ</a>
                        </li>
                    </ul >
                    <form class="d-flex" role="search">
                        <input aria-label="Search" class="form-control me-2" type="search" />
                        <button class="btn btn-outline-success"
                            style={{ fontSize: "20px", color: "white", borderColor: "#663399", background: "#663399", width: "11rem" }}
                            type="submit">Tìm kiếm
                        </button>
                    </form >
                </div >
            </div >
        </nav >
    )
}

export default Header
