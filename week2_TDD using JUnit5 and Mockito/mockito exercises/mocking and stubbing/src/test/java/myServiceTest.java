import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // 1. Create a mock of ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // 2. Stub getData() to return a fake value
        when(mockApi.getData()).thenReturn("Mock Data");

        // 3. Inject mock into MyService
        MyService service = new MyService(mockApi);

        // 4. Act & Assert
        String result = service.fetchData();
        assertEquals("Mock Data", result); // verifies the output
    }
}
