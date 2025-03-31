function setBody(value) {
  if (/^\d+$/.test(value)) {
    return "codigo_produto"
  }

  return "nome_produto"
}

export default setBody