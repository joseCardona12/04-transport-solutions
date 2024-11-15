const defaultBaseUrl = "https://maintenancesystembc-production.up.railway.app/api/v1";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IUserLogged } from "@/app/core/application/interfaces";
import { getServerSession } from "next-auth/next";


export default class HttpClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  private async getHeader(token?: string) {
    const session = await getServerSession(authOptions);
    const userLogged = session?.user as IUserLogged;
  
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${userLogged.token}`;
    }

    return headers;
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      try {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ocurrio un error en la petición");
      } catch (error) {
        throw new Error("Ocurrio un error en la petición, pero no se pudo parsear la respuesta");
      }
    }
    return await response.json();
  }

  async get<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    console.log("header", headers);
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "GET",
      cache: "no-store",
    });
    console.log(response, response.status);
    return this.handleResponse(response);
  }

  async delete<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "DELETE",
    });
    return this.handleResponse(response);
  }

  async post<T, B>(url: string, body: B): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    });
    console.log("response", response);
    return this.handleResponse(response);
  }

  async put<T, B>(url: string, body: B): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(body),
    });
    return this.handleResponse(response);
  }
}
