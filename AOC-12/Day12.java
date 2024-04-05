import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class Day12 {
    public static void main(String[] args) {

        ArrayList<String> lines = Day12.readLines("C:\\Users\\acer\\Documents\\377_Web_App_Dev\\AOC-12\\Day12input.txt");

        for (String preLine : lines) {
            String[] line = preLine.split(" ");
            String[] chart = line[0].split("");
            
            int[] numbers = new int[line[1].split(",").length];
            int i = 0;
            for(String num : line[1].split(",")) {
                numbers[i] =  Integer.parseInt(num);
                i++;
            }
            
            checkForFreeSpaces(chart, numbers);
            

        }

    }


    
    public static void checkForFreeSpaces(String[] chart, int[] numbers) {
        String[] yesChart = new String[chart.length];
        String[] noChart = new String[chart.length];
        int[] newNumbers = new int[numbers.length];

        // Records every place a # could appear
        for(int i = 0; i < chart.length; i++) {
            if (chart[i].equals("#")) {
                yesChart[i] = "#";
            }
        }
        for(int i = 0; i < chart.length; i++) {
            if (chart[i].equals(".")) {
                noChart[i] = ".";
            }
        }

        for(int i = 0; i < chart.length; i++) {
            System.out.print(yesChart[i]);
        }
        System.out.println("");
        for(int i = 0; i < chart.length; i++) {
            System.out.print(noChart[i]);
        }
        System.out.println("");

    }
    
    
    
    
    
    
    
    
    
    
    // Line Reader
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
