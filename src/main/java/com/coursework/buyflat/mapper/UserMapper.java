package com.coursework.buyflat.mapper;

import com.coursework.buyflat.dto.UserDto;
import com.coursework.buyflat.entity.UserEntity;
import org.mapstruct.Mapper;

@Mapper
public interface UserMapper {
    UserDto entityToDto(UserEntity user);
}
