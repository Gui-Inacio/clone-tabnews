function status(request, response) {
  response.status(200).json({ chave: "Deu tudo bão!" });
}

export default status;
