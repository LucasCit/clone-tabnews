function status(request, response) {
  response.status(200).json({ chave: "valorzão" });
  //send("Resposta aqui!");
}

export default status;
