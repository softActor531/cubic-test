import React from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@mui/styles';

// import store
import store from './redux/store/configureStore';

// import child components
import AddContact from './components/AddContact';
import EntryList from './components/EntryList';

const useStyles = makeStyles(() => ({
  app: {
    width: '100%',
    height: '100%',
    padding: '3em 2em'
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.app}>
        <AddContact />
        <EntryList />
      </div>
    </Provider>
  );
}

export default App;
