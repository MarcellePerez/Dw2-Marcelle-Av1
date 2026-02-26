// script simples de testes para API local
// Executa: GET /tasks, POST válido, POST inválido

async function request(method, path, body) {
  const url = `http://localhost:3000${path}`;
  const opts = { method, headers: {} };
  if (body) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }

  const res = await fetch(url, opts);
  let text;
  try { text = await res.text(); } catch (e) { text = '<no body>'; }
  let parsed;
  try { parsed = JSON.parse(text); } catch (e) { parsed = text; }
  return { status: res.status, body: parsed };
}

async function run() {
  console.log('Testando GET /tasks');
  const getRes = await request('GET', '/tasks');
  console.log('Status:', getRes.status);
  console.log('Body:', JSON.stringify(getRes.body, null, 2));

  console.log('\nTestando POST /tasks (válido)');
  const postOk = await request('POST', '/tasks', { titulo: 'Tarefa de teste', concluida: false });
  console.log('Status:', postOk.status);
  console.log('Body:', JSON.stringify(postOk.body, null, 2));

  console.log('\nTestando POST /tasks (inválido - título vazio)');
  const postBad = await request('POST', '/tasks', { titulo: '   ' });
  console.log('Status:', postBad.status);
  console.log('Body:', JSON.stringify(postBad.body, null, 2));
}

run().catch(err => {
  console.error('Erro ao executar testes:', err.message || err);
  process.exit(1);
});
