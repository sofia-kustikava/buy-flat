package com.coursework.buyflat.service;

import com.coursework.buyflat.dto.CreateFlatDto;
import com.coursework.buyflat.entity.*;
import com.coursework.buyflat.repo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FlatService {
    private final RoomRepo roomRepo;
    private final StreetRepo streetRepo;
    private final FlatRepo flatRepo;
    private final BathroomRepo bathroomRepo;

    public FlatEntity createFlat(CreateFlatDto flatDto) {
        StreetEntity street = streetRepo.findById(flatDto.getStreet().getId()).orElseThrow(() -> new RuntimeException());
        FlatEntity flat = FlatEntity.builder()
                .street(street)
                .numberFlat(flatDto.getNumberFlat())
                .area(flatDto.getArea())
                .room(roomRepo.getByCountRooms(flatDto.getRoom().getCountRooms()))
                .bathroom(bathroomRepo.findByBathroomName(flatDto.getBathroom().getBathroomName()))
                .build();
        return flatRepo.save(flat);
    }
}
