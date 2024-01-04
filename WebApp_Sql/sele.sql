-- C.R.U.D. Operation - Delete

-- SELECT *
--   FROM students
--  WHERE stu_first_name = 'Kristian'
--    AND stu_last_name = 'Saunders'
-- ;
-- DELETE FROM students
--  WHERE stu_id = 'STD000000173cr';

-- Check for 'orphan' data
-- SELECT COUNT(*) FROM attendance WHERE att_stu_id = 'STD000000173cr';
-- SELECT COUNT(*) FROM schedules WHERE ssc_stu_id = 'STD000000173cr';
-- SELECT COUNT(*) FROM transcripts WHERE trn_stu_id = 'STD000000173cr';

-- DELETE FROM attendance WHERE att_stu_id = 'STD000000173cr';
-- DELETE FROM schedules WHERE ssc_stu_id = 'STD000000173cr';
-- DELETE FROM transcripts WHERE trn_stu_id = 'STD000000173cr';

-- CREATE TABLE `awards` (
--   `awa_id` 	  INT 			NOT NULL AUTO_INCREMENT,
--   `awa_stu_id`VARCHAR(45) 	NOT NULL,
--   `awa_date`  DATETIME 		NULL,
--   `awa_name`  VARCHAR(100) 	NULL,
--   PRIMARY KEY (`awa_id`)
--   );

-- SELECT *
--   FROM students
--  WHERE stu_first_name = 'John'
--    AND stu_last_name = 'Whelan'
-- ;

-- INSERT INTO awards (awa_stu_id, awa_date, awa_name)
-- VALUES ('stdX2000003405', '2020-09-20', 'Spelling Bee')
-- ;


-- CREATE TABLE `sis`.`fee` (
--   `fee_id` INT NOT NULL AUTO_INCREMENT,
--   `fee_stu_id` VARCHAR(14) NOT NULL,
--   `fee_owed` DECIMAL(5,2) NULL,
--   `fee_paid` DECIMAL(5,2) NULL,
--   `fee_date` DATETIME NULL,
--   `fee_name` VARCHAR(100) NULL,
--   PRIMARY KEY (`fee_id`));



-- SELECT DISTINCT cls_school_year
--   FROM 			classes
-- ;





-- SELECT *
-- FROM attendance
-- JOIN students ON att_stu_id = stu_id
-- WHERE stu_first_name = 'Melissa'
-- AND stu_last_name = 'Langley'
-- ; 

-- SELECT DISTINCT tch_first_name, tch_last_name
-- FROM teachers
-- JOIN classes ON cls_tch_id = tch_id
-- WHERE cls_course LIKE 'GEOMETRY%'
-- GROUP BY tch_first_name, tch_last_name
-- ;


-- SELECT DISTINCT stu_first_name, stu_last_name
-- FROM students
-- JOIN attendance ON stu_id = att_stu_id
-- WHERE att_date LIKE '2022-10%'
-- AND att_code = 'A'
-- ORDER BY stu_last_name, stu_first_name
-- ;


SELECT *
FROM schedules
JOIN students ON ssc_stu_id = stu_id
JOIN classes ON ssc_cls_id = cls_id
WHERE cls_course LIKE 'GEOMETRY H%'
  AND cls_section = '02'
;
