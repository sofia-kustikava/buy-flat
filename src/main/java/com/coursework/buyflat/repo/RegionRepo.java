package com.coursework.buyflat.repo;

import com.coursework.buyflat.entity.CityEntity;
import com.coursework.buyflat.entity.RegionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RegionRepo extends JpaRepository<RegionEntity, Long> {
    List<RegionEntity> findAllByCity(CityEntity city);
}
