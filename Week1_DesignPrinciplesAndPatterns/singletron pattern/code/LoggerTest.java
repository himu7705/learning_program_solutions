public class LoggerTest {
    public static void main(String[] args) {
        // Get two references to Logger
        Logger logger1 = Logger.getInstance(); 
        Logger logger2 = Logger.getInstance();

        // Use logger
        logger1.log("This is the first log.");
        logger2.log("This is the second log.");

        // Check if both references point to the same object
        if (logger1 == logger2) {
            System.out.println("Both loggers are the same instance.");
        } else {
            System.out.println("Different instances. Singleton failed.");
        }
    }
}
