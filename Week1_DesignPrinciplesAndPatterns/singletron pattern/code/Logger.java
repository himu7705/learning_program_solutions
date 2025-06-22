public class Logger {

    //made a private static instance for the logger 
    private static Logger instance;

    // we are using the priate thing to make sure no other external initialisation
    private Logger() {
        System.out.println("Logger Initialized");
    }

    // method to acess the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();  // lazy initialization
        }
        return instance;
    }

    //sample log method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
