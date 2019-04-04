package com.disciplinebe.disciplinebe.database.repository;


import com.disciplinebe.disciplinebe.database.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by rajeevkumarsingh on 27/06/17.
 */

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

    @Query(value = "Select * FROM alerts as al WHERE al.whCode = ?1 AND al.created >= ?2 ", nativeQuery = true)
    List<Note> findAllStartingFrom(String whCode, Timestamp from);

    @Query(value = "Select * FROM alerts as al WHERE al.barcode = ?1 AND al.whCode = ?2 ORDER BY al.created DESC LIMIT 1", nativeQuery = true)
    Note findMostRecentByBarcode(String barcode, String whCode);

}
