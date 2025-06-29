DECLARE
  v_due_date DATE;
  v_name     VARCHAR2(100);
BEGIN
  FOR loan_rec IN (
    SELECT l.due_date, c.name
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE("Dear " || loan_rec.name || ", your loan is approaching its due date: " || TO_CHAR(loan_rec.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;
