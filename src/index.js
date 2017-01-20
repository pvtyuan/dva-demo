import dva from "dva";
import { persistStore, autoRehydrate } from 'redux-persist';
import "./index.css";

// 1. Initialize
const app = dva({
  extraEnhancers: [autoRehydrate()],
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/AppModel"));
app.model(require("./models/LoginModel"));


// 4. Router
app.router(require("./router"));

// 5. Start
app.start("#root");
persistStore(app._store);
