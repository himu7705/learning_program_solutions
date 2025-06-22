import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shirt", "Clothing"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        // 🔍 Linear Search
        System.out.println("🔎 Linear Search for 'Phone':");
        Product foundLinear = SearchEngine.linearSearch(products, "Phone");
        System.out.println(foundLinear != null ? foundLinear : "Product not found.");

        // Sort the array for binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // 🔍 Binary Search
        System.out.println("\n🔎 Binary Search for 'Phone':");
        Product foundBinary = SearchEngine.binarySearch(products, "Phone");
        System.out.println(foundBinary != null ? foundBinary : "Product not found.");
    }
}
