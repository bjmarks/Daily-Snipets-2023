package code;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class GUI {
    public GUI() {
        JFrame frame = new JFrame();
        JButton aButton = new JButton("A");
        JButton bButton = new JButton("B");
        JButton cButton = new JButton("C");
        JButton dButton = new JButton("D");
        JButton button1 = new JButton("1");
        JButton button2 = new JButton("2");
        JButton button3 = new JButton("3");
        JButton button4 = new JButton("4");
        JButton dollar = new JButton("+$1");
        JButton quarter = new JButton("+¢25");


        JLabel label1 = new JLabel("Choose an item to vend");
        JLabel label2 = new JLabel("\n");
        JPanel panel = new JPanel();
        // button.addActionListener(this);

        panel.setBorder(BorderFactory.createEmptyBorder(50, 100, 50, 100));
        panel.setLayout(new GridLayout(6,2));
        panel.add(label1);
        panel.add(label2);
        panel.add(aButton);
        panel.add(button1);
        panel.add(bButton);
        panel.add(button2);
        panel.add(cButton);
        panel.add(button3);
        panel.add(dButton);
        panel.add(button4);
        panel.add(dollar);
        panel.add(quarter);



        frame.add(panel, BorderLayout.CENTER);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setTitle("Java Vending Machine");
        frame.pack();
        frame.setVisible(true);

    }
    public static void main(String[] args) {
        new GUI();
    }
}