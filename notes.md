// Importing API Services

// Import the entire file:
import apiServices from '../../../services/apiService';

// To use a specific function like `fetchProducts` from the imported file:
apiServices.fetchProducts();

// Alternatively, if you want to destructure and import only `fetchProducts`:
import { fetchProducts } from '../../../services/apiService';

// Box in Material UI

// In Material UI, a `Box` component is similar to a `div` in HTML and allows you to use flex options like `row` and `column`.

// Navigation and Routing

// When defining routes with child elements, omit the leading `/` on the parent route.
// Use `<NavLink>` to redirect from one link to another, and `<Link>` for simple routing.
// To add a book path like "books/add," use `<Navigate router path="books/add">`.
// For modifying forms to make them flex and grow to fit the input box across the row, use appropriate flex settings.
// To navigate to a specific route programmatically, use the `useNavigate()` hook.
// React reducers can be used in an admin dashboard and API services.
// To go back in the browser's history, use `window.history.back()`.

// Material UI Components

// Material UI provides various components like `Image`, `Avatar`, and `Box` that you can use to build user interfaces. Refer to the Material UI documentation for more details on how to use these components effectively.
