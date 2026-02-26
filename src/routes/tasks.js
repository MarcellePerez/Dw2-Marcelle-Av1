import { Router } from "express";
import { tarefas, getNextId } from "../dados.js";

const router = Router();

// GET / - retorna lista de tarefas
router.get("/", (req, res) => {
  return res.status(200).json(tarefas);
});

// POST / - cria nova tarefa com validação
router.post("/", (req, res) => {
  const { titulo, concluida } = req.body;

  if (!titulo || typeof titulo !== "string" || titulo.trim() === "") {
    return res.status(400).json({ erro: "Título é obrigatório." });
  }

  const novaTarefa = {
    id: getNextId(),
    titulo: titulo.trim(),
    concluida: !!concluida,
  };

  tarefas.push(novaTarefa);

  return res.status(201).json(novaTarefa);
});

export default router;
