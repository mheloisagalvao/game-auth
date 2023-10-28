import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import Nav from './src/nav';

export default function App() {
  return (
    <>
      <StatusBar />
      <PaperProvider>
        <Nav />
      </PaperProvider>
    </>

  );
}

