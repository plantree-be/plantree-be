package com.plantree.forestservice.domain.branch.application.repository;

import com.plantree.forestservice.domain.branch.domain.Branch;
import com.plantree.forestservice.domain.commons.dto.BranchSearchProjectionDto;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BranchRepository {

    Branch save(
            Branch branch);

    Optional<Branch> findById(UUID id);

    void deleteById(UUID id);

    List<Branch> findBranchesWithBudsByTreeId(UUID treeId);

    List<Branch> findBranchesWithBudsAndSeedsByTreeId(UUID treeId);

    void saveAll(List<Branch> branches);

    List<Branch> findBranchesWithSeedsByTreeId(UUID treeId);

    List<BranchSearchProjectionDto> findByTreeId(String treeId);
}
