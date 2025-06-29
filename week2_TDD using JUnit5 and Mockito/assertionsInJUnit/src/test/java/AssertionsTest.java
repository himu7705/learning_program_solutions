import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // 1. Assert that two values are equal
        assertEquals(5, 2 + 3);

        // 2. Assert that a condition is true
        assertTrue(5 > 3);

        // 3. Assert that a condition is false
        assertFalse(5 < 3);

        // 4. Assert that a value is null
        assertNull(null);

        // 5. Assert that a value is not null
        assertNotNull(new Object());
    }
}
