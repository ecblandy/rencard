import axios from "axios";

type HttpErrorResponse = {
  detail?: string;
};

export function throwHttpDetail(error: unknown): never {
  if (axios.isAxiosError<HttpErrorResponse>(error)) {
    const detail = error.response?.data?.detail ?? "Erro inesperado";
    throw new Error(detail);
  }

  throw new Error("Erro inesperado");
}
