package com.coursework.buyflat.dto;

import com.coursework.buyflat.entity.OrderStatus;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {
    private Long id;
    private RealtorDto realtor;
    private FlatDto flat;
    private ClientDto client;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate postedDate;
    private OrderStatus status;
    private Double price;
}
