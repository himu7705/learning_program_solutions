BEGIN
  FOR customer IN (SELECT customer_id FROM customers WHERE age > 60) LOOP
    UPDATE loans
    SET interest_rate = interest_rate - 1
    WHERE customer_id = customer.customer_id;
  END LOOP;
  
  COMMIT;
END;
