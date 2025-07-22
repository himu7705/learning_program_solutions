import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class MyServiceTest {

    @Test
    void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        service.fetchData();
        verify(mockApi).getData();
    }

    @Test
    void testFetchDataReturnsApiResult() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("mocked data");
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        assertEquals("mocked data", result);
        verify(mockApi).getData();
    }

    @Test
    void testFetchDataWithNullReturn() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn(null);
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        assertNull(result);
        verify(mockApi).getData();
    }
}

// You need to provide a stub for ExternalApi for compilation:
interface ExternalApi {
    String getData();
}
