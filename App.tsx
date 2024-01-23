import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}
