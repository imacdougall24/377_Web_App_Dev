-- SELECT COUNT(*)
-- 	FROM attendance
-- ;
-- SELECT stu_first_name, stu_last_name, stu_grade_level
-- 	FROM students
-- ;
-- SELECT DISTINCT stu_grade_level
-- 	FROM students
--     ORDER BY stu_grade_level
-- ;





-- SELECT * FROM attendance;
-- SELECT COUNT(*) FROM attendance;
-- -- Use the DISTINCT keyword to find the unique list of values that are in the att_code field
-- SELECT DISTINCT att_code, COUNT(*)
--   FROM attendance
--   GROUP BY att_code
--  ORDER BY 2 DESC
-- ;

-- SELECT stu_first_name, stu_last_name, skl_name, COUNT(*)
--   FROM students
--   JOIN schools ON skl_id = stu_skl_id
--  WHERE stu_grade_level = '12'
--    AND stu_status = 'Active'
-- ORDER BY skl_name
--    ;

-- SELECT skl_name, COUNT(*)
-- FROM students
-- JOIN schools ON skl_id = stu_skl_id
-- WHERE stu_grade_level = '12'
-- AND stu_status = 'Active'
-- GROUP BY skl_name
-- ORDER BY skl_name
-- ;


-- SELECT *
-- FROM students
-- JOIN attendance ON att_stu_id = stu_id
-- WHERE stu_first_name = 'Suzanne'
-- AND stu_last_name = 'Grant'
-- ORDER BY att_date
-- ;

-- SELECT tch_first_name, tch_last_name, tch_department, tch_status
--  FROM teachers
-- WHERE (tch_department = 'ELA' OR tch_department = 'MA')
--   AND tch_status = 'Active'
-- ORDER BY tch_department
--   ;


-- SELECT tch_last_name, tch_first_name, tch_department, cls_course, cls_section, cls_meeting_times, cls_room
--  FROM classes
--  JOIN teachers ON cls_tch_id = tch_id
-- WHERE tch_department in ('ELA', 'MA')
--   AND tch_status = 'Active'
--   AND cls_meeting_times IS NOT NULL
--   AND cls_course <> 'DST'
-- ORDER BY tch_last_name, tch_first_name, cls_meeting_times
--   ;




-- SELECT stu_first_name, stu_last_name, cls_meeting_times
-- FROM students
-- JOIN schedules ON ssc_stu_id = stu_id
-- JOIN classes ON ssc_cls_id = cls_id
-- WHERE stu_status = 'Active'
-- AND stu_grade_level = 9
-- ORDER BY stu_last_name
-- ;









-- SELECT *
--   FROM students
--  WHERE stu_first_name = 'Kristian'
--    AND stu_last_name = 'Saunders'
-- ;

-- -- Unsafe
-- UPDATE students
--    SET stu_address = '287 Cedar Street', stu_city = 'Hanover', stu_zip_code = '02339'
--  WHERE stu_first_name = 'Kristian'
--    AND stu_last_name = 'Saunders'
-- ;

-- -- Safe (only uses unique id's for updates)
-- UPDATE students
--    SET stu_address = '287 Cedar Street', stu_city = 'Hanover', stu_zip_code = '02339'
--  WHERE stu_id = STD000000173cr
-- ;

-- SELECT *
--   FROM schools
-- ;
-- -- NOT SAFE!!!
-- UPDATE schools
--    SET skl_level = 'All levels'
   

-- INSERT INTO students(stu_id, stu_first_name, stu_middle_name, stu_last_name)
-- VALUES ('std456788', 'Ian', 'Lewis', 'MacDougall');
-- SELECT *
-- FROM students
-- ;

-- INSERT INTO attendance(att_id, att_stu_id, att_date, att_code)
-- VALUES ('attX2001992910', 'std456788', '2023-12-13', 'A')
SELECT *
FROM attendance







