//base simples contendo as informações dos projetos que serão exibidas na página "projetos e vagas" e nas páginas individuais dos projetos

//ao alterar algo aqui, os arquivos são atualizados automaticamente

var db_projetos_inicial = {
  dados: [
    {
      id: 1,
      nome: "Projeto 1",
      cidade: "Cidade 1",
      resumo: "Resumo 1",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus iusto quo in quasi molestias voluptate eligendi obcaecati? Consequatur qui quasi velit cupiditate laborum non perferendis consequuntur asperiores nulla minima mollitia itaque, aliquid soluta nisi! Quod, ea. Repellendus quo aspernatur ducimus molestiae aliquam voluptatibus non placeat ab, magni omnis, in assumenda dignissimos quidem veniam reprehenderit delectus pariatur accusantium voluptas ex. Veritatis, excepturi dicta quia ut nisi labore vitae, eveniet vero sed blanditiis, iusto expedita quisquam exercitationem molestias aperiam quam? Numquam eum quos at vitae sapiente? Illo, reiciendis ipsa eius iure tempora et modi ab, quibusdam asperiores cupiditate harum ex.",
      imagem: "/projetos/img/projeto (1).jpg",
      email: "projeto1@example.com",
      telefone: "99 9999 9991",
      website: "www.projeto1.com",
    },
    {
      id: 2,
      nome: "Projeto 2",
      cidade: "Cidade 2",
      resumo: "Resumo 2",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus iusto quo in quasi molestias voluptate eligendi obcaecati? Consequatur qui quasi velit cupiditate laborum non perferendis consequuntur asperiores nulla minima mollitia itaque, aliquid soluta nisi! Quod, ea. Repellendus quo aspernatur ducimus molestiae aliquam voluptatibus non placeat ab, magni omnis, in assumenda dignissimos quidem veniam reprehenderit delectus pariatur accusantium voluptas ex. Veritatis, excepturi dicta quia ut nisi labore vitae, eveniet vero sed blanditiis, iusto expedita quisquam exercitationem molestias aperiam quam? Numquam eum quos at vitae sapiente? Illo, reiciendis ipsa eius iure tempora et modi ab, quibusdam asperiores cupiditate harum ex.",
      imagem: "/projetos/img/projeto (2).jpg",
      email: "projeto2@example.com",
      telefone: "99 9999 9992",
      website: "www.projeto2.com",
    },
    {
      id: 3,
      nome: "Projeto 3",
      cidade: "Cidade 3",
      resumo: "Resumo 3",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus iusto quo in quasi molestias voluptate eligendi obcaecati? Consequatur qui quasi velit cupiditate laborum non perferendis consequuntur asperiores nulla minima mollitia itaque, aliquid soluta nisi! Quod, ea. Repellendus quo aspernatur ducimus molestiae aliquam voluptatibus non placeat ab, magni omnis, in assumenda dignissimos quidem veniam reprehenderit delectus pariatur accusantium voluptas ex. Veritatis, excepturi dicta quia ut nisi labore vitae, eveniet vero sed blanditiis, iusto expedita quisquam exercitationem molestias aperiam quam? Numquam eum quos at vitae sapiente? Illo, reiciendis ipsa eius iure tempora et modi ab, quibusdam asperiores cupiditate harum ex.",
      imagem: "/projetos/img/projeto (3).jpg",
      email: "projeto3@example.com",
      telefone: "99 9999 9993",
      website: "www.projeto3.com",
    },
    {
      id: 4,
      nome: "Projeto 4",
      cidade: "Cidade 4",
      resumo: "Resumo 4",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus iusto quo in quasi molestias voluptate eligendi obcaecati? Consequatur qui quasi velit cupiditate laborum non perferendis consequuntur asperiores nulla minima mollitia itaque, aliquid soluta nisi! Quod, ea. Repellendus quo aspernatur ducimus molestiae aliquam voluptatibus non placeat ab, magni omnis, in assumenda dignissimos quidem veniam reprehenderit delectus pariatur accusantium voluptas ex. Veritatis, excepturi dicta quia ut nisi labore vitae, eveniet vero sed blanditiis, iusto expedita quisquam exercitationem molestias aperiam quam? Numquam eum quos at vitae sapiente? Illo, reiciendis ipsa eius iure tempora et modi ab, quibusdam asperiores cupiditate harum ex.",
      imagem: "/projetos/img/projeto (4).jpg",
      email: "projeto4@example.com",
      telefone: "99 9999 9994",
      website: "www.projeto4.com",
    },
    {
      id: 5,
      nome: "Projeto 5",
      cidade: "Cidade 5",
      resumo: "Resumo 5",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus iusto quo in quasi molestias voluptate eligendi obcaecati? Consequatur qui quasi velit cupiditate laborum non perferendis consequuntur asperiores nulla minima mollitia itaque, aliquid soluta nisi! Quod, ea. Repellendus quo aspernatur ducimus molestiae aliquam voluptatibus non placeat ab, magni omnis, in assumenda dignissimos quidem veniam reprehenderit delectus pariatur accusantium voluptas ex. Veritatis, excepturi dicta quia ut nisi labore vitae, eveniet vero sed blanditiis, iusto expedita quisquam exercitationem molestias aperiam quam? Numquam eum quos at vitae sapiente? Illo, reiciendis ipsa eius iure tempora et modi ab, quibusdam asperiores cupiditate harum ex.",
      imagem: "/projetos/img/projeto (5).jpg",
      email: "projeto5@example.com",
      telefone: "99 9999 9995",
      website: "www.projeto5.com",
    },
    {
      id: 6,
      nome: "Projeto 6",
      cidade: "Cidade 6",
      resumo: "Resumo 6",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus iusto quo in quasi molestias voluptate eligendi obcaecati? Consequatur qui quasi velit cupiditate laborum non perferendis consequuntur asperiores nulla minima mollitia itaque, aliquid soluta nisi! Quod, ea. Repellendus quo aspernatur ducimus molestiae aliquam voluptatibus non placeat ab, magni omnis, in assumenda dignissimos quidem veniam reprehenderit delectus pariatur accusantium voluptas ex. Veritatis, excepturi dicta quia ut nisi labore vitae, eveniet vero sed blanditiis, iusto expedita quisquam exercitationem molestias aperiam quam? Numquam eum quos at vitae sapiente? Illo, reiciendis ipsa eius iure tempora et modi ab, quibusdam asperiores cupiditate harum ex.",
      imagem: "/projetos/img/projeto (6).jpg",
      email: "projeto6@example.com",
      telefone: "99 9999 9996",
      website: "www.projeto6.com",
    },
    {
      id: 7,
      nome: "Projeto 7",
      cidade: "Cidade 7",
      resumo: "Resumo 7",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus iusto quo in quasi molestias voluptate eligendi obcaecati? Consequatur qui quasi velit cupiditate laborum non perferendis consequuntur asperiores nulla minima mollitia itaque, aliquid soluta nisi! Quod, ea. Repellendus quo aspernatur ducimus molestiae aliquam voluptatibus non placeat ab, magni omnis, in assumenda dignissimos quidem veniam reprehenderit delectus pariatur accusantium voluptas ex. Veritatis, excepturi dicta quia ut nisi labore vitae, eveniet vero sed blanditiis, iusto expedita quisquam exercitationem molestias aperiam quam? Numquam eum quos at vitae sapiente? Illo, reiciendis ipsa eius iure tempora et modi ab, quibusdam asperiores cupiditate harum ex.",
      imagem: "/projetos/img/projeto (7).jpg",
      email: "projeto7@example.com",
      telefone: "99 9999 9997",
      website: "www.projeto7.com",
    },
    {
      id: 8,
      nome: "Projeto 8",
      cidade: "Cidade 8",
      resumo: "Resumo 8",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus iusto quo in quasi molestias voluptate eligendi obcaecati? Consequatur qui quasi velit cupiditate laborum non perferendis consequuntur asperiores nulla minima mollitia itaque, aliquid soluta nisi! Quod, ea. Repellendus quo aspernatur ducimus molestiae aliquam voluptatibus non placeat ab, magni omnis, in assumenda dignissimos quidem veniam reprehenderit delectus pariatur accusantium voluptas ex. Veritatis, excepturi dicta quia ut nisi labore vitae, eveniet vero sed blanditiis, iusto expedita quisquam exercitationem molestias aperiam quam? Numquam eum quos at vitae sapiente? Illo, reiciendis ipsa eius iure tempora et modi ab, quibusdam asperiores cupiditate harum ex.",
      imagem: "/projetos/img/projeto (8).jpg",
      email: "projeto8@example.com",
      telefone: "99 9999 9998",
      website: "www.projeto8.com",
    },
  ],
};

// Caso os dados já estejam no Session Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(sessionStorage.getItem("db_contato"));
if (!db) {
  db = db_projetos_inicial;
}

function displayMessage(msg) {
  $("#msg").html('<div class="alert alert-warning">' + msg + "</div>");
}

function insertProjeto(projeto) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1;
  if (db.dados.length != 0) novoId = db.dados[db.dados.length - 1].id + 1;
  let novoProjeto = {
    id: novoId,
    nome: projeto.nome,
    cidade: projeto.cidade,
    resumo: projeto.resumo,
    descricao: projeto.descricao,
    imagem: projeto.imagem,
    email: projeto.email,
    telefone: projeto.telefone,
    website: projeto.website,
  };

  // Insere o novo objeto no array
  db.dados.push(novoProjeto);
  displayMessage("Projeto inserido com sucesso");

  // Atualiza os dados no Session Storage
  sessionStorage.setItem("db_projeto", JSON.stringify(db));
}

function updateProjeto(id, projeto) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.dados.map((obj) => obj.id).indexOf(id);

  // Altera os dados do objeto no array
  (db.dados[index].nome = contato.nome),
    (db.dados[index].cidade = contato.cidade),
    (db.dados[index].resumo = contato.resumo),
    (db.dados[index].descricao = contato.descricao),
    (db.dados[index].imagem = contato.imagem),
    (db.dados[index].email = contato.email),
    (db.dados[index].telefone = contato.telefone),
    (db.dados[index].website = contato.website),
    displayMessage("Projeto alterado com sucesso");

  // Atualiza os dados no Session Storage
  sessionStorage.setItem("db_projeto", JSON.stringify(db));
}

function deleteProjeto(id) {
  // Filtra o array removendo o elemento com o id passado
  db.dados = db.dados.filter(function (element) {
    return element.id != id;
  });

  displayMessage("Projeto removido com sucesso");

  // Atualiza os dados no Session Storage
  sessionStorage.setItem("db_projeto", JSON.stringify(db));
}
