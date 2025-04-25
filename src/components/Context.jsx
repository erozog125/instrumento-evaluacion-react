const context = createcontext({ });
const ContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [PriceMin, setPriceMin] = useState(0);
  const [PriceMax, setPriceMax] = useState(0);

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <context.Provider value={{ state, updateState }}>
      {children}
     
    </context.Provider>
  );
}