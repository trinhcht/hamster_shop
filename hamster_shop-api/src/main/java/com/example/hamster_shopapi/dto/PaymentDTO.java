package com.example.hamster_shopapi.dto;

public class PaymentDTO {
    private String totalPrice;

    public PaymentDTO() {
    }

    public PaymentDTO(String totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }
}
