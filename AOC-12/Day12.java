import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class Day12 {
    public static void main(String[] args) {

        ArrayList<String> lines = Day12.readLines("C:\\Users\\acer\\Documents\\377_Web_App_Dev\\AOC-12\\Day12input.txt");

        for (String preLine : lines) {
            String[] line = preLine.split("");

            

        }

    }

    private int countPattern(String pattern, int[] groups) {

        int location = pattern.indexOf("?");
        // Base Case
        if (location == -1) {
            if(validatePattern(pattern, groups)) {
                return 1;
            }
            return 0;
        }

        String start = pattern.substring(0, location);
        String end = pattern.substring(location + 1);

        return countPattern(start + "#" + end, groups) + countPattern(start + "." + end, groups);
    }

    private boolean validatePattern(String pattern, int[] groups) {
        // Calc group size

    }


    public static ArrayList<String> readLines(String fileName) {
        ArrayList<String> lines = new ArrayList<String>();
        try {
            File Day12Input = new File(fileName);
            Scanner input = new Scanner(Day12Input);

            while (input.hasNextLine()) {
                String data = input.nextLine();
                lines.add(data);
            }

            input.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return lines;
    }
}
