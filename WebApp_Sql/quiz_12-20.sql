-- Q1: Write a skeleton SELECT statement with all 8 clauses
--     we have learned in this class (8 points)
-- A1:
-- --------------------------------------------------
-- SELECT data_column AS `new_Column_name`, COUNT(data_val) AS `Count_rows_returned`
--   FROM name_of_table
--   JOIN other_column_name ON first_column_value = second_column_value
--  WHERE value_condition LIKE '%some_phrase%'
--    AND another_condition = 'value'
--     OR other_condition IN (value_one, value_etc)
--  GROUP BY some_column_value
-- HAVING some_conditon
--  ORDER BY some_column_value DESC
-- ;
-- --------------------------------------------------



-- Q2: What is Rose Blackburn's grade level? (1 points)
-- A2:  Grade 9
-- --------------------------------------------------
SELECT stu_grade_level
FROM students
WHERE stu_first_name = 'Rose'
  AND stu_last_name = 'Blackburn'
;
-- --------------------------------------------------


-- Q3: What were Taylor Keil's four term and final grades
--     in ALGEBRA 1? (2 points)
-- A3: T1: A | T2: B- | T3: A | T4: B+ | FN: B
-- --------------------------------------------------
SELECT trn_course, trn_term1_grade, trn_term2_grade, trn_term3_grade, trn_term4_grade, trn_final
FROM students
JOIN transcripts ON stu_id = trn_stu_id
WHERE stu_first_name = 'Taylor'
  AND stu_last_name = 'Keil'
  AND trn_course = 'ALGEBRA 1'
;
-- --------------------------------------------------


-- Q4: How many active students at Adams Elementary School
--     are in homeroom 21? (2 points)
-- A4: 19
-- --------------------------------------------------
SELECT DISTINCT COUNT(stu_id)
FROM students
WHERE stu_homeroom = '21'
  AND stu_status = 'Active'
;
-- --------------------------------------------------

-- Q5: How many active elementary school students were
--     absent in September 2023? (3 points)
-- A5: 274
-- --------------------------------------------------
SELECT COUNT( DISTINCT stu_id)
 FROM students
 JOIN attendance ON stu_id = att_stu_id
WHERE stu_grade_level IN ( '01', '02', '03', '04')
  AND stu_status = 'Active'
  AND att_code = 'A'
  AND att_date LIKE '2023-09%'
;

-- --------------------------------------------------

-- Q6: How many section of History 6 does Sebastian
--     Matthews teach? (2 points)
-- A6: 4
-- --------------------------------------------------
SELECT COUNT(*)
FROM teachers
JOIN classes ON tch_id = cls_tch_id
WHERE tch_first_name = 'Sebastian'
AND tch_last_name = 'Matthews'
AND cls_course = 'History 6'
;
-- --------------------------------------------------

-- Q7: How many sections of History 6 are being taught
--     overall and what is the total enrollment across
--     all those sections? (3 points)
-- A7: NUM - 12 | total enrollment - 252
-- --------------------------------------------------
SELECT SUM(cls_enrollment_total)
FROM classes
WHERE cls_course = 'History 6'
;



-- --------------------------------------------------

-- Q8: What is the first student, alphabetically by last
--     name, on the roster for History 6, section 11?
--     (5 points)
-- A8: Emilia Thejesvi Amis
-- --------------------------------------------------
SELECT *
FROM classes
JOIN schedules ON cls_id = ssc_cls_id
JOIN students ON ssc_stu_id = stu_id
WHERE cls_course = 'History 6'
AND cls_section = '11'
ORDER BY stu_last_name
;
-- --------------------------------------------------

-- Q9: There was a new hire in the guidance department.
--     Write an UPDATE statement that will change students
--     who have counselor 'McDonnell, Kristen' to
--     'Rodriguez, Oscar' (2 points)
-- A9:
-- --------------------------------------------------
UPDATE students
SET stu_counselor = 'Rodriguez, Oscar'
WHERE stu_counselor = 'McDonnell, Kristen'
;
-- SELECT stu_counselor
-- FROM students
-- ;

-- --------------------------------------------------

-- Q10: There was bad weather on the morning of Jan 26, 2022.
--      Write a DELETE statement that will remove all tardy
--      attendance records (code = 'T') on that date. (2 points)
-- A10:
-- --------------------------------------------------
DELETE FROM attendance
WHERE att_date LIKE '2022-01-26%'
AND att_code = 'T'
;


-- --------------------------------------------------
