import React, { useState } from 'react';
import './HandsOnLabs.css';
import QuestionDetail from './QuestionDetail';

const randomQuestions = {
    java: [
        { id: 1, title: "Reverse String", question: "Given a string, write a Java function to reverse it. You need to reverse the string in-place and return the reversed string.", example: "Input: 'hello', Output: 'olleh'" },
        { id: 2, title: "Stack Implementation", question: "Implement a stack in Java using arrays. The stack should have push, pop, and peek operations.", example: "Operations: push(1), push(2), pop() -> returns 2, peek() -> returns 1" },
        { id: 3, title: "Palindrome Check", question: "Write a Java function to check if a given string is a palindrome.", example: "Input: 'racecar', Output: true" },
        { id: 4, title: "Factorial Calculation", question: "Write a function to calculate the factorial of a number in Java.", example: "Input: 5, Output: 120" },
        { id: 5, title: "Queue Implementation", question: "Implement a queue using linked lists in Java.", example: "Operations: enqueue(1), enqueue(2), dequeue() -> returns 1" },
        { id: 6, title: "Maximum Element in Array", question: "Write a Java function to find the maximum element in an array.", example: "Input: [1, 3, 7, 2, 5], Output: 7" },
        { id: 7, title: "Bubble Sort", question: "Implement the bubble sort algorithm in Java to sort an array of integers.", example: "Input: [5, 1, 4, 2, 8], Output: [1, 2, 4, 5, 8]" },
        { id: 8, title: "Second Largest Element", question: "Write a Java function to find the second largest element in an array.", example: "Input: [10, 20, 4, 45, 99], Output: 45" },
        { id: 9, title: "Prime Number Check", question: "Write a Java function to check if a number is prime.", example: "Input: 7, Output: true" },
        { id: 10, title: "Merge Two Sorted Arrays", question: "Write a Java function to merge two sorted arrays into one sorted array.", example: "Input: [1, 3, 5], [2, 4, 6], Output: [1, 2, 3, 4, 5, 6]" },
        { id: 11, title: "GCD Calculation", question: "Write a Java function to find the greatest common divisor (GCD) of two numbers.", example: "Input: 54, 24, Output: 6" },
        { id: 12, title: "Decimal to Binary Conversion", question: "Write a Java function to convert a decimal number to binary.", example: "Input: 5, Output: 101" },
        { id: 13, title: "Binary Search Implementation", question: "Implement binary search in Java to find an element in a sorted array.", example: "Input: [1, 2, 3, 4, 5], Target: 4, Output: 3 (index)" },
        { id: 14, title: "Longest Substring Without Repeating Characters", question: "Write a Java function to find the length of the longest substring without repeating characters.", example: "Input: 'abcabcbb', Output: 3 (substring 'abc')" },
        { id: 15, title: "Linked List Operations", question: "Implement a singly linked list in Java and perform basic operations like insertion, deletion, and traversal.", example: "Operations: insert(1), insert(2), delete(1), traverse() -> returns 2" },
        { id: 16, title: "Count Vowels in a String", question: "Write a Java function to count the number of vowels in a given string.", example: "Input: 'hello', Output: 2" },
        { id: 17, title: "Depth-First Search (DFS)", question: "Implement depth-first search (DFS) on a graph in Java.", example: "Input: Graph adjacency list, Start: 0, Output: DFS traversal order" },
        { id: 18, title: "Breadth-First Search (BFS)", question: "Implement breadth-first search (BFS) on a graph in Java.", example: "Input: Graph adjacency list, Start: 0, Output: BFS traversal order" },
        { id: 19, title: "First Non-Repeating Character", question: "Write a Java function to find the first non-repeating character in a string.", example: "Input: 'swiss', Output: 'w'" },
        { id: 20, title: "Power Calculation Using Recursion", question: "Write a Java function to calculate the power of a number using recursion.", example: "Input: base=2, exponent=3, Output: 8" },
        { id: 21, title: "Simple Calculator", question: "Implement a simple calculator in Java that can perform basic operations (addition, subtraction, multiplication, division).", example: "Input: 2 + 3, Output: 5" },
        { id: 22, title: "Lowest Common Ancestor in BST", question: "Write a Java function to find the lowest common ancestor of two nodes in a binary search tree.", example: "Input: BST, Node1: 2, Node2: 8, Output: 6 (root)" },
        { id: 23, title: "Character Frequency Count", question: "Write a Java function to count the number of occurrences of each character in a string.", example: "Input: 'hello', Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}" },
        { id: 24, title: "Reverse Linked List", question: "Write a Java function to reverse a linked list.", example: "Input: 1 -> 2 -> 3 -> null, Output: 3 -> 2 -> 1 -> null" },
        { id: 25, title: "Cycle Detection in Linked List", question: "Write a Java function to detect a cycle in a linked list.", example: "Input: 1 -> 2 -> 3 -> 2 (cycle), Output: true" },
        { id: 26, title: "Merge Sort Implementation", question: "Implement the merge sort algorithm in Java to sort an array of integers.", example: "Input: [38, 27, 43, 3, 9, 82, 10], Output: [3, 9, 10, 27, 38, 43, 82]" },
        { id: 27, title: "Quick Sort Implementation", question: "Implement the quick sort algorithm in Java to sort an array of integers.", example: "Input: [10, 7, 8, 9, 1, 5], Output: [1, 5, 7, 8, 9, 10]" },
        { id: 28, title: "Balanced Binary Tree Check", question: "Write a Java function to check if a binary tree is height-balanced.", example: "Input: Binary tree, Output: true if balanced, false otherwise" },
        { id: 29, title: "Insertion Sort Implementation", question: "Implement the insertion sort algorithm in Java to sort an array of integers.", example: "Input: [12, 11, 13, 5, 6], Output: [5, 6, 11, 12, 13]" },
        { id: 30, title: "Longest Increasing Subsequence", question: "Write a Java function to find the longest increasing subsequence in an array.", example: "Input: [10, 9, 2, 5, 3, 7, 101, 18], Output: 4 (subsequence: [2, 3, 7, 101])" },
        { id: 31, title: "Max Heap Implementation", question: "Implement a max heap in Java and perform basic operations like insertion, deletion, and heapify.", example: "Operations: insert(3), insert(5), extractMax() -> returns 5" },
        { id: 32, title: "Infix to Postfix Conversion", question: "Write a Java function to convert an infix expression to postfix notation.", example: "Input: 'a+b*(c^d-e)^(f+g*h)-i', Output: 'abcd^e-fgh*+^*+i-'" },
        { id: 33, title: "Binary Search Tree Implementation", question: "Implement a binary search tree in Java and perform basic operations like insertion, deletion, and search.", example: "Operations: insert(5), insert(3), insert(7), search(3) -> returns true" },
        { id: 34, title: "Diameter of Binary Tree", question: "Write a Java function to find the diameter of a binary tree.", example: "Input: Binary tree, Output: 4 (diameter is the longest path between any two nodes)" },
        { id: 35, title: "Dijkstra’s Shortest Path Algorithm", question: "Implement Dijkstra’s algorithm for finding the shortest path in a graph in Java.", example: "Input: Graph, start node, Output: Shortest path to all nodes" },
    ],    
    frontend: [
        { id: 1, title: "Responsive Navbar", question: "Create a responsive navigation bar using HTML and CSS that collapses into a hamburger menu on smaller screens.", example: "The navbar should have links like Home, About, Contact. On mobile, it should collapse into a hamburger icon." },
        { id: 2, title: "Simple Calculator", question: "Create a simple calculator using JavaScript, HTML, and CSS. The calculator should support addition, subtraction, multiplication, and division.", example: "Input: 5 + 3, Output: 8" },
        { id: 3, title: "To-Do List", question: "Build a to-do list application using JavaScript.", example: "The app should allow users to add, remove, and mark tasks as complete." },
        { id: 4, title: "Modal Popup", question: "Implement a modal popup using HTML, CSS, and JavaScript.", example: "The modal should appear in the center of the screen and have a close button." },
        { id: 5, title: "Image Gallery", question: "Create a responsive image gallery using HTML and CSS.", example: "The gallery should display images in a grid layout that adjusts for screen size." },
        { id: 6, title: "Countdown Timer", question: "Create a countdown timer using JavaScript, HTML, and CSS.", example: "The timer should count down from a specified number of seconds." },
        { id: 7, title: "Tabs Interface", question: "Implement a tabs interface using HTML, CSS, and JavaScript.", example: "The interface should allow switching between different content sections using tabs." },
        { id: 8, title: "Grid Layout", question: "Create a responsive grid layout using CSS Grid.", example: "The layout should adjust the number of columns based on screen size." },
        { id: 9, title: "Sticky Header", question: "Create a sticky header that remains at the top of the page while scrolling.", example: "The header should stay visible even when the user scrolls down the page." },
        { id: 10, title: "Form Validation", question: "Create a basic form with validation using JavaScript.", example: "The form should validate fields such as email, password, and confirm password." },
        { id: 11, title: "Lightbox", question: "Implement a lightbox for viewing images using HTML, CSS, and JavaScript.", example: "The lightbox should display images in a modal with next/previous navigation." },
        { id: 12, title: "Carousel/Slider", question: "Create a simple image carousel/slider using JavaScript.", example: "The slider should automatically cycle through images with navigation controls." },
        { id: 13, title: "Accordion Menu", question: "Implement an accordion menu using HTML, CSS, and JavaScript.", example: "The menu should expand/collapse sections when clicked." },
        { id: 14, title: "Weather App", question: "Build a basic weather app using a public API and JavaScript.", example: "The app should display the current weather based on the user's location." },
        { id: 15, title: "Responsive Footer", question: "Create a responsive footer using HTML and CSS.", example: "The footer should adjust its layout based on screen size." },
        { id: 16, title: "Pricing Table", question: "Build a responsive pricing table using HTML and CSS.", example: "The table should display different pricing plans with features and a sign-up button." },
        { id: 17, title: "Custom Dropdown Menu", question: "Create a custom dropdown menu using HTML, CSS, and JavaScript.", example: "The dropdown should open/close on click and be styled differently from the default select box." },
        { id: 18, title: "Progress Bar", question: "Implement a progress bar that updates dynamically based on user actions.", example: "The progress bar should fill up as the user completes steps in a form." },
        { id: 19, title: "Quiz Application", question: "Build a simple quiz application using JavaScript.", example: "The app should display questions, accept answers, and show the score at the end." },
        { id: 20, title: "Hover Effects", question: "Create hover effects for images using CSS.", example: "The effects could include zoom, grayscale, or rotate on hover." },
        { id: 21, title: "Sticky Sidebar", question: "Create a sticky sidebar using CSS and JavaScript.", example: "The sidebar should remain visible while scrolling through the main content." },
        { id: 22, title: "Login Form", question: "Build a responsive login form using HTML, CSS, and JavaScript.", example: "The form should include fields for email and password, and a submit button." },
        { id: 23, title: "Contact Form", question: "Create a basic contact form with validation using HTML, CSS, and JavaScript.", example: "The form should include fields for name, email, and message, with validation on submit." },
        { id: 24, title: "Infinite Scrolling", question: "Implement infinite scrolling using JavaScript.", example: "The page should load more content as the user scrolls down." },
        { id: 25, title: "Card Layout", question: "Create a responsive card layout using CSS Flexbox.", example: "The layout should display items in cards that adjust their size and position based on screen size." },
        { id: 26, title: "Scroll-Triggered Animations", question: "Implement animations that trigger when elements come into view while scrolling.", example: "Elements should fade in, slide in, or animate in some way when scrolled into view." },
        { id: 27, title: "Masonry Layout", question: "Create a masonry layout for images using CSS.", example: "The images should be arranged in a grid with varying sizes, similar to Pinterest." },
        { id: 28, title: "Portfolio Page", question: "Build a responsive portfolio page using HTML, CSS, and JavaScript.", example: "The page should display projects in a grid layout with images, titles, and descriptions." },
        { id: 29, title: "Parallax Scrolling", question: "Create a parallax scrolling effect using CSS and JavaScript.", example: "Background images should move at a different speed than the foreground content." },
        { id: 30, title: "Responsive Table", question: "Create a responsive table layout using HTML and CSS.", example: "The table should adjust its layout for smaller screens, possibly by stacking columns." },
        { id: 31, title: "Modal Form", question: "Implement a modal form using HTML, CSS, and JavaScript.", example: "The form should appear in a modal when a button is clicked and should have validation." },
        { id: 32, title: "Chat UI", question: "Build a simple chat application UI using HTML, CSS, and JavaScript.", example: "The UI should include chat bubbles, input for messages, and scrollable chat history." },
        { id: 33, title: "Loading Spinner", question: "Create a loading spinner using CSS.", example: "The spinner should animate while content is loading." },
        { id: 34, title: "Testimonial Carousel", question: "Build a testimonial carousel using HTML, CSS, and JavaScript.", example: "The carousel should cycle through different testimonials with next/previous controls." },
        { id: 35, title: "Newsletter Subscription Form", question: "Create a basic newsletter subscription form using HTML, CSS, and JavaScript.", example: "The form should include a field for email and a submit button, with validation." },
      ],
      database: [
        { id: 1, title: "Second Highest Salary", question: "Write a SQL query to find the second highest salary from the Employees table.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 2, title: "Employees Joined Last Year", question: "Fetch all employees who joined in the last year. The Employees table has a 'joining_date' column.", example: "Table: Employees, Columns: id, name, joining_date" },
        { id: 3, title: "No Bonus Employees", question: "Find all employees who have not received a bonus.", example: "Table: Employees, Columns: id, name, bonus" },
        { id: 4, title: "Count Employees per Department", question: "Write a SQL query to count the number of employees in each department.", example: "Table: Employees, Columns: id, name, department" },
        { id: 5, title: "Highest Salary by Department", question: "Find the employee with the highest salary in each department.", example: "Table: Employees, Columns: id, name, salary, department" },
        { id: 6, title: "Top 3 Salaries", question: "Write a SQL query to fetch the top 3 salaries from the Employees table.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 7, title: "Median Salary", question: "Write a SQL query to find the median salary in the Employees table.", example: "Table: Employees, Columns: id, salary" },
        { id: 8, title: "Above Average Salary Employees", question: "Fetch all employees whose salary is greater than the average salary.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 9, title: "Join Employees with Departments", question: "Write a SQL query to join the Employees table with the Departments table and fetch the employee names along with their department names.", example: "Tables: Employees, Departments, Columns: id, name, department_id" },
        { id: 10, title: "Employees with Same Salary", question: "Write a SQL query to find employees who have the same salary.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 11, title: "Delete Duplicate Rows", question: "Write a SQL query to delete duplicate rows in a table.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 12, title: "First 5 Characters of Employee Names", question: "Fetch the first 5 characters of each employee's name.", example: "Table: Employees, Columns: id, name" },
        { id: 13, title: "Total Salary by Department", question: "Write a SQL query to find the total salary paid to employees in each department.", example: "Table: Employees, Columns: id, salary, department" },
        { id: 14, title: "Employees and Their Managers", question: "Write a SQL query to fetch the employee details along with their manager's name.", example: "Tables: Employees, Managers, Columns: id, name, manager_id" },
        { id: 15, title: "Total Sales by Salesperson", question: "Write a SQL query to calculate the total number of sales by each salesperson.", example: "Table: Sales, Columns: id, salesperson_id, amount" },
        { id: 16, title: "Customers with More Than 3 Orders", question: "Find all customers who have made more than 3 orders.", example: "Table: Orders, Columns: id, customer_id" },
        { id: 17, title: "Group Sales by Month", question: "Write a SQL query to group data by month and calculate monthly sales.", example: "Table: Sales, Columns: id, sale_date, amount" },
        { id: 18, title: "Top 10 Most Purchased Products", question: "Find the top 10 most purchased products.", example: "Table: Products, Sales, Columns: id, product_id, quantity" },
        { id: 19, title: "Rank Employees by Salary", question: "Write a SQL query to rank employees by salary.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 20, title: "Employees with Same First and Last Name", question: "Fetch the employees who have the same first and last name.", example: "Table: Employees, Columns: id, first_name, last_name" },
        { id: 21, title: "Retrieve Data in JSON Format", question: "Write a SQL query to retrieve employee data in JSON format.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 22, title: "Employees Without Projects", question: "Find employees who have not worked on any projects.", example: "Tables: Employees, Projects, Columns: employee_id, project_id" },
        { id: 23, title: "Update Multiple Records", question: "Write a SQL query to update multiple records based on a condition.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 24, title: "Orders Placed in the Last 30 Days", question: "Fetch all orders placed in the last 30 days.", example: "Table: Orders, Columns: id, order_date" },
        { id: 25, title: "Join Three Tables", question: "Write a SQL query to join three tables and fetch related data.", example: "Tables: Employees, Departments, Locations, Columns: employee_id, department_id, location_id" },
        { id: 26, title: "Salary Between 50,000 and 100,000", question: "Find all employees whose salary is between $50,000 and $100,000.", example: "Table: Employees, Columns: id, name, salary" },
        { id: 27, title: "Pivot Data for Reporting", question: "Write a SQL query to pivot data for reporting purposes.", example: "Table: Sales, Columns: id, sale_date, amount" },
        { id: 28, title: "Total Sales by Product Category", question: "Fetch the total sales by each product category.", example: "Table: Products, Sales, Columns: id, category_id, amount" },
        { id: 29, title: "Count NULL Values in a Column", question: "Write a SQL query to count the number of NULL values in a column.", example: "Table: Employees, Columns: id, bonus" },
        { id: 30, title: "Employees with Higher Salary than Manager", question: "Find the employees who have a higher salary than their manager.", example: "Tables: Employees, Managers, Columns: employee_id, manager_id, salary" },
        { id: 31, title: "Employees with 5+ Years Tenure", question: "Fetch the employees who have been with the company for more than 5 years.", example: "Table: Employees, Columns: id, name, joining_date" },
        { id: 32, title: "Orders from Last Year", question: "Find all customers who have placed orders in the last year.", example: "Table: Orders, Columns: id, customer_id, order_date" },
        { id: 33, title: "Last 5 Records in Table", question: "Write a SQL query to fetch the last 5 records in a table.", example: "Table: Employees, Columns: id, name" },
        { id: 34, title: "Employee Names Starting with 'A'", question: "Fetch the employee names starting with 'A'.", example: "Table: Employees, Columns: id, name" },
        { id: 35, title: "Percentage of Total Sales by Product", question: "Calculate the percentage of total sales contributed by each product.", example: "Table: Products, Sales, Columns: product_id, amount" },
      ],
};

function HandsOnLabsPage() {
  const [selectedCategory, setSelectedCategory] = useState('java');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedQuestion(null); // Reset selected question when category changes
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  const goBack = () => {
    setSelectedQuestion(null); // Go back to question list
  };

  return (
    <div className="hands-on-labs-page">
      {selectedQuestion ? (
        <QuestionDetail
          question={selectedQuestion}
          category={selectedCategory}
          goBack={goBack}
        />
      ) : (
        <div>
          <div className="category-selection">
            <button
              className={selectedCategory === 'java' ? 'active' : ''}
              onClick={() => handleCategoryChange('java')}
            >
              Java
            </button>
            <button
              className={selectedCategory === 'frontend' ? 'active' : ''}
              onClick={() => handleCategoryChange('frontend')}
            >
              Front-end
            </button>
            <button
              className={selectedCategory === 'database' ? 'active' : ''}
              onClick={() => handleCategoryChange('database')}
            >
              Database
            </button>
          </div>

          <div className="questions-grid">
            {randomQuestions[selectedCategory].map((q) => (
              <div key={q.id} className="question-card" onClick={() => handleQuestionSelect(q)}>
                <div className="question-number">#{q.id}</div>
                <div className="question-title">{q.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HandsOnLabsPage;
