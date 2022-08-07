import Employee from './pages/employee/Employee';
import ContextDataProvider from './contexts/ContextDataProvider';

function App() {
  return (
    <div className="App">
      <ContextDataProvider>
        <Employee />
      </ContextDataProvider>
    </div>
  );
}

export default App;
