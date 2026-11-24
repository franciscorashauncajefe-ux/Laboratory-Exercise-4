# CvSU Mini Store — Laboratory Exercise 3

A React mini product catalog demonstrating props, component communication, conditional rendering, children, and list rendering with `.map()`.

## Requirements
- Node.js and npm
- Visual Studio Code

## Run the project
1. Extract the ZIP file.
2. Open the `product-catalog` folder in VS Code.
3. Open the VS Code terminal: **Terminal > New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Project structure

```text
product-catalog/
├── index.html
├── package.json
├── README.md
└── src/
    ├── components/
    │   ├── ProductCard.jsx
    │   └── ProductCard.css
    ├── data/
    │   └── products.js
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

## Guide Questions

1. **What is the difference between props and state?**  
   Props are values passed from a parent component to a child component. State is data a component manages and can update while the app is running.

2. **Why can a child component not modify the props it receives?**  
   Props are read-only. Keeping them unchanged helps make components predictable and lets the parent control the data.

3. **How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?**  
   The parent passes a function to the child as a prop. When the button is clicked, the child calls that function and sends the product title back to the parent.

4. **Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?**  
   A key helps React identify each item in a list when it updates the page. Missing or duplicated keys can cause warnings and may make React update the wrong list item.

5. **What does the children prop allow you to do that a normal prop does not?**  
   The children prop lets a component receive content placed between its opening and closing tags, such as a New or Popular badge.

## Suggested Git commits

Run these commands in the project terminal after opening the project folder:

```bash
git init
git add .
git commit -m "Initial React product catalog setup"
git commit --allow-empty -m "Add reusable ProductCard component"
git commit --allow-empty -m "Implement cart callback and message"
git commit --allow-empty -m "Style responsive product catalog"
```

Then create an empty GitHub repository named `product-catalog` and connect it (replace the URL with your own repository URL):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/product-catalog.git
git push -u origin main
```

**Note:** The empty commits above are only an example of commit messages. For meaningful commits, make each commit after the related files or changes are added. See the step-by-step commit example below.

### Better four-commit workflow

If you want the commits to reflect the actual work, use this sequence while building:
1. Create the Vite project and commit the initial setup.
2. Add `products.js` and `ProductCard.jsx`, then commit.
3. Add the parent cart state and callback, then commit.
4. Add CSS styling and README, then commit.
