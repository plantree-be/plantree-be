package com.example.notificationservice.global.event.forest;

import java.util.UUID;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BudCommentCreatedByTeacherEvent extends ForestEvent {

    private ForestEventType type = ForestEventType.TEA_WRI_BUD;
    private UUID teacherId;
    private UUID studentId;
    private UUID budId;
    private String budName;

}
