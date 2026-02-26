import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running", endpoints: ["/tasks", "/tarefas"] });
});

app.use("/tasks", tasksRouter);
app.use("/tarefas", tasksRouter);

export default app;
