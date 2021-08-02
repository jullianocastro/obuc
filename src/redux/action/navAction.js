export function nav1(localdeTrabalho) {
  return {
    type: "NAV",
    payload: [localdeTrabalho],
  };
}


export function nav2(administracao) {
  return {
    type: "NAV2",
    payload: [administracao],
  };
}