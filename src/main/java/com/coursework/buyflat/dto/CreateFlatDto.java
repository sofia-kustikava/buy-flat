package com.coursework.buyflat.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateFlatDto {
    private StreetDto street;
    private CityDto city;
    private BathroomDto bathroom;
    private RoomDto room;
    private String numberFlat;
    private Double area;
}
