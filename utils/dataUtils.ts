import { profListMock, uniListMock } from "./mocks";

export function getUniversityList() {
  let stringifiedList = localStorage.getItem("uniList");
  if (!stringifiedList) {
    localStorage.setItem("uniList", JSON.stringify(uniListMock));
    stringifiedList = localStorage.getItem("uniList") || "";
  }
  return JSON.parse(stringifiedList) as any[];
}

export function getUniversityByName(name: string) {
  return getUniversityList().find((uni) => uni.name === name);
}

export function updateUniversityByName(name: string, data: any) {
  const newList = getUniversityList().map((uni) => {
    if (uni.name === name) {
      return { ...uni, ...data };
    }
    return uni;
  });
  localStorage.setItem("uniList", JSON.stringify(newList));
}

export function getProfessorList() {
  let stringifiedList = localStorage.getItem("profList");
  if (!stringifiedList) {
    localStorage.setItem("profList", JSON.stringify(profListMock));
    stringifiedList = localStorage.getItem("profList") || "";
  }
  return JSON.parse(stringifiedList) as any[];
}

export function getProfessorByName(name: string) {
  return getProfessorList().find((uni) => uni.name === name);
}

export function updateProfessorByName(name: string, data: any) {
  const newList = getProfessorList().map((uni) => {
    if (uni.name === name) {
      return { ...uni, ...data };
    }
    return uni;
  });
  localStorage.setItem("profList", JSON.stringify(newList));
}
