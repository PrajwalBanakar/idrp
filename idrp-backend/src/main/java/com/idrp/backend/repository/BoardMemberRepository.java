package com.idrp.backend.repository;

import com.idrp.backend.entity.BoardMember;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardMemberRepository extends JpaRepository<BoardMember, Long> {

    boolean existsByEmail(String email);

    boolean existsByEmailAndIdNot(String email, Long id);

    Optional<BoardMember> findByEmail(String email);

    Page<BoardMember> findAllByActiveTrue(Pageable pageable);
}