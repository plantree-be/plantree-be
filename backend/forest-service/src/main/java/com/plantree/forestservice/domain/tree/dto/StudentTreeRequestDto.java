package com.plantree.forestservice.domain.tree.dto;

import java.util.List;
import java.util.UUID;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class StudentTreeRequestDto {

    private List<UUID> studentIds;
}
