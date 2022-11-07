function microondas(prato, tempo) {
    const tempoPipoca = 10
    const tempoMacarrao = 8
    const tempoCarne = 15
    const tempoFeijao = 12
    const tempoBrigadeiro = 8
  
  
    if (prato === "Pipoca") {
      if (tempo >= tempoPipoca * 3) return "Kabum"
      else if (tempo >= tempoPipoca * 2) return "Queimou"
      else if (tempo < tempoPipoca) return "Tempo insuficiente"
    }
    else if (prato === "Macarrão") {
      if (tempo >= tempoMacarrao * 3) return "Kabum"
      else if (tempo >= tempoMacarrao * 2) return "Queimou"
      else if (tempo < tempoMacarrao) return "Tempo insuficiente"
    }
    else if (prato === "Carne") {
      if (tempo >= tempoCarne * 3) return "Kabum"
      else if (tempo >= tempoCarne * 2) return "Queimou"
      else if (tempo < tempoCarne) return "Tempo insuficiente"
    }
    else  if (prato === "Feijão") {
      if (tempo >= tempoFeijao * 3) return "Kabum"
      else if (tempo >= tempoFeijao * 2) return "Queimou"
      else if (tempo < tempoFeijao) return "Tempo insuficiente"
    }
    else if (prato === "Brigadeiro") {
      if (tempo >= tempoBrigadeiro * 3) return "Kabum"
      else if (tempo >= tempoBrigadeiro * 2) return "Queimou"
      else if (tempo < tempoBrigadeiro) return "Tempo insuficiente"
    }
    else { 
      return "Produto nao cadastrado"
    }
  
    return "deu certo"
  }
  
  console.log(microondas('Pipoca2',30))
  