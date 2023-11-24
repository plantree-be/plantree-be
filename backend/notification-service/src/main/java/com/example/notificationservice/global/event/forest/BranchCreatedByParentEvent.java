package com.example.notificationservice.global.event.forest;

import java.util.UUID;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BranchCreatedByParentEvent extends ForestEventDetail {

    private UUID studentId;
    private UUID parentId;
    private UUID branchId;
    private String branchName;

}
