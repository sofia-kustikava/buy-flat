package com.coursework.buyflat.service;

import com.coursework.buyflat.dto.StreetDto;
import com.coursework.buyflat.mapper.StreetMapper;
import com.coursework.buyflat.repo.RegionRepo;
import com.coursework.buyflat.repo.StreetRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StreetService {
    private final StreetMapper mapper;
    private final RegionRepo regionRepo;
    private final StreetRepo repo;

    public List<StreetDto> getAll() {
        return mapper.streetsToDtos(repo.findAll());
    }

    public List<StreetDto> getByRegionId(Long id) {
        return mapper.streetsToDtos(repo.findAllByRegion(regionRepo.findById(id).orElseThrow()));
    }
}
