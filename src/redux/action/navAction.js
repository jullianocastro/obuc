export function nav1(administracao) {
  return {
    type: "NAV1",
    payload: [administracao],
  };
}

export function nav2(administradores) {
  return {
    type: "NAV2",
    payload: [administradores],
  };
}

export function nav3(areas) {
  return {
    type: "NAV3",
    payload: [areas],
  };
}

export function nav4(localdeTrabalho) {
  return {
    type: "NAV4",
    payload: [localdeTrabalho],
  };
}

export function nav5(habilidades) {
  return {
    type: "NAV5",
    payload: [habilidades],
  };
}

export function nav6(log) {
  return {
    type: "NAV6",
    payload: [log],
  };
}

export function nav7(responsaveis) {
  return {
    type: "NAV7",
    payload: [responsaveis],
  };
}
