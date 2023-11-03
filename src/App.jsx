import {RouterProvider} from "react-router-dom";
import router from './router.jsx';
import {useThemeContext} from "./contexts/theme-context.jsx";
function App() {
    const {isDarkMode} = useThemeContext();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
