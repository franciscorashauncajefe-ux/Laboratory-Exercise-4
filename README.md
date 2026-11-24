# CvSU Mini Store — Laboratory Exercise 4

React live search and filter using `useState`, `useEffect`, controlled inputs, debounce, filtering, and sorting.

## Run
1. Open this folder in VS Code.
2. Open Terminal > New Terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the localhost URL shown in the terminal.

## Features
- Controlled search input, category dropdown, and price sorting
- Clear Filters button
- 300ms debounced search with cleanup
- Combined keyword and category filtering
- Result count and no-results message
- Browser tab title updates with result count
- Lab 3 cart callback remains functional

## Guide Questions

1. **Why use `searchText` and `debouncedSearch` separately?**  
   `searchText` changes immediately as the user types. `debouncedSearch` changes after a 300ms pause, so the app does not filter on every keystroke.

2. **What if the debounce effect has no cleanup function?**  
   Old timers keep running after new text is entered. This causes unnecessary updates and may process outdated search values. Cleanup cancels the previous timer.

3. **What is the dependency array? What if it is empty or omitted?**  
   It tells React when to rerun an effect. An empty array runs after the initial render only. If omitted, the effect runs after every render.

4. **Why avoid sorting the original products array?**  
   `sort()` mutates the array. Changing the original data can cause unexpected behavior elsewhere. A copy should be sorted instead.

5. **Should filtered products be stored in state or calculated?**  
   Calculate them from the existing search, category, and sort states. They are derived data, so another state is unnecessary and could become out of sync.

## Git workflow
Create the Lab 4 branch before editing:

```bash
git switch -c lab4-live-search
```

Make at least four meaningful commits:
1. `Add controlled SearchBar component`
2. `Implement product filtering and price sorting`
3. `Add debounced search with useEffect cleanup`
4. `Add result title, clear filters, and empty state`

Push both branches:
```bash
git push -u origin lab4-live-search
git push origin main
```
