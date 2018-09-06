import java.util.Arrays;
import java.util.List;

public class ArrayToList {

    public static void main(String[] args) {

        String[] array = {"a", "b"};
        List<String> list = Arrays.asList(array);

        System.out.println(list);

    }
}