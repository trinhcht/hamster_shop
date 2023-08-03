import React, {useEffect, useState} from "react";
import "./detail.css"
import {useParams} from "react-router";
import {findAll, findById} from "../../service/ProductService";
import Slider from "react-slick";
import {Field, Form, Formik} from "formik";
import {saveCart} from "../../service/CartService";
import {toast} from "react-toastify";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";


export function Detail() {
    const param = useParams()
    const [product, setProduct] = useState({})
    const [listProduct, setListProduct] = useState([])
    const [type, setType] = useState(0)
    const username = localStorage.getItem("username")
    useEffect(()=>{
        document.title="Chi tiết"
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Số lượng item hiển thị trên mỗi slide
        slidesToScroll: 5,
    };
    const handlePlus = () => {
        let qtt = document.getElementById("qttPro").value
        if (qtt < product.qtt) {
            qtt++;
            document.getElementById("qttPro").value = qtt;
        }
    }
    const handleMinus = () => {
        let qtt = document.getElementById("qttPro").value
        if (qtt > 1) {
            qtt--;
            document.getElementById("qttPro").value = qtt;
        }
    }
    const handleAddCart = async () => {
        const qtt=document.getElementById("qttPro").value;
        if (qtt<=0){
            toast("sản phẩm đã hết hàng")
        }else {
            const cartDTO = {
                idPro: product.id,
                username: username,
                qtt: document.getElementById("qttPro").value
            }
            await saveCart(cartDTO)
            toast("thêm vào giỏ hàng thành công")
        }

    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await findAll();
            setListProduct(result)
            const result1 = await findById(param.id)
            setProduct(result1)
            setType(result1.typeProduct.id)
        }
        fetchApi()
    }, [])
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        product && listProduct && <>
            <Header/>
            <div className="bodywrap">
                <section className="bread-crumb"
                         style={{
                             background: "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                             backgroundImage: "url(https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/breadcrumb.jpg?1686556941849) ,linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))"
                         }}>
                    <div className="container">
                        <div className="title-bread-crumb">
                            {product.name}
                        </div>
                    </div>
                </section>
                <section className="product layout-product">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 ">
                                <div className="details-product">
                                    <div className="row">
                                        <div className="product-detail-left product-images col-12 col-md-6 col-lg-4">
                                            <div className="product-image-block relative">
                                                <div
                                                    className="swiper-container gallery-top swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide swiper-slide-active"
                                                             style={{width: "458px"}}>
                                                            <img
                                                                src={product.image}
                                                                data-image={product.image}
                                                                className="img-responsive mx-auto d-block swiper-lazy swiper-lazy-loaded"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" col-12 col-md-6 col-lg-4">
                                            <div className="details-pro">
                                                <h1 className="title-product">{product.name}</h1>
                                                <div className="inventory_quantity">
                                                    <div className="thump-break">
                                                        <span className="mb-break inventory">
                                                            <span className="stock-brand-title">Số lượng : </span>
                                                            <span className="a-stock">
                                                                <span className="a-stock">{product.qtt}</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="reviews_details_product ">
                                                    <div
                                                        className="sapo-product-reviews-badge sapo-product-reviews-badge-detail">
                                                    </div>
                                                </div>
                                                <div className="form-inline">
                                                    <div className="price-box clearfix">
                                                        <span className="special-price">
                                                            <span
                                                                className="price product-price">{VND.format(product.price)}</span>
                                                        </span>
                                                    </div>
                                                    <div className="form-product">
                                                        <div className="clearfix form-group">
                                                            <div className="flex-quantity">
                                                                <div className="custom custom-btn-number show">
                                                                    <label className="sl section">Số lượng
                                                                        : </label>
                                                                    <div
                                                                        className="input_number_product form-control">
                                                                        <button
                                                                            onClick={() => handleMinus()}
                                                                            className="btn_num num_1 button button_qty">-
                                                                        </button>
                                                                        <input name="qtt"
                                                                               type="text" maxLength="3"
                                                                               value={product.qtt>0?1:0}
                                                                               id="qttPro"
                                                                               className="form-control prd_quantity"/>
                                                                        <button
                                                                            onClick={() => handlePlus()}
                                                                            className="btn_num num_2 button button_qty">+
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="btn-mua button_actions clearfix">
                                                                    <button
                                                                        onClick={()=>handleAddCart()}
                                                                        className="btn btn_base normal_button btn_add_cart add_to_cart btn-cart">
                                                                        <span className="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 viewBox="0 0 40 40">
                                                                                <defs></defs>
                                                                                <g>
                                                                                    <path className="cls-1"
                                                                                          d="M35.91,36.17,33.24,10.75a1,1,0,0,0-1-.94h-5V8.67a6.47,6.47,0,1,0-12.93,0V9.81h-5a1.05,1.05,0,0,0-1,.94L5.52,36.17a1,1,0,0,0,.93,1.15H34.87a1,1,0,0,0,1.05-1A.41.41,0,0,0,35.91,36.17ZM16.35,8.67a4.38,4.38,0,1,1,8.75,0V9.81H16.35ZM7.73,35.24l2.45-23.33h4.07v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91H25.1v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91h4.07l2.45,23.33Z"/>
                                                                                </g>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="text">
                                                                            <span className="txt-main text_1">Thêm vào giỏ hàng</span>
                                                                            <span className="text_2">Giao hàng nhanh chóng</span>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="khuyen-mai">
                                                    <div className="title">
                                                        <img width="64" height="64"
                                                             src="https://bizweb.dktcdn.net/100/485/131/themes/906771/assets/giftbox.png?1686556941849"
                                                             alt="vouver"/>
                                                        <span>Thông tin chi tiết</span>
                                                    </div>
                                                    <div className="content">
                                                        {product.detail}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-12 col-lg-4 content-pro">
                                            <div className="product-right">
                                                <div className="chinhsach-pro">
                                                    <div className="title-head">Chính sách cửa hàng <img
                                                        className="lazyload loaded"
                                                        src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                        data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                        alt="title" data-was-processed="true"
                                                    /></div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="item">
                                                                <img width="40" height="40"
                                                                     src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/chinhsach_1.png?1686556941849"
                                                                     alt="Miễn phí vẫn chuyển"/>
                                                                <div className="text">
                                                                    <span className="title">Miễn phí vẫn chuyển</span>
                                                                    <span className="des">Cho tất cả đơn hàng trong nội thành Hồ Chí Minh</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="item">
                                                                <img width="40" height="40"
                                                                     src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/chinhsach_2.png?1686556941849"
                                                                     alt="Miễn phí đổi trả"/>
                                                                <div className="text">
                                                                    <span className="title">Miễn phí đổi - trả</span>
                                                                    <span className="des">Đối với sản phẩm lỗi sản xuất hoặc vận chuyển</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="item">
                                                                <img width="40" height="40"
                                                                     src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/chinhsach_3.png?1686556941849"
                                                                     alt="Hỗ trợ nhanh chóng"/>
                                                                <div className="text">
                                                                    <span className="title">Hỗ trợ nhanh chóng</span>
                                                                    <span className="des">Gọi Hotline: 0961052275 để được hỗ trợ ngay</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="item">
                                                                <img width="40" height="40"
                                                                     src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/chinhsach_4.png?1686556941849"
                                                                     alt="Ưu đãi combo"/>
                                                                <div className="text">
                                                                    <span className="title">Ưu đãi combo</span>
                                                                    <span className="des">Mua theo combo,mùa càng mua nhiều giá càng rẻ</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-12 col-xl-12">
                                            <div className="productRelate product-lq">
                                                <div className="group_title_index">
                                                    <h3 className="title">
                                                        <div className="title-name">
                                                            Sản phẩm liên quan <img className="lazyload loaded"
                                                                                    src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                                                    data-src="//bizweb.dktcdn.net/100/485/131/themes/906771/assets/leaf.png?1686556941849"
                                                                                    alt="title"
                                                                                    data-was-processed="true"/>

                                                        </div>

                                                    </h3>
                                                </div>
                                                <div
                                                    className="product-relate-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                                    {/*<div className="swiper-wrapper"*/}
                                                    {/*     style={{transform: "translate3d(0px, 0px, 0px);"}}>*/}
                                                    <Slider {...settings}>
                                                        {listProduct.filter(value => value.typeProduct.id === type).map((value, index) => (
                                                            <div>
                                                                <Formik
                                                                    initialValues={{
                                                                        idPro: value.id,
                                                                        username: username,
                                                                        qtt: 1
                                                                    }}
                                                                    onSubmit={(values) => {
                                                                        console.log(values.qtt)
                                                                        if (value.qtt<=0){
                                                                            toast("sản phẩm đã hết hàng")
                                                                        }else {
                                                                            const save = async () => {
                                                                                await saveCart(values)
                                                                                toast("thêm vào giỏ hàng thành công")
                                                                            }
                                                                            save()
                                                                        }
                                                                    }}
                                                                >
                                                                    <Form>
                                                                        <div
                                                                            className="swiper-slide swiper-slide-active"
                                                                            style={{
                                                                                width: "90%",
                                                                                marginRight: "5px"
                                                                            }}>
                                                                            <div className=" item_product_main">
                                                                                <div
                                                                                    className="variants product-action">
                                                                                    <div className="product-thumbnail">
                                                                                        <a href={`/detail/${value.id}`}
                                                                                           className="image_thumb scale_hover">
                                                                                            <img width="234"
                                                                                                 height="234"
                                                                                                 className="lazyload image1 loaded"
                                                                                                 src={value.image}
                                                                                                 data-src={value.image}
                                                                                                 data-was-processed="true"/>
                                                                                        </a>
                                                                                        <div className="action">
                                                                                            <button
                                                                                                type="submit"
                                                                                                className="btn-cart btn-views"
                                                                                                title="Thêm vào giỏ hàng">
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 576 512">
                                                                                                    <path fill="#fff"
                                                                                                          d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
                                                                                                </svg>
                                                                                            </button>
                                                                                            <a href=""
                                                                                               title="Xem chi tiết"
                                                                                               data-handle="kim-chi-cai-thao-cat-lat-bibigo-ong-kim-s-goi"
                                                                                               className="quick-view btn-views">
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 512 512">
                                                                                                    <path fill="#fff"
                                                                                                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                                                                                </svg>
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="product-info">
                                                                                            <h3 className="product-name">
                                                                                                <a href=""
                                                                                                   className="line-clamp line-clamp-2"
                                                                                                   title={value.name}>{value.name}</a>
                                                                                            </h3>
                                                                                            <div
                                                                                                className="price-box">{VND.format(value.price)}
                                                                                                {value.qtt>0? (<span className="compare-price">Số lượng : {value.qtt}</span>):(<span className="compare-price">Hết hàng</span>)}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Form>
                                                                </Formik>

                                                            </div>
                                                        ))}

                                                    </Slider>
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}