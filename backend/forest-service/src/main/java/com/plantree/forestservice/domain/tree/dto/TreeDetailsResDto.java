package com.plantree.forestservice.domain.tree.dto;

import com.plantree.forestservice.domain.tree.domain.Tree;
import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDate;
import java.util.List;
import lombok.Getter;

@Getter
public class TreeDetailsResDto {

    private String treeName;
    private LocalDate startedAt;
    private LocalDate endedAt;
    private List<BranchResDto> branches;

    //todo 되돌아보기 추가

    @QueryProjection
    public TreeDetailsResDto(Tree tree, List<BranchResDto> branches){
        this.treeName = tree.getName();
        this.startedAt = tree.getStartedAt();
        this.endedAt = tree.getEndedAt();
        this.branches = branches;
    }

}
